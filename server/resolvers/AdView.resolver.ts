import {Arg, Ctx, Mutation, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {CreateAdViewInput, AdView} from '../schemas/AdView.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {getPrisma} from '../database';

function findAdView(context: GraphQLContext, input: CreateAdViewInput) {
	return getPrisma().adView.findFirst({
		where: {
			user_id: context.user?.id,
			ad_key: input.ad_key,
			pathname: input.pathname,
			browser_session_id: input.browser_session_id,
			ip_address: context.ipAddress,
		},
	});
}

function getAdViewById(id: string) {
	return getPrisma().adView.findUnique({
		where: {
			id,
		},
	});
}

function createAdView(context: GraphQLContext, input: CreateAdViewInput) {
	return getPrisma().adView.create({
		data: {
			ad_key: input.ad_key,
			ip_address: context.ipAddress,
			pathname: input.pathname,
			browser_session_id: input.browser_session_id,
			view_time_seconds: 0,
			user_id: context.user?.id,
		},
	});
}

function refreshAdView(adView: AdView) {
	const diff = Date.now() - adView.last_session_started_at.getTime();
	const viewTimeSeconds = adView.view_time_seconds + Math.floor(diff / 1000);

	return getPrisma().adView.update({
		where: {
			id: adView.id,
		},
		data: {
			view_time_seconds: viewTimeSeconds,
		},
	});
}

function clickAdView(adView: AdView) {
	return getPrisma().adView.update({
		where: {
			id: adView.id,
		},
		data: {
			clicked_at: new Date(),
		},
	});
}

@Resolver()
export class AdViewResolver {
	@Mutation(() => AdView)
	async createAdView(
		@Ctx() context: GraphQLContext,
		@Arg('input', () => CreateAdViewInput) input: CreateAdViewInput
	) {
		const existingAdView = await findAdView(context, input);
		if (existingAdView) {
			return existingAdView;
		}

		return createAdView(context, input);
	}

	@Mutation(() => AdView)
	async clickAdView(@Ctx() context: GraphQLContext, @Arg('adViewId') adViewId: string) {
		const adView = await getAdViewById(adViewId);

		if (!adView) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Could not find Ad View with that ID');
		}

		return clickAdView(adView);
	}

	// @Mutation(() => AdView)
	// async updateAdView(@Ctx() context: GraphQLContext, @Arg('adViewId') adViewId: string) {
	// 	const {user} = context;
	//
	// 	const adView = await getAdViewById(adViewId);
	// 	if (!adView || adView.user_id !== user.id) {
	// 		throw new GraphQLError(ErrorCode.NOT_FOUND, 'Could not find Ad View with that ID');
	// 	}
	//
	// 	return refreshAdView(adView);
	// }
}
