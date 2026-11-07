import type {Prisma, PrismaClient} from '@/generated/prisma/client';
import type {SolveInput} from '@/types/solve';
import {
	createSolve,
	deleteSolve,
	getBasicSolve,
	getSolve,
	getSolveByShareCode,
	updateSolve,
	updateSolveLiteral,
} from '@/server/models/solve';
import {createSolveView} from '@/server/models/solve_view';
import {updateUserAccountWithParams} from '@/server/models/user_account';
import {protectedProcedure, publicProcedure, router} from '@/server/trpc/trpc';
import {serializeSolveTimestamps} from '@/server/util/serialize';
import {getSolveMethodSteps, prepareSmartSolve} from '@/server/util/solve/solve_method';
import {generateRandomString} from '@/shared/code';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

// Mirrors the old MiniSolveFragment so the list payload stays lean
const miniSolveSelect = {
	id: true,
	time: true,
	raw_time: true,
	event_type: true,
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

export const solveInputSchema = z.object({
	id: z.string().nullish(),
	time: z.number().nullish(),
	raw_time: z.number().nullish(),
	event_type: z.string().nullish(),
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
	inspection_time: z.number().nullish(),
});

type OwnedSolveRefs = Pick<SolveInput, 'session_id' | 'game_session_id' | 'smart_device_id'>;

async function assertSolveRefsOwned(prisma: PrismaClient, userId: string, refs: OwnedSolveRefs) {
	const [sessions, gameSessions, smartDevices] = await Promise.all([
		refs.session_id ? prisma.session.count({where: {id: refs.session_id, user_id: userId}}) : 1,
		refs.game_session_id
			? prisma.gameSession.count({where: {id: refs.game_session_id, user_id: userId}})
			: 1,
		refs.smart_device_id
			? prisma.smartDevice.count({where: {id: refs.smart_device_id, user_id: userId}})
			: 1,
	]);

	if (!sessions || !gameSessions || !smartDevices) {
		throw new TRPCError({code: 'NOT_FOUND'});
	}
}

async function getOpenMatchParticipantId(prisma: PrismaClient, matchId: string, userId: string) {
	const participant = await prisma.matchParticipant.findUnique({
		where: {
			match_id_user_id: {
				match_id: matchId,
				user_id: userId,
			},
		},
		select: {
			id: true,
			match: {
				select: {
					ended_at: true,
				},
			},
		},
	});
	const match = participant?.match;

	if (!match || !participant) {
		throw new TRPCError({code: 'NOT_FOUND'});
	}

	if (match.ended_at) {
		throw new TRPCError({code: 'BAD_REQUEST', message: 'This match has ended'});
	}

	return participant.id;
}

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

		await assertSolveRefsOwned(ctx.prisma, user.id, input);

		input.match_participant_id = input.match_id
			? await getOpenMatchParticipantId(ctx.prisma, input.match_id, user.id)
			: null;

		input.bulk = false;
		const [createdSolve] = await Promise.all([
			createSolve(user, prepareSmartSolve(input) as SolveInput),
			updateUserAccountWithParams(user.id, {
				last_solve_at: new Date(),
			}),
		]);

		return serializeSolveTimestamps(createdSolve);
	}),

	// Public: solve pages are shareable. Backfills a share code for old solves
	get: publicProcedure
		.input(
			z.object({
				id: z.string(),
			}),
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

			return {
				...serializeSolveTimestamps(solve),
				solve_method_steps: getSolveMethodSteps(solve),
			};
		}),

	getByShareCode: publicProcedure
		.input(
			z.object({
				shareCode: z.string(),
			}),
		)
		.query(async ({ctx, input}) => {
			const solve = await getSolveByShareCode(input.shareCode);

			if (!solve) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (!ctx.user || ctx.user.id !== solve.user_id) {
				await createSolveView(ctx.user, solve);
			}

			return {
				...serializeSolveTimestamps(solve),
				solve_method_steps: getSolveMethodSteps(solve),
			};
		}),

	update: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				input: solveInputSchema,
			}),
		)
		.mutation(async ({ctx, input}) => {
			const solve = await getBasicSolve(input.id);
			if (!solve || solve.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (solve.match_id) {
				await getOpenMatchParticipantId(ctx.prisma, solve.match_id, ctx.user.id);
			}

			const {session_id, game_session_id, smart_device_id} = input.input;
			await assertSolveRefsOwned(ctx.prisma, ctx.user.id, {
				session_id: session_id !== solve.session_id ? session_id : null,
				game_session_id: game_session_id !== solve.game_session_id ? game_session_id : null,
				smart_device_id: smart_device_id !== solve.smart_device_id ? smart_device_id : null,
			});

			// These fields can't be updated by the user
			const data = {
				...input.input,
				bulk: solve.bulk,
				from_timer: solve.from_timer,
				match_id: solve.match_id,
				match_participant_id: solve.match_participant_id,
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
			}),
		)
		.mutation(async ({ctx, input}) => {
			const solve = await ctx.prisma.solve.findUnique({
				where: {
					id: input.id,
				},
				select: {
					id: true,
					user_id: true,
				},
			});

			if (!solve || solve.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			const deleted = await deleteSolve(solve);

			return serializeSolveTimestamps(deleted);
		}),
});
