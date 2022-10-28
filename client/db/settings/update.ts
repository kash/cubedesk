import {Setting} from '../../@types/generated/graphql';
import {gql} from '@apollo/client';
import {SETTING_FRAGMENT} from '../../util/graphql/fragments';
import {gqlMutate, gqlQuery} from '../../components/api';
import {snakeCase} from 'change-case';
import {AllSettings, getSetting} from './query';
import {getSettingsDb, SettingValue} from './init';
import {updateOfflineHash} from '../../components/layout/offline';
import {emitEvent} from '../../util/event_handler';
import {setLocalSettingValue} from './local';

export const MOBILE_FONT_SIZE_MULTIPLIER = 0.75;
export const MIN_MOBILE_FREEZE_TIME = 0.45;

export function setCurrentSession(id: string) {
	return setSetting('session_id', id);
}

export function setCubeType(cubeType: string) {
	return setSetting('cube_type', cubeType);
}

export async function refreshSettings() {
	const query = gql`
		${SETTING_FRAGMENT}

		query Query {
			settings {
				...SettingsFragment
			}
		}
	`;

	interface SettingsData {
		settings: Setting;
	}

	const settingsDb = getSettingsDb();
	const res = await gqlQuery<SettingsData>(query);
	for (const key of Object.keys(res.data.settings)) {
		const value = res.data.settings[key];
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
	const gqlPayload = {};

	for (const setVal of setVals) {
		gqlPayload[snakeCase(setVal.id)] = setVal.value;
	}

	// Terminate if no keys to set
	if (!Object.keys(gqlPayload).length) {
		return;
	}

	const promises: Promise<any>[] = [updateOfflineHash()];

	const query = gql`
		mutation Mutate($input: SettingInput) {
			setSetting(input: $input) {
				id
			}
		}
	`;

	promises.push(
		gqlMutate(query, {
			input: gqlPayload,
		})
	);

	await Promise.all(promises);
}

function emitSettingUpdateEvent(setVals: SettingValue[]) {
	for (const setVal of setVals) {
		emitEvent('settingsDbUpdatedEvent', setVal);
	}
}
