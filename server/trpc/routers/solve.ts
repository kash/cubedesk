import type {Prisma} from '@/generated/prisma/client';
import type {SolveInput} from '@/types/solve';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {generateRandomString} from '@/shared/code';
import {getMatchById} from '@/server/models/match';
import {
	bulkCreateSolves,
	createSolve,
	deleteSolve,
	getBasicSolve,
	getSolve,
	getSolveByShareCode,
	updateSolve,
	updateSolveLiteral,
} from '@/server/models/solve';
import {createSolveMethodSteps, deleteSolveMethodSteps} from '@/server/models/solve_method_step';
import {createSolveView, deleteSolveViewsBySolveId} from '@/server/models/solve_view';
import {deleteTopAverage, deleteTopSolveById} from '@/server/models/top_solve';
import {updateUserAccountWithParams} from '@/server/models/user_account';
import {logger} from '@/server/services/logger';
import {serializeSolveTimestamps} from '@/server/util/serialize';
import {getSolveSteps} from '@/server/util/solve/solve_method';
import {protectedProcedure, publicProcedure, router} from '@/server/trpc/trpc';

// Mirrors the old MiniSolveFragment so the list payload stays lean
const miniSolveSelect = {
	id: true,
	time: true,
	raw_time: true,
	cube_type: true,
	session_id: true,
	trainer_name: true,
	bulk: true,
	scramble: true,
	from_timer: true,
	training_session_id: true,
	dnf: true,
	plus_two: true,
	is_smart_cube: true,
	created_at: true,
	started_at: true,
	ended_at: true,
} satisfies Prisma.SolveSelect;

const solveInputSchema = z.object({
	id: z.string().nullish(),
	time: z.number().nullish(),
	raw_time: z.number().nullish(),
	cube_type: z.string().nullish(),
	scramble: z.string().nullish(),
	game_session_id: z.string().nullish(),
	session_id: z.string().nullish(),
	started_at: z.number().int().nullish(),
	ended_at: z.number().int().nullish(),
	dnf: z.boolean().nullish(),
	plus_two: z.boolean().nullish(),
	bulk: z.boolean().nullish(),
	notes: z.string().nullish(),
	from_timer: z.boolean().nullish(),
	trainer_name: z.string().nullish(),
	is_smart_cube: z.boolean().nullish(),
	training_session_id: z.string().nullish(),
	smart_device_id: z.string().nullish(),
	match_id: z.string().nullish(),
	match_participant_id: z.string().nullish(),
	smart_turn_count: z.number().int().nullish(),
	smart_turns: z.string().nullish(),
	smart_put_down_time: z.number().nullish(),
	inspection_time: z.number().nullish(),
});

export const solveRouter = router({
	list: protectedProcedure.query(async ({ctx}) => {
		const solves = await ctx.prisma.solve.findMany({
			where: {
				user_id: ctx.user.id,
				game_session_id: null,
			},
			select: miniSolveSelect,
		});

		return solves.map(serializeSolveTimestamps);
	}),

	create: protectedProcedure.input(solveInputSchema).mutation(async ({ctx, input}) => {
		const {user} = ctx;

		if (input.match_id) {
			const match = await getMatchById(input.match_id);
			for (const part of match?.participants ?? []) {
				if (part.user_id === user.id) {
					input.match_participant_id = part.id;
					break;
				}
			}
		}

		input.bulk = false;
		const createdSolve = await createSolve(user, input as SolveInput);

		if (input.is_smart_cube) {
			try {
				const turns = JSON.parse(input.smart_turns ?? '');
				const steps = getSolveSteps(turns);
				await createSolveMethodSteps(createdSolve, steps);
			} catch (e) {
				logger.warn('Failed to create solve method steps', {
					error: e,
				});
				await updateSolve(createdSolve.id, {
					is_smart_cube: false,
				});
			}
		}

		await updateUserAccountWithParams(user.id, {
			last_solve_at: new Date(),
		});

		return serializeSolveTimestamps(createdSolve);
	}),

	// Public: solve pages are shareable. Backfills a share code for old solves
	get: publicProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(async ({input}) => {
			const solve = await getSolve(input.id);

			if (!solve) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (!solve.share_code) {
				const shareCode = generateRandomString(8);
				solve.share_code = shareCode;

				await updateSolveLiteral(solve.id, {
					share_code: shareCode,
				});
			}

			return serializeSolveTimestamps(solve);
		}),

	getByShareCode: publicProcedure
		.input(
			z.object({
				shareCode: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const solve = await getSolveByShareCode(input.shareCode);

			if (!solve) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (!ctx.user || ctx.user.id !== solve.user_id) {
				await createSolveView(ctx.user, solve);
			}

			return serializeSolveTimestamps(solve);
		}),

	update: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				input: solveInputSchema,
			})
		)
		.mutation(async ({ctx, input}) => {
			const solve = await getBasicSolve(input.id);
			if (!solve || solve.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			// These two fields can't be updated by the user
			const data = {
				...input.input,
				bulk: solve.bulk,
				from_timer: solve.from_timer,
			};

			const updated = await updateSolve(input.id, {
				...solve,
				...data,
			} as Partial<SolveInput>);

			return serializeSolveTimestamps(updated);
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const solve = await getSolve(input.id);

			if (!solve || solve.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (solve.top_solve?.length) {
				for (const top of solve.top_solve) {
					await deleteTopSolveById(top.id);
				}
			}

			if (
				solve.top_average_1?.length ||
				solve.top_average_2?.length ||
				solve.top_average_3?.length ||
				solve.top_average_4?.length ||
				solve.top_average_5?.length
			) {
				await deleteTopAverage(solve.cube_type, ctx.user);
			}

			if (solve.solve_method_steps) {
				await deleteSolveMethodSteps(solve);
			}

			if (solve.solve_views) {
				await deleteSolveViewsBySolveId(solve.id);
			}

			const deleted = await deleteSolve(solve);

			return serializeSolveTimestamps(deleted);
		}),

	bulkCreate: protectedProcedure
		.input(
			z.object({
				solves: z.array(solveInputSchema),
			})
		)
		.mutation(async ({ctx, input}) => {
			await bulkCreateSolves(ctx.user, input.solves as SolveInput[]);
		}),
});
