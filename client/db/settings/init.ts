import {MemoryTable} from '@/db/memory/table';

export interface SettingValue {
	id: string;
	value: any;
	local: boolean;
}

// Rebuilt from the backend and localStorage on every load, so it is never persisted. Stays null on the server and
// before init, where readers fall back to the default settings.
let settingsDb: MemoryTable<SettingValue> | null = null;

export function getSettingsDb(): MemoryTable<SettingValue> | null {
	return settingsDb;
}

export function initSettingsDb(settings: SettingValue[]) {
	if (typeof window === 'undefined') {
		return;
	}

	const table = new MemoryTable<SettingValue>();
	table.replaceAll(settings);
	settingsDb = table;
}
