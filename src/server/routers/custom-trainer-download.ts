import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {getPrismaClient} from '@/server/services/database';
import {generateUUID} from '@/shared/code';
import {TRPCError} from '@trpc/server';

export const customTrainerDownloadRouter = createTRPCRouter({
	// Get all trainer downloads for the current user
	list: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();

		return prisma.customTrainerDownload.findMany({
			where: {
				user_id: ctx.me.id,
			},
		});
	}),

	// Download a custom trainer (creates a copy)
	create: userProcedure
		.input(
			z.object({
				sourceId: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			// Get the source trainer
			const sourceTrainer = await prisma.customTrainer.findUnique({
				where: {
					id: input.sourceId,
				},
			});

			if (!sourceTrainer) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Source trainer not found'});
			}

			// Create a new trainer as a copy
			const newTrainerId = generateUUID();
			const newTrainer = await prisma.customTrainer.create({
				data: {
					id: newTrainerId,
					user_id: ctx.me.id,
					solution: sourceTrainer.solution,
					scrambles: sourceTrainer.scrambles,
					alt_solutions: sourceTrainer.alt_solutions,
					algo_type: sourceTrainer.algo_type,
					group_name: sourceTrainer.group_name,
					colors: sourceTrainer.colors,
					three_d: sourceTrainer.three_d,
					cube_type: sourceTrainer.cube_type,
					key: newTrainerId,
					name: sourceTrainer.name,
					like_count: 0,
					private: true,
					copy_of_id: sourceTrainer.id,
					description: sourceTrainer.description,
					downloaded: true,
				},
			});

			// Record the download
			await prisma.customTrainerDownload.create({
				data: {
					id: generateUUID(),
					source_trainer_id: input.sourceId,
					user_id: ctx.me.id,
					creator_id: sourceTrainer.user_id,
					new_trainer_id: newTrainer.id,
				},
			});

			return newTrainer;
		}),
});
