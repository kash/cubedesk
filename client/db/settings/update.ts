import {updateOfflineHash} from '@/components/layout/offline';
import {getSettingsDb, SettingValue} from '@/db/settings/init';
import {setLocalSettingValue} from '@/db/settings/local';
import {AllSettings, getSetting} from '@/db/settings/query';
import {emitEvent} from '@/util/event_handler';
import {trpc} from '@/util/trpc';
import {snakeCase} from 'change-case';

export const MOBILE_FONT_SIZE_MULTIPLIER = 0.75;

export function setCurrentSession(id: string) {
	return setSetting('session_id', id);
}

export function setCubeType(cubeType: string) {
	return setSetting('cube_type', cubeType);
}

export async function refreshSettings() {
	const settingsDb = getSettingsDb();
	const settings = await trpc.setting.get.query();

	if (!settings) {
		return;
	}

	for (const key of Object.keys(settings)) {
		const value = settings[key];
		const setVal = settingsDb.findOne({
			id: key,
		});

		if (!setVal) {
			continue;
		}

		setVal.value = value;
		settingsDb.update(setVal);
	}
}

type BoolSettingKeys = {[k in keyof AllSettings]: AllSettings[k] extends boolean ? k : never}[keyof AllSettings];
type BoolSettingKey = {[k in BoolSettingKeys]: boolean};
export function toggleSetting(key: keyof BoolSettingKey) {
	const val = getSetting(key);
	setSetting(key, !val);
}

export function setSetting<T extends keyof AllSettings>(key: T, value: AllSettings[T]) {
	const payload: {[key in keyof Partial<AllSettings>]: AllSettings[key]} = {
		[key]: value,
	};

	updatePartialSettings(payload);
}

async function updatePartialSettings(payload: Partial<AllSettings>) {
	const settingsDb = getSettingsDb();

	const localSettingUpdates: SettingValue[] = [];
	const apiSettingUpdates: SettingValue[] = [];

	for (const key of Object.keys(payload)) {
		const value = payload[key];

		const setVal = settingsDb.findOne({
			id: key,
		});

		if (!setVal) {
			continue;
		}

		const newVal = {...setVal};
		newVal.value = value;

		localSettingUpdates.push(newVal);
		if (!newVal.local) {
			apiSettingUpdates.push(newVal);
		}
	}

	setSettingLocal(localSettingUpdates);
	emitSettingUpdateEvent(localSettingUpdates);

	emitSettingUpdateEvent(apiSettingUpdates);
	setSettingApi(apiSettingUpdates);
}

function setSettingLocal(setVals: SettingValue[]) {
	const settingsDb = getSettingsDb();

	for (const setVal of setVals) {
		settingsDb.update(setVal);
		setLocalSettingValue(setVal.id as any, setVal.value);
	}
}

async function setSettingApi(setVals: SettingValue[]) {
	const payload = {};

	for (const setVal of setVals) {
		payload[snakeCase(setVal.id)] = setVal.value;
	}

	// Terminate if no keys to set
	if (!Object.keys(payload).length) {
		return;
	}

	await Promise.all([updateOfflineHash(), trpc.setting.set.mutate(payload)]);
}

function emitSettingUpdateEvent(setVals: SettingValue[]) {
	for (const setVal of setVals) {
		emitEvent('settingsDbUpdatedEvent', setVal);
	}
}
