import {getCustomCubeTypesByUserId} from '@/server/models/custom_cube_type';
import {getSessionById} from '@/server/models/session';
import {bulkDeleteSolves, bulkDnfSolves, bulkOkSolves, bulkPlusTwoSolves, bulkUpdateSolves} from '@/server/models/solve';
import {bumpOfflineHash} from '@/server/models/user_account';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {getDefaultCubeTypes} from '@/util/cubes/util';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const solveIdsInput = z.object({
	solveIds: z.array(z.string()).min(1),
});

// Bulk changes happen only on the server, so other clients' local copies of their solves become stale
const bulkProcedure = protectedProcedure.use(async ({ctx, next}) => {
	const result = await next();
	if (result.ok) {
		await bumpOfflineHash(ctx.prisma, ctx.user.id);
	}
	return result;
});

// All procedures return the number of records affected
export const bulkActionsRouter = router({
	deleteSolves: bulkProcedure.input(solveIdsInput).mutation(async ({ctx, input}) => {
		const deleted = await bulkDeleteSolves(ctx.user.id, input.solveIds);
		return deleted.count;
	}),

	moveSolvesToSession: bulkProcedure
		.input(
			solveIdsInput.extend({
				sessionId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const session = await getSessionById(input.sessionId);
			if (!session || session.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find a session with that ID'});
			}

			const updated = await bulkUpdateSolves(ctx.user.id, input.solveIds, {
				session_id: session.id,
			});
			return updated.count;
		}),

	dnfSolves: bulkProcedure.input(solveIdsInput).mutation(({ctx, input}) => bulkDnfSolves(ctx.user.id, input.solveIds)),

	plusTwoSolves: bulkProcedure
		.input(solveIdsInput)
		.mutation(({ctx, input}) => bulkPlusTwoSolves(ctx.user.id, input.solveIds)),

	okSolves: bulkProcedure.input(solveIdsInput).mutation(({ctx, input}) => bulkOkSolves(ctx.user.id, input.solveIds)),

	updateCubeType: bulkProcedure
		.input(
			solveIdsInput.extend({
				cubeType: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const defaultCubeTypes = getDefaultCubeTypes();
			const customCubeTypes = await getCustomCubeTypesByUserId(ctx.user.id);

			const validCubeType = [...defaultCubeTypes, ...customCubeTypes].some((ct) => ct.id === input.cubeType);
			if (!validCubeType) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid cube type'});
			}

			const updated = await bulkUpdateSolves(ctx.user.id, input.solveIds, {
				cube_type: input.cubeType,
			});
			return updated.count;
		}),
});
