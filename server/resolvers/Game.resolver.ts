import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {Role} from '../middlewares/auth';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {GameSession} from '../schemas/Game.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {publicUserInclude} from '../models/user_account';
import {GameType} from '../../shared/match/consts';

const gameSessionInclude = {
	user: publicUserInclude,
	solves: {
		orderBy: {
			created_at: 'desc',
		},
	},
};

export async function getGameSessionById(context: GraphQLContext, id: string) {
	return context.prisma.gameSession.findUnique({
		where: {
			id,
		},
		include: gameSessionInclude,
	});
}

export async function getGameSessionsByUserId(context: GraphQLContext, userId: string) {
	return context.prisma.gameSession.findMany({
		where: {
			user_id: userId,
		},
		orderBy: {
			created_at: 'desc',
		},
		include: gameSessionInclude,
	});
}

async function createGameSession(context: GraphQLContext, gameType: GameType, matchId: string): Promise<GameSession> {
	const {prisma, user} = context;

	return prisma.gameSession.create({
		data: {
			user_id: user.id,
			match_id: matchId,
			game_type: gameType,
		},
	});
}

async function deleteGameSession(context: GraphQLContext, id: string): Promise<GameSession> {
	return context.prisma.gameSession.delete({
		where: {
			id,
		},
	});
}

@Resolver()
export class GameResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => GameSession)
	async gameSession(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		const {user} = context;

		const session = await getGameSessionById(context, id);
		if (!session || session.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		return session;
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => [GameSession])
	async gameSessions(@Ctx() context: GraphQLContext) {
		return getGameSessionsByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => GameSession)
	async createGameSession(
		@Ctx() context: GraphQLContext,
		@Arg('gameType', () => GameType) gameType: GameType,
		@Arg('matchId') matchId: string
	) {
		return await createGameSession(context, gameType, matchId);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => GameSession)
	async deleteGameSession(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		const gameSession = await getGameSessionById(context, id);

		if (gameSession.user_id !== context.user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		return await deleteGameSession(context, id);
	}
}
