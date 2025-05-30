import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';
import {ErrorCode} from '@/server/constants/errors';
import {CUBE_TYPES} from '@/lib/util/cubes/cube_types';

export const customCubeTypeRouter = createTRPCRouter({
	// Get custom cube types for the logged-in user
	list: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();

		return prisma.customCubeType.findMany({
			where: {
				user_id: ctx.me.id,
			},
			orderBy: {
				created_at: 'desc',
			},
		});
	}),

	// Create a new custom cube type
	create: userProcedure
		.input(
			z.object({
				scramble: z.string(),
				name: z.string(),
				private: z.boolean(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			// Check if a default cube type with this name exists
			const defaultCubeType = CUBE_TYPES[input.name];
			if (defaultCubeType) {
				throw new TRPCError({
					code: 'CONFLICT',
					message: 'Cube type already exists',
				});
			}

			// Check if user already has a custom cube type with this name
			const existing = await prisma.customCubeType.findFirst({
				where: {
					user_id: ctx.me.id,
					name: input.name,
				},
			});

			if (existing) {
				throw new TRPCError({
					code: 'CONFLICT',
					message: 'Cube type already exists',
				});
			}

			return prisma.customCubeType.create({
				data: {
					...input,
					user_id: ctx.me.id,
				},
			});
		}),

	// Delete a custom cube type
	delete: userProcedure.input(z.object({id: z.string()})).mutation(async ({ctx, input}) => {
		const prisma = getPrismaClient();

		const customCubeType = await prisma.customCubeType.findUnique({
			where: {id: input.id},
		});

		if (!customCubeType) {
			throw new TRPCError({
				code: 'NOT_FOUND',
				message: 'Custom cube type not found',
			});
		}

		if (customCubeType.user_id !== ctx.me.id) {
			throw new TRPCError({
				code: 'FORBIDDEN',
				message: ErrorCode.FORBIDDEN,
			});
		}

		return prisma.customCubeType.delete({
			where: {
				id: input.id,
			},
		});
	}),
});
