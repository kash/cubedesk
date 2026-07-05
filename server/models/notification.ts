import {getPrisma} from '@/server/database';
import {Notification as NotificationSchema} from '@/types/notification';
import {publicUserSelect, UserAccount} from '@/types/user';

// triggering_user must stay a safe select — tRPC has no schema masking, and a
// full include would send that user's password hash to the client
const notificationInclude = {
	triggering_user: {
		select: publicUserSelect,
	},
};

export async function getNotificationById(id: string): Promise<NotificationSchema | null> {
	return await getPrisma().notification.findUnique({
		where: {
			id,
		},
	});
}

export async function getUnreadNotificationCount(user: UserAccount): Promise<number> {
	return await getPrisma().notification.count({
		where: {
			user_id: user.id,
			read_at: null,
		},
	});
}

export function getNotifications(user: UserAccount, offset: number, limit: number) {
	return getPrisma().notification.findMany({
		where: {
			user_id: user.id,
		},
		orderBy: {
			created_at: 'desc',
		},
		skip: offset,
		take: limit,
		include: notificationInclude,
	});
}

export async function readNotification(notification: NotificationSchema): Promise<NotificationSchema> {
	return await getPrisma().notification.update({
		where: {
			id: notification.id,
		},
		data: {
			read_at: new Date(),
		},
	});
}

export async function deleteNotification(notification: NotificationSchema) {
	return getPrisma().notification.delete({
		where: {
			id: notification.id,
		},
	});
}
