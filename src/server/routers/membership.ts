import {z} from 'zod';
import {createTRPCRouter, proProcedure, publicProcedure, userProcedure} from '@/server/trpc';
import {SubscriptionStatus, createCheckoutSession, getStripePricesByProductId} from '@/server/services/stripe';
import {cancelProSubscription, getProSubscriptionAndUpdateUserProStatus} from '@/server/utils/pro';
import {logger} from '@/server/services/logger';
import {TRPCError} from '@trpc/server';
import {createRedisKey, fetchDataFromCache, RedisNamespace} from '@/server/services/redis';
import Stripe from 'stripe';

// Zod schemas matching the GraphQL types
const MembershipPricingSchema = z.object({
	id: z.string(),
	currency: z.string(),
	interval: z.string(),
	interval_count: z.number(),
	unit_amount: z.number(),
});

const MembershipSchema = z.object({
	status: z.nativeEnum(SubscriptionStatus),
	current_period_end: z.number(),
	cancel_at_period_end: z.boolean(),
	canceled_at: z.number(),
	ended_at: z.number(),
	days_until_due: z.number(),
	start_date: z.number(),
	pricing: MembershipPricingSchema,
});

const MembershipOptionsSchema = z.object({
	month: MembershipPricingSchema,
	year: MembershipPricingSchema,
});

type MembershipPricing = z.infer<typeof MembershipPricingSchema>;
type Membership = z.infer<typeof MembershipSchema>;
type MembershipOptions = z.infer<typeof MembershipOptionsSchema>;

function getMembershipPricing(price: Stripe.Price): MembershipPricing {
	return {
		id: price.id,
		currency: price.currency,
		interval: price.recurring.interval,
		interval_count: price.recurring.interval_count,
		unit_amount: price.unit_amount,
	};
}

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

async function fetchMembershipOptions(): Promise<MembershipOptions | null> {
	const prices = await getStripePricesByProductId(process.env.STRIPE_PRO_PRODUCT_ID);

	if (!prices) {
		logger.error('Failed to fetch membership prices.');
		return null;
	}

	const output: Partial<MembershipOptions> = {};

	for (const price of prices) {
		if (!price.active) {
			continue;
		}
		// interval will be either month or year
		output[price.recurring.interval as 'month' | 'year'] = getMembershipPricing(price);
	}

	return output as MembershipOptions;
}

export const membershipRouter = createTRPCRouter({
	membership: userProcedure
		.output(MembershipSchema.nullable())
		.query(async ({ctx}) => {
			return getMembershipDetails(ctx.me);
		}),

	membershipOptions: publicProcedure
		.output(MembershipOptionsSchema.nullable())
		.query(async () => {
			// Three days in seconds
			const threeDaysInSeconds = 259200;

			return fetchDataFromCache(
				createRedisKey(RedisNamespace.PRO_DATA, 'membership_options'),
				fetchMembershipOptions,
				threeDaysInSeconds
			);
		}),

	cancelMembership: proProcedure
		.output(z.boolean())
		.mutation(async ({ctx}) => {
			try {
				await cancelProSubscription(ctx.me);
				logger.info('User cancelled their membership.', {
					userId: ctx.me.id,
				});
			} catch (e) {
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: e.message,
				});
			}

			return true;
		}),

	generateBuyLink: userProcedure
		.input(z.object({priceId: z.string()}))
		.output(z.string())
		.mutation(async ({ctx, input}) => {
			const session = await createCheckoutSession(input.priceId, ctx.me);
			return session.url;
		}),
});