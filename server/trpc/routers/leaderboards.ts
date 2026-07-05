import type {Prisma} from '@/generated/prisma/client';
import {EloRatingWithUser, eloRatingWithUserInclude} from '@/types/elo';
import {publicUserSelect} from '@/types/user';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {getSolve} from '@/server/models/solve';
import {
	deleteTopAverage,
	deleteTopAverageById,
	deleteTopSolve,
	deleteTopSolveById,
	submitTopAverage,
	submitTopSolve,
} from '@/server/models/top_solve';
import {getPaginatedResponse} from '@/server/util/pagination/paginated_response';
import {serializeSolveTimestamps} from '@/server/util/serialize';
import {protectedProcedure, publicProcedure, router} from '@/server/trpc/trpc';

const PAGE_SIZE = 50;

const topSolveInclude = {
	solve: true,
	user: {
		select: publicUserSelect,
	},
} satisfies Prisma.TopSolveInclude;

const topAverageInclude = {
	solve_1: true,
	solve_2: true,
	solve_3: true,
	solve_4: true,
	solve_5: true,
	user: {
		select: publicUserSelect,
	},
} satisfies Prisma.TopAverageInclude;

const notBannedWhere = {
	user: {
		banned_forever: false,
	},
	OR: [
		{
			user: {
				banned_until: null,
			},
		},
		{
			user: {
				banned_until: {
					lt: new Date(),
				},
			},
		},
	],
};

const leaderboardsInputSchema = z.object({
	cubeType: z.string(),
	page: z.number().int().min(0),
});

export const leaderboardsRouter = router({
	topSolves: protectedProcedure.input(leaderboardsInputSchema).query(async ({ctx, input}) => {
		const topSolves = await ctx.prisma.topSolve.findMany({
			where: {
				cube_type: input.cubeType,
				...notBannedWhere,
			},
			orderBy: {
				time: 'asc',
			},
			include: topSolveInclude,
			skip: input.page * PAGE_SIZE,
			take: PAGE_SIZE,
		});

		return topSolves.map((topSolve) => ({
			...topSolve,
			solve: serializeSolveTimestamps(topSolve.solve),
		}));
	}),

	topAverages: protectedProcedure.input(leaderboardsInputSchema).query(async ({ctx, input}) => {
		const topAverages = await ctx.prisma.topAverage.findMany({
			where: {
				cube_type: input.cubeType,
				...notBannedWhere,
			},
			orderBy: {
				time: 'asc',
			},
			include: topAverageInclude,
			skip: input.page * PAGE_SIZE,
			take: PAGE_SIZE,
		});

		return topAverages.map((topAverage) => ({
			...topAverage,
			solve_1: serializeSolveTimestamps(topAverage.solve_1),
			solve_2: serializeSolveTimestamps(topAverage.solve_2),
			solve_3: serializeSolveTimestamps(topAverage.solve_3),
			solve_4: serializeSolveTimestamps(topAverage.solve_4),
			solve_5: serializeSolveTimestamps(topAverage.solve_5),
		}));
	}),

	publishTopSolve: protectedProcedure
		.input(
			z.object({
				solveId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;

			const solve = await getSolve(input.solveId);
			if (!solve || solve.user_id !== user.id) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid solve'});
			}

			await deleteTopSolve(solve.cube_type, user);
			return submitTopSolve(user, solve);
		}),

	publishTopAverages: protectedProcedure
		.input(
			z.object({
				solveIds: z.array(z.string()).length(5, 'Invalid solve IDs'),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;

			const solves = await Promise.all(input.solveIds.map((id) => getSolve(id)));

			const validSolves = solves.filter(
				(solve): solve is NonNullable<(typeof solves)[number]> => !!solve && solve.user_id === user.id
			);
			if (validSolves.length !== solves.length) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid solve IDs'});
			}

			await deleteTopAverage(validSolves[0].cube_type, user);
			return submitTopAverage(user, validSolves);
		}),

	deleteTopSolve: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const topSolve = await ctx.prisma.topSolve.findUnique({
				where: {
					id: input.id,
				},
			});

			if (!topSolve || (topSolve.user_id !== ctx.user.id && !ctx.user.admin)) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			return deleteTopSolveById(input.id);
		}),

	deleteTopAverage: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const topAverage = await ctx.prisma.topAverage.findUnique({
				where: {
					id: input.id,
				},
			});

			if (!topAverage || (topAverage.user_id !== ctx.user.id && !ctx.user.admin)) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			return deleteTopAverageById(input.id);
		}),

	elo: publicProcedure
		.input(
			z.object({
				page: z.number().int().min(0).default(0),
				pageSize: z.number().int().min(1).max(100).default(25),
				searchQuery: z.string().max(250).default(''),
			})
		)
		.query(({input}) =>
			getPaginatedResponse<EloRatingWithUser>({
				tableName: 'eloRating',
				paginationArgs: input,
				prismaPayload: {
					orderBy: {
						elo_333_rating: 'desc',
					},
					include: eloRatingWithUserInclude,
				},
			})
		),
});
