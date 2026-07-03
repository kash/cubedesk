import {getIntegrationGetMe} from './oauth';
import {InternalUserAccount, UserAccount} from '@/types/user';
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
