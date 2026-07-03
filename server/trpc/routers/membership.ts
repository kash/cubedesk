import Stripe from 'stripe';
import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {proProcedure, protectedProcedure, publicProcedure, router} from '../trpc';
import {Membership, MembershipOptions, MembershipPricing} from '@/types/membership';
import {InternalUserAccount} from '@/types/user';
import {cancelProSubscription, getProSubscriptionAndUpdateUserProStatus} from '../../util/pro';
import {createCheckoutSession, getStripePricesByProductId} from '../../services/stripe';
import {logger} from '../../services/logger';
import {createRedisKey, fetchDataFromCache, RedisNamespace} from '../../services/redis';

function getMembershipPricing(price: Stripe.Price): MembershipPricing | null {
	const {recurring} = price;

	// Pro prices are always recurring subscriptions
	if (!recurring) {
		return null;
	}

	return {
		id: price.id,
		currency: price.currency,
		interval: recurring.interval,
		interval_count: recurring.interval_count,
		unit_amount: price.unit_amount,
	};
}

async function getMembershipDetails(user: InternalUserAccount): Promise<Membership | null> {
	const output = await getProSubscriptionAndUpdateUserProStatus(user);

	if (!output) {
		return null;
	}

	const {status, subscription, price} = output;

	const pricing = getMembershipPricing(price);
	if (!pricing) {
		return null;
	}

	return {
		status,
		current_period_end: subscription.current_period_end,
		cancel_at_period_end: subscription.cancel_at_period_end,
		canceled_at: subscription.canceled_at,
		ended_at: subscription.ended_at,
		days_until_due: subscription.days_until_due,
		start_date: subscription.start_date,
		pricing,
	};
}

async function fetchMembershipOptions(): Promise<MembershipOptions | null> {
	const proProductId = process.env.STRIPE_PRO_PRODUCT_ID;
	if (!proProductId) {
		logger.error('STRIPE_PRO_PRODUCT_ID is not set.');
		return null;
	}

	const prices = await getStripePricesByProductId(proProductId);

	if (!prices) {
		logger.error('Failed to fetch membership prices.');
		return null;
	}

	const output: MembershipOptions = {};

	for (const price of prices) {
		if (!price.active) {
			continue;
		}

		const pricing = getMembershipPricing(price);

		// interval will be either month or year
		if (pricing && (pricing.interval === 'month' || pricing.interval === 'year')) {
			output[pricing.interval] = pricing;
		}
	}

	return output;
}

export const membershipRouter = router({
	get: protectedProcedure.query(({ctx}) => getMembershipDetails(ctx.user)),

	options: publicProcedure.query(() => {
		// Three days in seconds
		const threeDaysInSeconds = 259200;

		return fetchDataFromCache(
			createRedisKey(RedisNamespace.PRO_DATA, 'membership_options'),
			fetchMembershipOptions,
			threeDaysInSeconds
		);
	}),

	cancel: proProcedure.mutation(async ({ctx}) => {
		try {
			await cancelProSubscription(ctx.user);
			logger.info('User cancelled their membership.', {
				userId: ctx.user.id,
			});
		} catch (e) {
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: e instanceof Error ? e.message : 'Failed to cancel membership',
			});
		}

		return true;
	}),

	generateBuyLink: protectedProcedure
		.input(
			z.object({
				priceId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const session = await createCheckoutSession(input.priceId, ctx.user);

			return session.url;
		}),
});
