import {getPrisma} from '@/server/database';

export function getCustomEventTypesByUserId(userId: string) {
	return getPrisma().customEventType.findMany({
		where: {
			user_id: userId,
		},
	});
}
