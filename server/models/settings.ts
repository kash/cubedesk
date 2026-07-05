import type {Prisma, Setting} from '@/generated/prisma/client';
import {UserAccount} from '@/types/user';
import {v4 as uuid} from 'uuid';
import {getPrisma} from '@/server/database';

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

// Mirrors the @default(...) attributes on the Setting model in schema.prisma.
// Reset must be an update, never delete-and-recreate: CustomCubeType cascades
// off Setting.user_id, so deleting the row wipes the user's custom cube types.
// session_id is intentionally left alone (active-session state, not a preference).
const defaultSettings = {
	focus_mode: false,
	freeze_time: 0.2,
	inspection: false,
	manual_entry: false,
	inspection_delay: 15,
	inverse_time_list: false,
	hide_time_when_solving: false,
	nav_collapsed: false,
	pb_confetti: true,
	play_inspection_sound: false,
	zero_out_time_after_solve: false,
	confirm_delete_solve: false,
	require_period_in_manual_time_entry: false,
	cube_type: '333',
	timer_decimal_points: 2,
	beta_tester: false,
	use_space_with_smart_cube: false,
	inspection_auto_start: false,
	stats_module_json: null,
} satisfies Prisma.SettingUpdateInput;

export function resetSetting(userId: string) {
	return getPrisma().setting.update({
		where: {
			user_id: userId,
		},
		data: defaultSettings,
		include: {
			custom_cube_types: true,
		},
	});
}
