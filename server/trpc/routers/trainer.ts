import type {PrismaClient} from '@/generated/prisma/client';
import {fetchTrainerAlgorithms} from '@/server/models/trainer/fetch';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const algorithmOverrideInputSchema = z.object({
	rotate: z.number().int().nullish(),
	solution: z.string().nullish(),
	cube_key: z.string().nullish(),
	name: z.string().nullish(),
	scrambles: z.string().nullish(),
});

function getTrainerFavorite(prisma: PrismaClient, userId: string, cubeKey: string) {
	return prisma.trainerFavorite.findFirst({
		where: {
			user_id: userId,
			cube_key: cubeKey,
		},
	});
}

async function getAlgorithmOverride(prisma: PrismaClient, userId: string, algoKey: string) {
	const res = await prisma.algorithmOverride.findMany({
		where: {
			user_id: userId,
			cube_key: algoKey,
		},
	});

	if (!res || !res.length) {
		return null;
	}

	return res[0];
}

export const trainerRouter = router({
	algorithms: protectedProcedure.query(() => fetchTrainerAlgorithms()),

	listFavorites: protectedProcedure.query(({ctx}) =>
		ctx.prisma.trainerFavorite.findMany({
			where: {
				user_id: ctx.user.id,
			},
		})
	),

	createFavorite: protectedProcedure
		.input(
			z.object({
				cubeKey: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const trainerFavorite = await getTrainerFavorite(ctx.prisma, ctx.user.id, input.cubeKey);
			if (trainerFavorite) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'This algorithm has already been favorited'});
			}

			return ctx.prisma.trainerFavorite.create({
				data: {
					cube_key: input.cubeKey,
					user_id: ctx.user.id,
				},
			});
		}),

	deleteFavorite: protectedProcedure
		.input(
			z.object({
				cubeKey: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const trainerFavorite = await getTrainerFavorite(ctx.prisma, ctx.user.id, input.cubeKey);
			if (!trainerFavorite || trainerFavorite.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN'});
			}

			return ctx.prisma.trainerFavorite.deleteMany({
				where: {
					user_id: ctx.user.id,
					cube_key: input.cubeKey,
				},
			});
		}),

	listAlgorithmOverrides: protectedProcedure.query(({ctx}) =>
		ctx.prisma.algorithmOverride.findMany({
			where: {
				user_id: ctx.user.id,
			},
		})
	),

	updateAlgorithmOverride: protectedProcedure
		.input(
			z.object({
				algoKey: z.string(),
				input: algorithmOverrideInputSchema,
			})
		)
		.mutation(async ({ctx, input}) => {
			const data = {
				...input.input,
				cube_key: input.algoKey,
			};

			let algorithmOverride = await getAlgorithmOverride(ctx.prisma, ctx.user.id, input.algoKey);

			if (!algorithmOverride) {
				algorithmOverride = await ctx.prisma.algorithmOverride.create({
					data: {
						...data,
						user_id: ctx.user.id,
					},
				});
			}

			return ctx.prisma.algorithmOverride.update({
				where: {
					id: algorithmOverride.id,
				},
				data,
			});
		}),

	deleteAlgorithmOverride: protectedProcedure
		.input(
			z.object({
				algoKey: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const algorithmOverride = await getAlgorithmOverride(ctx.prisma, ctx.user.id, input.algoKey);
			if (!algorithmOverride || algorithmOverride.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN'});
			}

			return ctx.prisma.algorithmOverride.delete({
				where: {
					id: algorithmOverride.id,
				},
			});
		}),
});
