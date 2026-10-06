import {getCustomEventTypesByUserId} from '@/server/models/custom_event_type';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {EVENT_TYPES} from '@/util/cubes/event_types';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const customEventTypeInputSchema = z.object({
	scramble: z.string(),
	name: z.string(),
	private: z.boolean().optional(),
});

export const customEventTypeRouter = router({
	list: protectedProcedure.query(({ctx}) => getCustomEventTypesByUserId(ctx.user.id)),

	create: protectedProcedure.input(customEventTypeInputSchema).mutation(async ({ctx, input}) => {
		const defaultEventType = EVENT_TYPES[input.name];
		const existing = await ctx.prisma.customEventType.findFirst({
			where: {
				user_id: ctx.user.id,
				name: input.name,
			},
		});

		if (defaultEventType || existing) {
			throw new TRPCError({code: 'FORBIDDEN', message: 'Event type already exists'});
		}

		return ctx.prisma.customEventType.create({
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
			const customEventType = await ctx.prisma.customEventType.findUnique({
				where: {
					id: input.id,
				},
			});

			if (!customEventType || customEventType.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'FORBIDDEN'});
			}

			return ctx.prisma.customEventType.delete({
				where: {
					id: input.id,
				},
			});
		}),
});
