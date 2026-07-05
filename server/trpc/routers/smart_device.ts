import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {createSmartDevice, deleteSmartDevice, getSmartDeviceById, updateSmartDevice} from '../../models/smart_device';
import {protectedProcedure, router} from '../trpc';

export const smartDeviceRouter = router({
	// Full solve rows carry BigInt timestamps that can't be JSON-serialized;
	// the client only needs solve ids for counts
	list: protectedProcedure.query(({ctx}) =>
		ctx.prisma.smartDevice.findMany({
			where: {
				user_id: ctx.user.id,
			},
			include: {
				solves: {
					select: {
						id: true,
					},
				},
			},
		})
	),

	create: protectedProcedure
		.input(
			z.object({
				originalName: z.string().trim().min(1, 'Invalid device name'),
				deviceId: z.string().trim().min(1, 'Invalid device ID'),
			})
		)
		.mutation(({ctx, input}) => createSmartDevice(ctx.user, input.originalName, input.originalName, input.deviceId)),

	rename: protectedProcedure
		.input(
			z.object({
				id: z.string(),
				name: z.string().trim().min(1, 'Invalid new name for smart device'),
			})
		)
		.mutation(async ({ctx, input}) => {
			const sd = await getSmartDeviceById(input.id);
			if (!sd || sd.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid smart device ID'});
			}

			return updateSmartDevice(input.id, {
				name: input.name,
			});
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const sd = await getSmartDeviceById(input.id);
			if (!sd || sd.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid smart device ID'});
			}

			await deleteSmartDevice(input.id);

			return sd;
		}),
});
