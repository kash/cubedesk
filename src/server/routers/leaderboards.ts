import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {ErrorCode} from '@/server/constants/errors';
import {
	deleteTopAverage,
	deleteTopAverageById,
	deleteTopSolve,
	deleteTopSolveById,
	getTopAverages,
	getTopSolves,
	submitTopAverage,
	submitTopSolve,
} from '@/server/models/top_solve';
import {getSolve} from '@/server/models/solve';

export const leaderboardsRouter = createTRPCRouter({
	// Get top solves for a cube type
	topSolves: userProcedure
		.input(
			z.object({
				cubeType: z.string(),
				page: z.number().int(),
			}),
		)
		.query(async ({input}) => {
			return getTopSolves(input.cubeType, input.page);
		}),

	// Get top averages for a cube type
	topAverages: userProcedure
		.input(
			z.object({
				cubeType: z.string(),
				page: z.number().int(),
			}),
		)
		.query(async ({input}) => {
			return getTopAverages(input.cubeType, input.page);
		}),

	// Publish a top solve
	publishTopSolve: userProcedure
		.input(
			z.object({
				solveId: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const solve = await getSolve(input.solveId);
			if (!solve || solve.user_id !== ctx.me.id) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid solve',
				});
			}

			await deleteTopSolve(solve.cube_type, ctx.me);
			return submitTopSolve(ctx.me, solve);
		}),

	// Publish top averages
	publishTopAverages: userProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()).length(5),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const solvePromises = input.solveIds.map((id) => getSolve(id));
			const solves = await Promise.all(solvePromises);

			for (const solve of solves) {
				if (!solve || solve.user_id !== ctx.me.id) {
					throw new TRPCError({
						code: 'BAD_REQUEST',
						message: 'Invalid solve IDs',
					});
				}
			}

			await deleteTopAverage(solves[0].cube_type, ctx.me);
			return submitTopAverage(ctx.me, solves);
		}),

	// Delete a top solve
	deleteTopSolve: userProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.mutation(async ({input}) => {
			return deleteTopSolveById(input.id);
		}),

	// Delete a top average
	deleteTopAverage: userProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.mutation(async ({input}) => {
			return deleteTopAverageById(input.id);
		}),
});
