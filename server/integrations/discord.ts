import {getIntegrationGetMe} from './oauth';
import {InternalUserAccount, UserAccount} from '../schemas/UserAccount.schema';
import {logger} from '../services/logger';
import Discord from '../services/discord';
import {getStripeCustomerById, stripe} from '../services/stripe';

interface DiscordMe {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	flags: number;
	locale: string;
	mfa_enabled: boolean;
	email: string;
	verified: boolean;
}

export function getDiscordMe(user: UserAccount): Promise<DiscordMe> {
	return getIntegrationGetMe('discord', user);
}

export async function fetchDiscordInfo(user: UserAccount) {
	try {
		const discordMe = await getDiscordMe(user);
		const userDiscordId = discordMe.id;

		const userInGuild = await Discord.getUserInGuild(userDiscordId);
		const userRoles = await Discord.getUserRoles(userDiscordId);
		const userIsPro = await Discord.userHasRole(userDiscordId, 'Pro');

		await Discord.removeRoleFromUser(userDiscordId, 'Pro');
	} catch (e) {
		logger.error('Could not fetch Discord info for user.', {
			error: e,
			userId: user.id,
		});
	}
}

export async function updateStripeCustomerWithDiscordMetadata(user: InternalUserAccount, discordId: string) {
	if (!user.stripe_customer_id) {
		return;
	}

	const customer = await getStripeCustomerById(user.stripe_customer_id);
	const metadataIds = customer.metadata.discord_ids || '';
	const discordIds = new Set(metadataIds.split(','));
	discordIds.add(discordId);

	const idArray = Array.from(discordIds).filter((id) => !!id);

	await stripe.customers.update(user.stripe_customer_id, {
		metadata: {
			discord_ids: idArray.join(','),
		},
	});
}
