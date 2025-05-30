import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';
import {generateUUID} from '@/shared/code';

export const customTrainerLikeRouter = createTRPCRouter({
	// Get all trainer likes for the current user
	list: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();

		return prisma.customTrainerLike.findMany({
			where: {
				user_id: ctx.me.id,
			},
		});
	}),

	// Like a custom trainer
	create: userProcedure
		.input(
			z.object({
				tainerId: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			// Check if the user has already liked this trainer
			const existingLike = await prisma.customTrainerLike.findFirst({
				where: {
					custom_trainer_id: input.tainerId,
					user_id: ctx.me.id,
				},
			});

			if (existingLike) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'You have already liked this trainer',
				});
			}

			// Increment the like count on the custom trainer
			const trainer = await prisma.customTrainer.update({
				where: {
					id: input.tainerId,
				},
				data: {
					like_count: {
						increment: 1,
					},
				},
			});

			// Create the like
			const like = await prisma.customTrainerLike.create({
				data: {
					id: generateUUID(),
					custom_trainer_id: input.tainerId,
					user_id: ctx.me.id,
					creator_id: trainer.user_id,
				},
			});

			return like;
		}),

	// Unlike a custom trainer
	delete: userProcedure
		.input(z.object({trainerId: z.string()}))
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			const like = await prisma.customTrainerLike.findFirst({
				where: {
					custom_trainer_id: input.trainerId,
					user_id: ctx.me.id,
				},
			});

			if (!like) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Like not found',
				});
			}

			// Delete the like
			await prisma.customTrainerLike.delete({
				where: {
					id: like.id,
				},
			});

			// Decrement the like count on the custom trainer
			await prisma.customTrainer.update({
				where: {
					id: input.trainerId,
				},
				data: {
					like_count: {
						decrement: 1,
					},
				},
			});

			return true;
		}),
});
