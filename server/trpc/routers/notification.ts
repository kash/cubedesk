import {
	deleteNotification,
	getNotificationById,
	getNotifications,
	getUnreadNotificationCount,
	readNotification,
} from '@/server/models/notification';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const PAGE_SIZE = 10;

export const notificationRouter = router({
	unreadCount: protectedProcedure.query(({ctx}) => getUnreadNotificationCount(ctx.user)),

	list: protectedProcedure
		.input(
			z.object({
				page: z.number().int().min(0).default(0),
			})
		)
		.query(({ctx, input}) => getNotifications(ctx.user, input.page * PAGE_SIZE, PAGE_SIZE)),

	markAsRead: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const notif = await getNotificationById(input.id);

			if (!notif || notif.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Notification not found'});
			}

			return readNotification(notif);
		}),

	delete: protectedProcedure
		.input(
			z.object({
				id: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const notif = await getNotificationById(input.id);

			if (!notif || notif.user_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Notification not found'});
			}

			return deleteNotification(notif);
		}),
});
