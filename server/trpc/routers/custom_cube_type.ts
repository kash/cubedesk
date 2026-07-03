import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {protectedProcedure, router} from '../trpc';
import {getCustomCubeTypesByUserId} from '../../models/custom_cube_type';
import {CUBE_TYPES} from '../../../client/util/cubes/cube_types';

const customCubeTypeInputSchema = z.object({
	scramble: z.string(),
	name: z.string(),
	private: z.boolean().optional(),
});

export const customCubeTypeRouter = router({
	list: protectedProcedure.query(({ctx}) => getCustomCubeTypesByUserId(ctx.user.id)),

	create: protectedProcedure.input(customCubeTypeInputSchema).mutation(async ({ctx, input}) => {
		const defaultCubeType = CUBE_TYPES[input.name];
		const existing = await ctx.prisma.customCubeType.findFirst({
			where: {
				user_id: ctx.user.id,
				name: input.name,
			},
		});

		if (defaultCubeType || existing) {
			throw new TRPCError({code: 'FORBIDDEN', message: 'Cube type already exists'});
		}

		return ctx.prisma.customCubeType.create({
			data: {
				...input,
				user_id: ctx.user.id,
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
			const customCubeType = await ctx.prisma.customCubeType.findUnique({
				where: {
					id: input.id,
				},
			});

			if (!customCubeType || customCubeType.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN'});
			}

			return ctx.prisma.customCubeType.delete({
				where: {
					id: input.id,
				},
			});
		}),
});
