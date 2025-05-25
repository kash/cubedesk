import {getPrisma} from '../database';
import {v4 as uuid} from 'uuid';

export function getAllBadgeTypes() {
	return getPrisma().badgeType.findMany();
}

export function getBadgeTypeById(id) {
	return getPrisma().badgeType.findUnique({
		where: {
			id,
		},
	});
}

export function createBadgeType(user, {name, priority, color, description}) {
	return getPrisma().badgeType.create({
		data: {
			id: uuid(),
			name,
			priority,
			color,
			description,
			created_by_id: user.id,
		},
	});
}

export function editBadgeType(badgeType, {name, priority, color, description}) {
	return getPrisma().badgeType.update({
		where: {
			id: badgeType.id,
		},
		data: {
			name,
			priority,
			color,
			description,
		},
	});
}

export function deleteBadgeType(badgeType) {
	return getPrisma().badgeType.delete({
		where: {
			id: badgeType.id,
		},
	});
}

export async function userHasBadge(user, badgeType) {
	const res = await getPrisma().badge.findMany({
		where: {
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});

	return res && res.length;
}

export function addBadgeToUser(user, badgeType) {
	return getPrisma().badge.create({
		data: {
			id: uuid(),
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});
}

export function deleteBadgeFromUser(user, badgeType) {
	return getPrisma().badge.deleteMany({
		where: {
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});
}
