import {getLokiDb} from '../lokijs';

export interface SettingValue {
	id: string;
	value: any;
	local: boolean;
}

export function getSettingsDb(): Collection<SettingValue> {
	const db = getLokiDb();
	return db?.getCollection('settings');
}

export function initSettingsCollection() {
	const db = getLokiDb();

	db.removeCollection('settings');
	db.addCollection<SettingValue>('settings', {
		unique: ['id'],
	});
}

export function initSettingsDb(settings: SettingValue[]) {
	if (typeof window === 'undefined') {
		return;
	}

	initSettingsCollection();

	for (const set of settings) {
		getSettingsDb().insert(set);
	}
}
