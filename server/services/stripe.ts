import Stripe from 'stripe';
import {InternalUserAccount} from '../schemas/UserAccount.schema';
import {updateUserAccountWithParams} from '../models/user_account';
import {logger} from './logger';

// Need these in uppercase because TypeGraphQL automatically converts them to uppercase
export enum SubscriptionStatus {
	NONE = 'NONE',
	ACTIVE = 'ACTIVE',
	CANCELED = 'CANCELED',
	INCOMPLETE = 'INCOMPLETE',
	INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
	PAST_DUE = 'PAST_DUE',
	TRIALING = 'TRIALING',
	UNPAID = 'UNPAID',
	TRIAL_EXPIRED = 'TRIAL_EXPIRED',
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2020-08-27',
});

export function getStripeCustomerById(stripeCustomerId: string): Promise<Stripe.Customer> {
	return stripe.customers.retrieve(stripeCustomerId) as Promise<Stripe.Customer>;
}

export async function getStripeCustomerByEmail(email: string) {
	const customers = await stripe.customers.list({
		email,
	});

	if (!customers || customers.data.length) {
		return null;
	}

	return customers.data[0];
}

export async function getStripeCustomerSubscriptions(customerId: string): Promise<Stripe.Subscription[]> {
	const subs = await stripe.subscriptions.list({
		customer: customerId,
		limit: 100,
		status: 'all',
	});

	if (!subs || !subs.data.length) {
		return [];
	}

	return subs.data;
}

export async function getStripePricesByProductId(id: string) {
	const prices = await stripe.prices.list({
		active: true,
		product: id,
	});

	return prices.data;
}

export async function cancelAllStripeSubscriptions(user: InternalUserAccount) {
	const customerId = await getStripeCustomerId(user);
	const subs = await getStripeCustomerSubscriptions(customerId);

	for (const sub of subs) {
		if (['active', 'past_due'].includes(sub.status) && !sub.cancel_at_period_end) {
			try {
				await cancelStripeSubscription(sub.id);
			} catch (e) {
				logger.error('Failed to delete subscription.', {
					subscriptionId: sub.id,
					userId: user.id,
					error: e,
				});
			}
		}
	}

	return subs;
}

export async function cancelStripeSubscription(subscriptionId: string) {
	return stripe.subscriptions.update(subscriptionId, {
		cancel_at_period_end: true,
	});
}

export async function createCheckoutSession(priceId: string, user: InternalUserAccount) {
	const customerId = await getStripeCustomerId(user);

	return await stripe.checkout.sessions.create({
		line_items: [
			{
				price: priceId,
				quantity: 1,
			},
		],
		customer: customerId,
		mode: 'subscription',
		success_url: `${global.siteUrl}/account/pro?success=true`,
		cancel_url: `${global.siteUrl}/account/pro?cancelled=true`,
	});
}

export async function getStripeCustomerId(user: InternalUserAccount) {
	if (user.stripe_customer_id) {
		return user.stripe_customer_id;
	}

	const customer = await getStripeCustomer(user);
	return customer.id;
}

async function getStripeCustomer(user: InternalUserAccount) {
	let customer: Stripe.Customer;

	if (user.stripe_customer_id) {
		customer = await getStripeCustomerById(user.stripe_customer_id);
	} else {
		customer = await stripe.customers.create({
			email: user.email,
			name: `${user.first_name} ${user.last_name}`,
		});
		await updateUserAccountWithParams(user.id, {
			stripe_customer_id: customer.id,
		});
	}

	return customer;
}
