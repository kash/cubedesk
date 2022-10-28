import {v4 as uuid} from 'uuid';
import {getPrisma} from '../database';
import {UserAccount} from '../schemas/UserAccount.schema';
import {Setting} from '../schemas/Setting.schema';

export function getSetting(user: UserAccount) {
	return getPrisma().setting.findUnique({
		where: {
			user_id: user.id,
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
	return getPrisma().setting.update({
		where: {
			user_id: user.id,
		},
		data: {
			[key]: value,
		},
	});
}

export function deleteSettings(user: UserAccount) {
	return getPrisma().setting.deleteMany({
		where: {
			user_id: user.id,
		},
	});
}
