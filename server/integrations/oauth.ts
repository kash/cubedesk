import {Integration} from '@/types/integration';
import {InternalUserAccount, UserAccount} from '@/types/user';
import axios from 'axios';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '../../shared/integration';
import {createIntegration, getIntegration, updateIntegration} from '../models/integration';
import {updateUserProfile} from '../models/profile';
import {getDiscordMe} from './discord';

export async function linkOAuthAccount(intType: IntegrationType, user: InternalUserAccount, code: string) {
	const int = await getIntegration(user, intType);

	if (int) {
		return true;
	}

	const service = LINKED_SERVICES[intType];

	const {accessToken, refreshToken, expiresIn, createdAt} = await getOAuthPostRequest(
		service,
		service.tokenEndpoint,
		{
			grant_type: 'authorization_code',
			code,
		}
	);

	const integration = await createIntegration(user, intType, accessToken, refreshToken, createdAt + expiresIn);

	if (intType === 'discord') {
		// Discord has its own column in the user profile
		const discordMe = await getDiscordMe(user);
		await updateUserProfile(user.profile, {
			discord_id: discordMe.id,
		});
	}

	return integration;
}

async function getOAuthPostRequest(
	service: LinkedServiceData,
	serviceEndpoint: string,
	additionalData: {[key: string]: string} = {}
) {
	const intType = service.id;
	const secretEnvKey = `${intType.toUpperCase()}_SECRET`;
	const clientSecret = process.env[secretEnvKey];
	if (!clientSecret) {
		throw new Error(`${secretEnvKey} is not set`);
	}

	const params = new URLSearchParams();
	params.append('client_id', service.clientId);
	params.append('client_secret', clientSecret);
	params.append('redirect_uri', `${process.env.BASE_URI}/oauth/${intType}`);

	for (const [key, value] of Object.entries(additionalData)) {
		params.append(key, value);
	}

	const res = await axios.post(serviceEndpoint, params, {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});

	return {
		accessToken: res.data.access_token,
		refreshToken: res.data.refresh_token,
		expiresIn: res.data.expires_in,
		createdAt: new Date().getTime(),
	};
}

export async function getAuthToken(intType: IntegrationType, user: UserAccount): Promise<string | null> {
	const integration = await getIntegration(user, intType);
	if (!integration) {
		return null;
	}

	let authToken: string | null = integration.auth_token;
	const expiresAt = new Date(Number(integration.auth_expires_at) * 1000);
	const now = new Date();

	if (expiresAt < now) {
		authToken = await getNewAuthToken(integration);
	}

	return authToken;
}

async function getNewAuthToken(integration: Integration) {
	const intType = integration.service_name;
	const service = LINKED_SERVICES[intType];

	try {
		const {accessToken, refreshToken, expiresIn, createdAt} = await getOAuthPostRequest(
			service,
			service.tokenEndpoint,
			{
				grant_type: 'refresh_token',
				refresh_token: integration.refresh_token,
			}
		);

		const int = await updateIntegration(integration, {
			auth_token: accessToken,
			auth_expires_at: createdAt + expiresIn,
			refresh_token: refreshToken,
		});

		return int.auth_token;
	} catch (e) {
		return null;
	}
}

export async function getIntegrationGetMe(intType: IntegrationType, user: UserAccount) {
	const authToken = await getAuthToken(intType, user);
	const service = LINKED_SERVICES[intType];

	const res = await axios.get(service.meEndpoint, {
		headers: {
			Authorization: 'Bearer ' + authToken,
		},
	});

	const me = res?.data?.me;

	if (me) {
		return me;
	} else if (!me && res?.data) {
		return res.data;
	} else {
		throw new Error('Invalid request');
	}
}

export async function revokeIntegration(intType: IntegrationType, user: UserAccount) {
	const service = LINKED_SERVICES[intType];
	const auth = await getAuthToken(intType, user);

	if (auth) {
		await getOAuthPostRequest(service, service.revokeEndpoint, {
			token: auth,
		});
	}

	if (intType === 'discord') {
		await updateUserProfile(user.profile, {
			discord_id: null,
		});
	}
}
