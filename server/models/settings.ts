import {v4 as uuid} from 'uuid';
import type {Prisma, Setting} from '@/generated/prisma/client';
import {getPrisma} from '../database';
import {UserAccount} from '@/types/user';

export function getSetting(user: UserAccount) {
	return getPrisma().setting.findUnique({
		where: {
			user_id: user.id,
		},
	});
}

export function getSettingsByUserId(userId: string) {
	return getPrisma().setting.findUnique({
		where: {
			user_id: userId,
		},
		include: {
			custom_cube_types: true,
		},
	});
}

export function createSetting(user: UserAccount) {
	return getPrisma().setting.create({
		data: {
			id: uuid(),
			user_id: user.id,
		},
	});
}

export function setSetting<T extends keyof Setting>(user: UserAccount, key: T, value: Setting[T]) {
	return setSettingByUserId(user.id, key, value);
}

export function setSettingByUserId<T extends keyof Setting>(userId: string, key: T, value: Setting[T]) {
	return getPrisma().setting.update({
		where: {
			user_id: userId,
		},
		data: {
			[key]: value,
		},
	});
}

export function updateSettings(userId: string, data: Prisma.SettingUpdateInput) {
	return getPrisma().setting.update({
		where: {
			user_id: userId,
		},
		data,
	});
}

export function deleteSettings(user: UserAccount) {
	return getPrisma().setting.deleteMany({
		where: {
			user_id: user.id,
		},
	});
}
