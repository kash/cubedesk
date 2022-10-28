import {AllSettings, getDefaultSettings} from './query';
import {getLocalStorage, setLocalStorageObject} from '../../util/data/local_storage';
import {getMe} from '../../components/store';

export function getAllLocalSettings(userId: string): AllSettings {
	clearDemoUserSettings();

	const settingsVal = getLocalStorage('settings');
	let output: AllSettings = getDefaultSettings();

	if (settingsVal && typeof settingsVal === 'object') {
		const userSettings = settingsVal[userId];
		if (userSettings && Object.keys(userSettings).length) {
			output = userSettings;
		} else {
			settingsVal[userId] = getDefaultSettings();
			setLocalStorageObject('settings', settingsVal);
		}
	} else {
		output = findLegacyLocalSettings();

		setLocalStorageObject('settings', {
			[userId]: output,
		});
	}

	return output;
}

export function getLocalSettingValue<T extends keyof AllSettings>(key: T): AllSettings[T] {
	const me = getMe();
	const userId = me?.id || 'demo';

	const localSettings = getAllLocalSettings(userId);
	return localSettings[key];
}

export function setLocalSettingValue<T extends keyof AllSettings>(key: T, value: AllSettings[T]): void {
	const me = getMe();
	const userId = me?.id || 'demo';

	const allSettingsVal = getLocalStorage('settings');
	const localSettings = getAllLocalSettings(userId);
	localSettings[key] = value;

	allSettingsVal[userId] = localSettings;

	setLocalStorageObject('settings', allSettingsVal);
}

function clearDemoUserSettings() {
	const settingsVal = getLocalStorage('settings');
	if (settingsVal && settingsVal?.demo) {
		delete settingsVal.demo;
		setLocalStorageObject('settings', settingsVal);
	}
}

function findLegacyLocalSettings() {
	const defaultSettings = getDefaultSettings();
	const newSettings = {...defaultSettings};

	for (const key of Object.keys(defaultSettings)) {
		const localValue = getLocalStorage(key);

		if (localValue === null || localValue === undefined) {
			continue;
		}

		newSettings[key] = localValue;
	}

	return newSettings;
}
