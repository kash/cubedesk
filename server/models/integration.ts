import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {UserAccount} from '../schemas/UserAccount.schema';
import {Integration} from '../schemas/Integration.schema';
import {IntegrationType} from '../../shared/integration';

export function createIntegration(user: UserAccount, serviceName, authToken, refreshToken, authExpiresAt) {
	return getPrisma().integration.create({
		data: {
			id: uuid(),
			user_id: user.id,
			service_name: serviceName,
			auth_token: authToken,
			refresh_token: refreshToken,
			auth_expires_at: authExpiresAt,
		},
	});
}

export function updateIntegration(integration: Integration, params) {
	delete params.id;
	delete params.created_at;
	delete params.user_id;

	return getPrisma().integration.update({
		where: {
			id: integration.id,
		},
		data: params,
	});
}

export async function getIntegration(user: UserAccount, intType: IntegrationType): Promise<Integration> {
	return getPrisma().integration.findFirst({
		where: {
			user_id: user.id,
			service_name: intType,
		},
	});
}
