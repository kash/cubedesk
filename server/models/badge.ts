import type {BadgeType, UserAccount} from '@/generated/prisma/client';
import {v4 as uuid} from 'uuid';
import {getPrisma} from '@/server/database';

interface BadgeTypeInput {
	name: string;
	priority: number;
	color: string;
	description: string;
}

export function getAllBadgeTypes() {
	return getPrisma().badgeType.findMany();
}

export function getBadgeTypeById(id: string) {
	return getPrisma().badgeType.findUnique({
		where: {
			id,
		},
	});
}

export function createBadgeType(user: UserAccount, {name, priority, color, description}: BadgeTypeInput) {
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

export function editBadgeType(badgeType: BadgeType, {name, priority, color, description}: BadgeTypeInput) {
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

export function deleteBadgeType(badgeType: BadgeType) {
	return getPrisma().badgeType.delete({
		where: {
			id: badgeType.id,
		},
	});
}

export async function userHasBadge(user: UserAccount, badgeType: BadgeType) {
	const res = await getPrisma().badge.findMany({
		where: {
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});

	return res && res.length;
}

export function addBadgeToUser(user: UserAccount, badgeType: BadgeType) {
	return getPrisma().badge.create({
		data: {
			id: uuid(),
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});
}

export function deleteBadgeFromUser(user: UserAccount, badgeType: BadgeType) {
	return getPrisma().badge.deleteMany({
		where: {
			user_id: user.id,
			badge_type_id: badgeType.id,
		},
	});
}
