import {ErrorCode} from '@/server/constants/errors';
import {publicUserInclude} from '@/server/models/user_account';
import {getPrismaClient} from '@/server/services/database';
import {createTRPCRouter, publicProcedure, userProcedure} from '@/server/trpc';
import {getPaginatedResponse} from '@/server/utils/pagination';
import {generateUUID} from '@/shared/code';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const customTrainerCreateInput = z.object({});

const paginationArgs = z.object({
	take: z.number(),
	skip: z.number(),
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

export const customTrainerRouter = createTRPCRouter({
	// Get custom trainers for the logged-in user
	getByUser: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();

		return prisma.customTrainer.findMany({
			where: {
				user_id: ctx.me.id,
			},
			include: {
				user: publicUserInclude,
				copy_of: {
					include: {
						user: publicUserInclude,
					},
				},
			},
		});
	}),

	// Get a specific custom trainer by ID
	getById: userProcedure.input(z.object({id: z.string()})).query(async ({ctx, input}) => {
		const prisma = getPrismaClient();

		const customTrainer = await prisma.customTrainer.findUnique({
			where: {
				id: input.id,
			},
			include: {
				user: publicUserInclude,
				copy_of: {
					include: {
						user: publicUserInclude,
					},
				},
			},
		});

		if (!customTrainer) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Custom trainer not found',
			});
		}

		if (customTrainer.user_id !== ctx.me.id) {
			throw new TRPCError({
				code: 'FORBIDDEN',
				message: ErrorCode.FORBIDDEN,
			});
		}

		return customTrainer;
	}),

	// Get public custom trainers with pagination
	getPublic: publicProcedure.input(paginationArgs).query(async ({input}) => {
		const requestInput = {
			paginationArgs: input,
			tableName: 'customTrainer',
			prismaPayload: {
				where: publicTrainerWhere,
				orderBy: {
					like_count: 'desc',
				},
				include: {
					user: publicUserInclude,
				},
			},
		};

		return getPaginatedResponse(requestInput);
	}),

	// Create a new custom trainer
	create: userProcedure
		.input(
			z.object({
				solution: z.string(),
				colors: z.string().optional(),
				cubeType: z.string(),
				groupName: z.string(),
				scrambles: z.string().optional(),
				altSolutions: z.string(),
				threeD: z.boolean(),
				name: z.string(),
				private: z.boolean(),
				description: z.string().optional(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			const id = generateUUID();

			const newTrainer = await prisma.customTrainer.create({
				data: {
					id,
					three_d: input.threeD,
					cube_type: input.cubeType,
					name: input.name,
					group_name: input.groupName,
					scrambles: input.scrambles,
					alt_solutions: input.altSolutions,
					colors: input.colors,
					downloaded: false,
					key: id,
					user_id: ctx.me.id,
					algo_type: 'custom', // Always "custom" as noted in the schema
					like_count: 0, // Initialize like count to 0
				},
			});

			return prisma.customTrainer.findUnique({
				where: {id: newTrainer.id},
			});
		}),

	// Update an existing custom trainer
	update: userProcedure
		.input(
			z.object({
				id: z.string(),
				data: customTrainerCreateInput,
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			const target = await prisma.customTrainer.findUnique({
				where: {id: input.id},
			});

			if (!target) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Custom trainer not found',
				});
			}

			if (target.user_id !== ctx.me.id) {
				throw new TRPCError({
					code: 'FORBIDDEN',
					message: ErrorCode.FORBIDDEN,
				});
			}

			return prisma.customTrainer.update({
				where: {
					id: input.id,
				},
				data: {
					...input.data,
				},
			});
		}),

	// Delete a custom trainer
	delete: userProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
		const prisma = getPrismaClient();

		const target = await prisma.customTrainer.findUnique({
			where: {id: input.id},
		});

		if (!target) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Custom trainer not found',
			});
		}

		if (target.user_id !== ctx.me.id) {
			throw new TRPCError({
				code: 'FORBIDDEN',
				message: ErrorCode.FORBIDDEN,
			});
		}

		return prisma.customTrainer.delete({
			where: {
				id: input.id,
			},
		});
	}),
});
