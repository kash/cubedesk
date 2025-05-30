import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {getPrismaClient} from '@/server/services/database';

export const notificationRouter = createTRPCRouter({
	list: userProcedure
		.input(z.object({
			page: z.number().int().min(0).default(0),
			pageSize: z.number().int().min(1).max(50).default(10),
		}))
		.query(async ({ctx, input}) => {
			const prisma = getPrismaClient();
			
			const notifications = await prisma.notification.findMany({
				where: {
					user_id: ctx.me.id,
				},
				include: {
					triggering_user: true,
				},
				orderBy: {
					created_at: 'desc',
				},
				skip: input.page * input.pageSize,
				take: input.pageSize,
			});

			return notifications;
		}),

	unreadCount: userProcedure
		.query(async ({ctx}) => {
			const prisma = getPrismaClient();
			
			const count = await prisma.notification.count({
				where: {
					user_id: ctx.me.id,
					read_at: null,
				},
			});

			return count;
		}),

	markAsRead: userProcedure
		.input(z.object({
			id: z.string(),
		}))
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			const notification = await prisma.notification.update({
				where: {
					id: input.id,
					user_id: ctx.me.id,
				},
				data: {
					read_at: new Date(),
				},
			});

			return notification;
		}),

	delete: userProcedure
		.input(z.object({
			id: z.string(),
		}))
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			await prisma.notification.delete({
				where: {
					id: input.id,
					user_id: ctx.me.id,
				},
			});

			return {id: input.id};
		}),
});