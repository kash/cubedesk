import type {CustomTrainer, PrismaClient} from '@/generated/prisma/client';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {getPaginatedResponse} from '@/server/util/pagination/paginated_response';
import {generateUUID} from '@/shared/code';
import {customTrainerInclude, CustomTrainerWithUser} from '@/types/trainer';
import {publicUserSelect} from '@/types/user';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const customTrainerInputSchema = z.object({
	solution: z.string(),
	colors: z.string().nullish(),
	cube_type: z.string(),
	group_name: z.string().nullish(),
	scrambles: z.string().nullish(),
	alt_solutions: z.string().nullish(),
	// three_d and private are non-nullable columns, so null is not accepted here
	three_d: z.boolean().optional(),
	name: z.string(),
	private: z.boolean().optional(),
	description: z.string().nullish(),
});

const publicTrainerWhere = {
	private: false,
	OR: [
		{
			copy_of_id: null,
		},
		{
			copy_of_id: undefined,
		},
	],
};

async function getOwnedCustomTrainerById(prisma: PrismaClient, userId: string, id: string) {
	const trainer = await prisma.customTrainer.findUnique({
		where: {
			id,
		},
	});

	if (!trainer) {
		throw new TRPCError({code: 'NOT_FOUND'});
	}

	if (trainer.user_id !== userId) {
		throw new TRPCError({code: 'FORBIDDEN'});
	}

	return trainer;
}

async function updateLikeCount(prisma: PrismaClient, trainer: CustomTrainer) {
	const likes = await prisma.customTrainerLike.count({
		where: {
			custom_trainer_id: trainer.id,
		},
	});

	await prisma.customTrainer.update({
		data: {
			like_count: Math.max(likes, 0),
		},
		where: {
			id: trainer.id,
		},
	});
}

async function getLikedCustomTrainer(prisma: PrismaClient, userId: string, id: string) {
	const target = await prisma.customTrainer.findUnique({
		where: {
			id,
		},
	});

	if (!target) {
		throw new TRPCError({code: 'NOT_FOUND'});
	}

	if (target.private) {
		throw new TRPCError({code: 'FORBIDDEN', message: 'This trainer cannot be liked/unliked'});
	}

	const liked = await prisma.customTrainerLike.findMany({
		where: {
			custom_trainer_id: id,
			user_id: userId,
		},
	});

	return {
		target,
		liked: liked && liked.length ? liked[0] : null,
	};
}

export const customTrainerRouter = router({
	list: protectedProcedure.query(({ctx}) =>
		ctx.prisma.customTrainer.findMany({
			where: {
				user_id: ctx.user.id,
			},
			include: customTrainerInclude,
		})
	),

	get: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const customTrainer = await ctx.prisma.customTrainer.findUnique({
				where: {
					id: input.id,
				},
				include: customTrainerInclude,
			});

			if (!customTrainer || customTrainer.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN'});
			}

			return customTrainer;
		}),

	searchPublic: protectedProcedure
		.input(
			z.object({
				page: z.number().int().min(0).default(0),
				pageSize: z.number().int().min(1).max(100).default(25),
				searchQuery: z.string().max(250).default(''),
			})
		)
		.query(({input}) =>
			getPaginatedResponse<CustomTrainerWithUser>({
				paginationArgs: input,
				tableName: 'customTrainer',
				prismaPayload: {
					where: publicTrainerWhere,
					orderBy: {
						like_count: 'desc',
					},
					include: {
						user: {
							select: publicUserSelect,
						},
					},
				},
			})
		),

	create: protectedProcedure.input(customTrainerInputSchema).mutation(async ({ctx, input}) => {
		const id = generateUUID();

		const newTrainer = await ctx.prisma.customTrainer.create({
			data: {
				...input,
				id,
				downloaded: false,
				key: id,
				user_id: ctx.user.id,
			},
		});

		return ctx.prisma.customTrainer.findUnique({
			where: {
				id: newTrainer.id,
			},
		});
	}),

	update: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				data: customTrainerInputSchema,
			})
		)
		.mutation(async ({ctx, input}) => {
			await getOwnedCustomTrainerById(ctx.prisma, ctx.user.id, input.id);

			return ctx.prisma.customTrainer.update({
				where: {
					id: input.id,
				},
				data: {
					...input.data,
				},
			});
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			await getOwnedCustomTrainerById(ctx.prisma, ctx.user.id, input.id);

			return ctx.prisma.customTrainer.delete({
				where: {
					id: input.id,
				},
			});
		}),

	listDownloads: protectedProcedure.query(({ctx}) =>
		ctx.prisma.customTrainerDownload.findMany({
			where: {
				user_id: ctx.user.id,
			},
		})
	),

	download: protectedProcedure
		.input(
			z.object({
				sourceId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {prisma, user} = ctx;

			const source = await prisma.customTrainer.findUnique({
				where: {
					id: input.sourceId,
				},
			});

			if (!source) {
				throw new TRPCError({code: 'NOT_FOUND'});
			}

			if (source.private || source.copy_of_id || source.downloaded) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'This trainer cannot be copied'});
			}

			if (source.user_id === user.id) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You cannot download your own trainer'});
			}

			const downloadCount = await prisma.customTrainer.count({
				where: {
					copy_of_id: input.sourceId,
					user_id: user.id,
				},
			});
			if (downloadCount > 0) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You have already downloaded this trainer'});
			}

			const id = generateUUID();

			const newTrainer = await prisma.customTrainer.create({
				data: {
					...source,
					id,
					private: true,
					key: id,
					downloaded: true,
					copy_of_id: input.sourceId,
					user_id: user.id,
				},
			});

			await prisma.customTrainerDownload.create({
				data: {
					source_trainer_id: source.id,
					new_trainer_id: newTrainer.id,
					user_id: user.id,
					creator_id: source.user_id,
				},
			});

			return newTrainer;
		}),

	listLikes: protectedProcedure.query(({ctx}) =>
		ctx.prisma.customTrainerLike.findMany({
			where: {
				user_id: ctx.user.id,
			},
		})
	),

	like: protectedProcedure
		.input(
			z.object({
				customTrainerId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {liked, target} = await getLikedCustomTrainer(ctx.prisma, ctx.user.id, input.customTrainerId);

			if (liked) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You have already liked this trainer'});
			}

			const like = await ctx.prisma.customTrainerLike.create({
				data: {
					custom_trainer_id: input.customTrainerId,
					creator_id: target.user_id,
					user_id: ctx.user.id,
				},
			});

			await updateLikeCount(ctx.prisma, target);

			return like;
		}),

	unlike: protectedProcedure
		.input(
			z.object({
				customTrainerId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {liked, target} = await getLikedCustomTrainer(ctx.prisma, ctx.user.id, input.customTrainerId);

			if (!liked) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'You have not liked this trainer'});
			}

			const like = await ctx.prisma.customTrainerLike.delete({
				where: {
					id: liked.id,
				},
			});

			await updateLikeCount(ctx.prisma, target);

			return like;
		}),
});
