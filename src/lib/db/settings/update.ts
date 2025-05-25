import {snakeCase} from 'change-case';
import {AllSettings, getSetting} from './query';
import {getSettingsDb, SettingValue} from './init';
import {emitEvent} from '../../util/event_handler';
import {setLocalSettingValue} from './local';
import { updateOfflineHash } from "@/lib/util/offline";
import { api } from '../../../trpc/react';

export const MOBILE_FONT_SIZE_MULTIPLIER = 0.75;
export const MIN_MOBILE_FREEZE_TIME = 0.45;

export function setCurrentSession(id: string) {
	return setSetting('session_id', id);
}

export function setCubeType(cubeType: string) {
	return setSetting('cube_type', cubeType);
}

export async function refreshSettings() {
	try {
		const settingsDb = getSettingsDb();
		const backendSettings = await api.setting.settings.query();
		
		for (const key of Object.keys(backendSettings)) {
			const value = backendSettings[key];
			const setVal = settingsDb.findOne({
				id: key,
			});

			if (!setVal) {
				continue;
			}

			setVal.value = value;
			settingsDb.update(setVal);
		}
	} catch (e) {
		// Handle error silently
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

	const localSettingUpdates = [];
	const apiSettingUpdates = [];

	for (const key of Object.keys(payload)) {
		const value = payload[key];

		const setVal = settingsDb.findOne({
			id: key,
		});

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

	const promises: Promise<any>[] = [updateOfflineHash()];

	try {
		promises.push(
			api.setting.setSetting.mutate({
				input: payload,
			})
		);
	} catch (e) {
		// Continue with offline hash update
	}

	await Promise.all(promises);
}

function emitSettingUpdateEvent(setVals: SettingValue[]) {
	for (const setVal of setVals) {
		emitEvent('settingsDbUpdatedEvent', setVal);
	}
}
