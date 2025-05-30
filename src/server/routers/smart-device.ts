import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {getPrismaClient} from '@/server/services/database';
import uniqid from 'uniqid';

export const smartDeviceRouter = createTRPCRouter({
	getDevices: userProcedure
		.query(async ({ctx}) => {
			const prisma = getPrismaClient();
			
			const devices = await prisma.smartDevice.findMany({
				where: {
					user_id: ctx.me.id,
				},
				include: {
					solves: {
						select: {
							id: true,
						},
					},
				},
			});

			return devices;
		}),

	addNewDevice: userProcedure
		.input(z.object({
			originalName: z.string(),
			deviceId: z.string(),
		}))
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			const device = await prisma.smartDevice.create({
				data: {
					id: uniqid('sd-'),
					user_id: ctx.me.id,
					name: input.originalName,
					internal_name: input.originalName,
					device_id: input.deviceId,
				},
			});

			return device;
		}),
});