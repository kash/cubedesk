import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {TrainerFavorite} from '../schemas/TrainerFavorite.schema';
import {ErrorCode} from '../constants/errors';
import GraphQLError from '../util/graphql_error';

function getTrainerFavoritesByUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.trainerFavorite.findMany({
		where: {
			user_id: userId,
		},
	});
}

function getTrainerFavorite(context: GraphQLContext, cubeKey: string) {
	const {prisma, user} = context;

	return prisma.trainerFavorite.findFirst({
		where: {
			user_id: user.id,
			cube_key: cubeKey,
		},
	});
}

function createTrainerFavorite(context: GraphQLContext, cubeKey: string) {
	const {prisma, user} = context;

	return prisma.trainerFavorite.create({
		data: {
			cube_key: cubeKey,
			user_id: user.id,
		},
	});
}

function deleteTrainerFavorite(context: GraphQLContext, cubeKey: string) {
	const {prisma, user} = context;

	return prisma.trainerFavorite.deleteMany({
		where: {
			user_id: user.id,
			cube_key: cubeKey,
		},
	});
}

@Resolver()
export class TrainerFavoriteResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [TrainerFavorite])
	async trainerFavorites(@Ctx() context: GraphQLContext) {
		return getTrainerFavoritesByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TrainerFavorite)
	async createTrainerFavorite(@Ctx() context: GraphQLContext, @Arg('cubeKey') cubeKey: string) {
		const trainerFavorite = await getTrainerFavorite(context, cubeKey);
		if (trainerFavorite) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'This algorithm has already been favorited');
		}

		return createTrainerFavorite(context, cubeKey);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TrainerFavorite)
	async deleteTrainerFavorite(@Ctx() context: GraphQLContext, @Arg('cubeKey') cubeKey: string) {
		const {user} = context;
		const trainerFavorite = await getTrainerFavorite(context, cubeKey);
		if (!trainerFavorite || trainerFavorite.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return deleteTrainerFavorite(context, cubeKey);
	}
}
