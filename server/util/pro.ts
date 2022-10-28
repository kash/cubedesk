import {InternalUserAccount} from '../schemas/UserAccount.schema';
import Stripe from 'stripe';
import {
	cancelAllStripeSubscriptions,
	getStripeCustomerById,
	getStripeCustomerId,
	getStripeCustomerSubscriptions,
	SubscriptionStatus,
} from '../services/stripe';
import {updateUserAccountWithParams} from '../models/user_account';
import Discord from '../services/discord';
import {updateStripeCustomerWithDiscordMetadata} from '../integrations/discord';
import {setSetting} from '../models/settings';

type SubscriptionData = {
	status: SubscriptionStatus;
	subscription: Stripe.Subscription;
	price: Stripe.Price;
	subscriptionItem: Stripe.SubscriptionItem;
	product: string;
};

const proProductId = process.env.STRIPE_PRO_PRODUCT_ID;

export async function getProSubscriptionAndUpdateUserProStatus(user: InternalUserAccount): Promise<SubscriptionData> {
	const customerId = await getStripeCustomerId(user);
	const subs = await getStripeCustomerSubscriptions(customerId);

	let isPro = false;
	let activeSubscription: SubscriptionData = null;

	subLoop: for (const sub of subs) {
		if (!sub.items || !sub.items.data.length) {
			continue;
		}

		for (const item of sub.items.data) {
			if (!item.price.active || item.price.product !== proProductId) {
				continue;
			}

			const subStatus = sub.status.toUpperCase();
			const status = SubscriptionStatus[subStatus];

			isPro = status === SubscriptionStatus.ACTIVE;
			activeSubscription = {
				status: SubscriptionStatus[subStatus],
				subscription: sub,
				price: item.price,
				subscriptionItem: item,
				product: item.price.product,
			};

			break subLoop;
		}
	}

	if (user.is_pro !== isPro) {
		// Turn off
		await updateUserAccountWithParams(user.id, {
			is_pro: isPro,
		});

		user.is_pro = isPro;

		if (isPro) {
			// Went from free to Pro
			await handleStartPro(user);
		} else {
			// Went from Pro to free
			await handleCancelPro(user);

			// Beta tester is a Pro-only feature. Needs to be turned off in case its on
			await setSetting(user, 'beta_tester', false);
		}
	}

	return activeSubscription;
}

export async function cancelProSubscription(user: InternalUserAccount) {
	await getProSubscriptionAndUpdateUserProStatus(user);

	if (!user.is_pro) {
		throw new Error('You do not have a pro subscription');
	}

	await cancelAllStripeSubscriptions(user);
	await getProSubscriptionAndUpdateUserProStatus(user);
}

async function handleStartPro(user: InternalUserAccount) {
	const discordId = user.profile.discord_id;

	if (discordId) {
		await Discord.addRoleToUser(discordId, 'Pro');
		await updateStripeCustomerWithDiscordMetadata(user, discordId);
	}
}

async function handleCancelPro(user: InternalUserAccount) {
	const discordId = user.profile.discord_id;

	if (discordId) {
		await Discord.removeRoleFromUser(user.profile.discord_id, 'Pro');
	}

	const customer = await getStripeCustomerById(user.stripe_customer_id);
	const discordIds = customer.metadata?.discord_ids || '';
	const discordIdsArray = discordIds.split(',');

	for (const discordId of discordIdsArray) {
		if (!discordId) {
			continue;
		}
		await Discord.removeRoleFromUser(discordId, 'Pro');
	}
}
