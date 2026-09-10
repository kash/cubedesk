import {createIntegration, getIntegration, updateIntegration} from '@/server/models/integration';
import {getOrCreateUserProfile, updateUserProfile} from '@/server/models/profile';
import {IntegrationType, LINKED_SERVICES, LinkedServiceData} from '@/shared/integration';
import {Integration} from '@/types/integration';
import {UserAccount} from '@/types/user';
import {TRPCError} from '@trpc/server';
import axios from 'axios';

type OAuthUser = Pick<UserAccount, 'id'>;

export class RevokedIntegrationError extends TRPCError {
	constructor() {
		super({
			code: 'BAD_REQUEST',
			message: 'This account is no longer linked. Please link it again.',
		});
	}
}

function relinkError(type: IntegrationType) {
	return new TRPCError({
		code: 'BAD_REQUEST',
		message: `Please relink your ${LINKED_SERVICES[type].name} account.`,
	});
}

export async function linkOAuthAccount(
	intType: IntegrationType,
	user: OAuthUser,
	code: string,
	redirectUri: string,
) {
	const existing = await getIntegration(user, intType);
	const service = LINKED_SERVICES[intType];
	const tokens = await getOAuthPostRequest(service, service.tokenEndpoint, {
		grant_type: 'authorization_code',
		code,
		redirect_uri: redirectUri,
	});
	const expiresAt = getExpiresAt(tokens);

	// Verify the granted identity before persisting a linked account.
	const identity = await getIdentity(intType, tokens.access_token).catch(() => {
		throw new TRPCError({
			code: 'BAD_GATEWAY',
			message: `Could not read your ${service.name} account. Please try linking again.`,
		});
	});
	if (intType === 'discord') {
		const profile = await getOrCreateUserProfile(user);
		await updateUserProfile(profile, {discord_id: String(identity.id)});
	}

	if (existing) {
		return updateIntegration(existing, {
			auth_token: tokens.access_token,
			refresh_token: tokens.refresh_token || '',
			auth_expires_at: expiresAt,
		});
	}
	return createIntegration(
		user,
		intType,
		tokens.access_token,
		tokens.refresh_token || '',
		expiresAt,
	);
}

async function getOAuthPostRequest(
	service: LinkedServiceData,
	serviceEndpoint: string,
	additionalData: {[key: string]: string} = {},
) {
	const clientSecret = process.env[`${service.id.toUpperCase()}_SECRET`];
	if (!clientSecret) {
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `${service.name} linking is not configured. Please try again later.`,
		});
	}
	const params = new URLSearchParams({
		client_id: service.clientId,
		client_secret: clientSecret,
		...additionalData,
	});
	try {
		const res = await axios.post(serviceEndpoint, params.toString(), {
			headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			timeout: 15000,
		});
		return res.data;
	} catch (error) {
		// Axios errors include request credentials. Return only a safe, actionable message.
		const reason = axios.isAxiosError<{error?: string}>(error)
			? error.response?.data?.error
			: undefined;
		if (reason === 'invalid_grant' && additionalData.grant_type === 'refresh_token') {
			throw new RevokedIntegrationError();
		}
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message:
				reason === 'invalid_grant'
					? 'This authorization expired or was already used. Please start linking again.'
					: `Could not connect to ${service.name}. Please try linking again.`,
		});
	}
}

function getExpiresAt(tokens: {access_token?: string; expires_in?: number}) {
	if (
		!tokens?.access_token ||
		!Number.isFinite(tokens.expires_in) ||
		Number(tokens.expires_in) <= 0
	) {
		throw new TRPCError({
			code: 'BAD_GATEWAY',
			message: 'The service returned an invalid authorization response.',
		});
	}
	// OAuth expires_in and stored auth_expires_at are both in seconds.
	return Math.floor(Date.now() / 1000) + Number(tokens.expires_in);
}

async function refreshAuthToken(integration: Integration, type: IntegrationType) {
	if (!integration.refresh_token) {
		throw new RevokedIntegrationError();
	}
	const service = LINKED_SERVICES[type];
	const tokens = await getOAuthPostRequest(service, service.tokenEndpoint, {
		grant_type: 'refresh_token',
		refresh_token: integration.refresh_token,
	});
	const updated = await updateIntegration(integration, {
		auth_token: tokens.access_token,
		auth_expires_at: getExpiresAt(tokens),
		refresh_token: tokens.refresh_token || integration.refresh_token,
	});
	return updated.auth_token;
}

async function getIdentity(type: IntegrationType, authToken: string) {
	try {
		const res = await axios.get(LINKED_SERVICES[type].meEndpoint, {
			headers: {Authorization: `Bearer ${authToken}`},
			timeout: 15000,
		});
		const identity = res.data?.me || res.data;
		if (!identity?.id) {
			throw new TRPCError({
				code: 'BAD_GATEWAY',
				message: 'The service returned an invalid account.',
			});
		}
		return identity;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.status === 401) {
			throw new RevokedIntegrationError();
		}
		if (error instanceof TRPCError) throw error;
		throw relinkError(type);
	}
}

export async function getIntegrationGetMe(intType: IntegrationType, user: OAuthUser) {
	const integration = await getIntegration(user, intType);
	if (!integration) {
		return null;
	}
	const expiresAt = Number(integration.auth_expires_at);
	// Legacy rows mixed milliseconds with seconds and must be refreshed once.
	const needsRefresh = expiresAt >= 1e12 || expiresAt <= Math.floor(Date.now() / 1000) + 30;
	if (needsRefresh) {
		const token = await refreshAuthToken(integration, intType);
		return getIdentity(intType, token);
	}

	try {
		return await getIdentity(intType, integration.auth_token);
	} catch (error) {
		if (!(error instanceof RevokedIntegrationError)) throw error;
	}

	// Retry rejected access once with a fresh token.
	const token = await refreshAuthToken(integration, intType);
	return getIdentity(intType, token);
}

export async function revokeIntegration(intType: IntegrationType, user: OAuthUser) {
	const integration = await getIntegration(user, intType);
	if (integration) {
		const service = LINKED_SERVICES[intType];
		// Revocation accepts expired tokens; refreshing first can prevent unlinking a broken account.
		try {
			await getOAuthPostRequest(service, service.revokeEndpoint, {
				token: integration.auth_token,
			});
		} catch {
			// Local unlinking must still work if access was already revoked or the provider is unavailable.
		}
	}
	if (intType === 'discord') {
		const profile = await getOrCreateUserProfile(user);
		await updateUserProfile(profile, {discord_id: null});
	}
}
