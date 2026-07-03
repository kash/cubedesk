import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {proProcedure, router} from '../trpc';
import {getSessionById} from '../../models/session';
import {getCustomCubeTypesByUserId} from '../../models/custom_cube_type';
import {getDefaultCubeTypes} from '../../../client/util/cubes/util';
import {bulkDeleteSolves, bulkDnfSolves, bulkOkSolves, bulkPlusTwoSolves, bulkUpdateSolves} from '../../models/solve';

const solveIdsInput = z.object({
	solveIds: z.array(z.string()).min(1),
});

// All procedures return the number of records affected
export const bulkActionsRouter = router({
	deleteSolves: proProcedure.input(solveIdsInput).mutation(async ({ctx, input}) => {
		const deleted = await bulkDeleteSolves(ctx.user.id, input.solveIds);
		return deleted.count;
	}),

	moveSolvesToSession: proProcedure
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

	dnfSolves: proProcedure.input(solveIdsInput).mutation(({ctx, input}) => bulkDnfSolves(ctx.user.id, input.solveIds)),

	plusTwoSolves: proProcedure
		.input(solveIdsInput)
		.mutation(({ctx, input}) => bulkPlusTwoSolves(ctx.user.id, input.solveIds)),

	okSolves: proProcedure.input(solveIdsInput).mutation(({ctx, input}) => bulkOkSolves(ctx.user.id, input.solveIds)),

	updateCubeType: proProcedure
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
