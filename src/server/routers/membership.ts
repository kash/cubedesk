import {logger} from '@/server/services/logger';
import {createRedisKey, fetchDataFromCache, RedisNamespace} from '@/server/services/redis';
import {createCheckoutSession, getStripePricesByProductId} from '@/server/services/stripe';
import {createTRPCRouter, proProcedure, publicProcedure, userProcedure} from '@/server/trpc';
import {cancelProSubscription, getProSubscriptionAndUpdateUserProStatus} from '@/server/utils/pro';
import {
	Membership,
	MembershipOptions,
	MembershipOptionsSchema,
	MembershipPricing,
	MembershipSchema,
} from '@/types/memebership';
import {TRPCError} from '@trpc/server';
import Stripe from 'stripe';
import {z} from 'zod';

function getMembershipPricing(price: Stripe.Price): MembershipPricing {
	if (!price.recurring) {
		throw new Error('Price must have recurring billing information');
	}

	return {
		id: price.id,
		currency: price.currency,
		interval: price.recurring.interval,
		interval_count: price.recurring.interval_count,
		unit_amount: price.unit_amount ?? 0,
	};
}

export const membershipRouter = createTRPCRouter({
	membership: userProcedure.output(MembershipSchema.nullable()).query(async ({ctx}) => {
		async function getMembershipDetails(user: any): Promise<Membership | null> {
			const output = await getProSubscriptionAndUpdateUserProStatus(user);

			if (!output) {
				return null;
			}

			const {status, subscription, price} = output;

			return {
				status,
				current_period_end: subscription.current_period_end,
				cancel_at_period_end: subscription.cancel_at_period_end,
				canceled_at: subscription.canceled_at,
				ended_at: subscription.ended_at,
				days_until_due: subscription.days_until_due,
				start_date: subscription.start_date,
				pricing: getMembershipPricing(price),
			};
		}

		return getMembershipDetails(ctx.me);
	}),

	membershipOptions: publicProcedure
		.output(MembershipOptionsSchema.nullable())
		.query(async () => {
			async function fetchMembershipOptions(): Promise<MembershipOptions | null> {
				const productId = process.env.STRIPE_PRO_PRODUCT_ID;
				if (!productId) {
					throw new Error('STRIPE_PRO_PRODUCT_ID environment variable is not set');
				}

				const prices = await getStripePricesByProductId(productId);

				if (!prices) {
					logger.error('Failed to fetch membership prices.');
					return null;
				}

				const output: Partial<MembershipOptions> = {};

				for (const price of prices) {
					if (!price.active || !price.recurring) {
						continue;
					}
					// interval will be either month or year
					output[price.recurring.interval as 'month' | 'year'] =
						getMembershipPricing(price);
				}

				return output as MembershipOptions;
			}

			// Three days in seconds
			const threeDaysInSeconds = 259200;

			return fetchDataFromCache(
				createRedisKey(RedisNamespace.PRO_DATA, 'membership_options'),
				fetchMembershipOptions,
				threeDaysInSeconds,
			);
		}),

	cancelMembership: proProcedure.output(z.boolean()).mutation(async ({ctx}) => {
		try {
			await cancelProSubscription(ctx.me);
			logger.info('User cancelled their membership.', {
				userId: ctx.me.id,
			});
		} catch (e: unknown) {
			const error = e as Error;
			throw new TRPCError({
				code: 'INTERNAL_SERVER_ERROR',
				message: error.message,
			});
		}

		return true;
	}),

	generateBuyLink: userProcedure
		.input(z.object({priceId: z.string()}))
		.output(z.string())
		.mutation(async ({ctx, input}) => {
			const session = await createCheckoutSession(input.priceId, ctx.me);
			if (!session.url) {
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Failed to create checkout session URL',
				});
			}
			return session.url;
		}),
});
