import {GameType} from '@/generated/prisma/client';
import {GameSessionWithRelations} from '@/types/game';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {
	createGameSession,
	deleteGameSession,
	getGameSessionById,
	getGameSessionsByUserId,
} from '../../models/game_session';
import {serializeSolveTimestamps} from '../../util/serialize';
import {protectedProcedure, router} from '../trpc';

function serializeGameSession(session: GameSessionWithRelations) {
	return {
		...session,
		solves: session.solves.map(serializeSolveTimestamps),
	};
}

export const gameRouter = router({
	session: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const session = await getGameSessionById(input.id);
			if (!session || session.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			return serializeGameSession(session);
		}),

	sessions: protectedProcedure.query(async ({ctx}) => {
		const sessions = await getGameSessionsByUserId(ctx.user.id);
		return sessions.map(serializeGameSession);
	}),

	createSession: protectedProcedure
		.input(
			z.object({
				gameType: z.enum(GameType),
				matchId: z.string().nullish(),
			})
		)
		.mutation(({ctx, input}) => createGameSession(ctx.user.id, input.gameType, input.matchId)),

	deleteSession: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const session = await getGameSessionById(input.id);
			if (!session || session.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			return deleteGameSession(input.id);
		}),
});
