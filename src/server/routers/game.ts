import {ErrorCode} from '@/server/constants/errors';
import {publicUserInclude} from '@/server/models/user_account';
import {getPrismaClient} from '@/server/services/database';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {GameType} from '@/shared/match/consts';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const gameSessionInclude = {
	user: publicUserInclude,
	solves: {
		orderBy: {
			created_at: 'desc' as const,
		},
	},
};

export async function getGameSessionById(id: string) {
	const prisma = getPrismaClient();
	return prisma.gameSession.findUnique({
		where: {
			id,
		},
		include: gameSessionInclude,
	});
}

export async function getGameSessionsByUserId(userId: string) {
	const prisma = getPrismaClient();
	return prisma.gameSession.findMany({
		where: {
			user_id: userId,
		},
		orderBy: {
			created_at: 'desc',
		},
		include: gameSessionInclude,
	});
}

export const gameRouter = createTRPCRouter({
	// Get a specific game session by ID
	gameSession: userProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.query(async ({ctx, input}) => {
			const session = await getGameSessionById(input.id);
			if (!session || session.user_id !== ctx.me.id) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: ErrorCode.NOT_FOUND,
				});
			}

			return session;
		}),

	// Get all game sessions for the current user
	gameSessions: userProcedure.query(async ({ctx}) => {
		return getGameSessionsByUserId(ctx.me.id);
	}),

	// Create a new game session
	createGameSession: userProcedure
		.input(
			z.object({
				gameType: z.nativeEnum(GameType),
				matchId: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			return prisma.gameSession.create({
				data: {
					user_id: ctx.me.id,
					match_id: input.matchId,
					game_type: input.gameType,
				},
			});
		}),

	// Get all game sessions for the current user
	getGameSessions: userProcedure.query(async ({ctx}) => {
		return getGameSessionsByUserId(ctx.me.id);
	}),

	// Delete a game session
	deleteGameSession: userProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const gameSession = await getGameSessionById(input.id);

			if (!gameSession || gameSession.user_id !== ctx.me.id) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: ErrorCode.NOT_FOUND,
				});
			}

			const prisma = getPrismaClient();
			return prisma.gameSession.delete({
				where: {
					id: input.id,
				},
			});
		}),
});
