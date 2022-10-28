import Stripe from 'stripe';
import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Membership, MembershipOptions, MembershipPricing} from '../schemas/Membership.schema';
import {cancelProSubscription, getProSubscriptionAndUpdateUserProStatus} from '../util/pro';
import {InternalUserAccount} from '../schemas/UserAccount.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {createCheckoutSession, getStripePricesByProductId} from '../services/stripe';
import {logger} from '../services/logger';
import {createRedisKey, fetchDataFromCache, RedisNamespace} from '../services/redis';

function getMembershipPricing(price: Stripe.Price): MembershipPricing {
	return {
		id: price.id,
		currency: price.currency,
		interval: price.recurring.interval,
		interval_count: price.recurring.interval_count,
		unit_amount: price.unit_amount,
	};
}

async function getMembershipDetails(user: InternalUserAccount): Promise<Membership> {
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

async function fetchMembershipOptions() {
	const prices = await getStripePricesByProductId(process.env.STRIPE_PRO_PRODUCT_ID);

	if (!prices) {
		logger.error('Failed to fetch membership prices.');
		return null;
	}

	const output = {};

	for (const price of prices) {
		if (!price.active) {
			continue;
		}
		// interval will be either month or year
		output[price.recurring.interval] = getMembershipPricing(price);
	}

	return output;
}

@Resolver()
export class MembershipResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => Membership)
	async membership(@Ctx() context: GraphQLContext) {
		return getMembershipDetails(context.user);
	}

	@Query(() => MembershipOptions)
	async membershipOptions(@Ctx() context: GraphQLContext) {
		// Three days in seconds
		const threeDaysInSeconds = 259200;

		return fetchDataFromCache(
			createRedisKey(RedisNamespace.PRO_DATA, 'membership_options'),
			fetchMembershipOptions,
			threeDaysInSeconds
		);
	}

	@Authorized([Role.PRO])
	@Mutation(() => Boolean)
	async cancelMembership(@Ctx() context: GraphQLContext) {
		try {
			await cancelProSubscription(context.user);
			logger.info('User cancelled their membership.', {
				userId: context.user.id,
			});
		} catch (e) {
			throw new GraphQLError(ErrorCode.INTERNAL_SERVER_ERROR, e.message);
		}

		return true;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => String)
	async generateBuyLink(@Ctx() context: GraphQLContext, @Arg('priceId') priceId: string) {
		const session = await createCheckoutSession(priceId, context.user);

		return session.url;
	}
}
