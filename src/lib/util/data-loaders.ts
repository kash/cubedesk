import {Dispatch} from 'redux';
import {initSolveDb} from '@/lib/db/solves/init';
import {initSessionDb} from '@/lib/db/sessions/init';
import {initSettingsDb, SettingValue} from '@/lib/db/settings/init';
import {getDefaultSettings} from '@/lib/db/settings/query';
import {getAllLocalSettings} from '@/lib/db/settings/local';
import {addFriendships} from '@/lib/actions/account';
import {initStatsModuleStore} from '@/lib/actions/stats';
import {Session, Setting, Friendship} from '@/generated/zod';
import {StatsModule} from '@/lib/types/stats';
import {updateOfflineHash} from '@/lib/util/offline';
import {api} from '@/trpc/server';

// Initialize all solves
export async function initAllSolves(forceRefresh = false) {
	try {
		const solves = await api.solve.solves();
		initSolveDb(solves, forceRefresh);
	} catch (e: unknown) {
		initSolveDb([], forceRefresh);
	} finally {
		await updateOfflineHash();
	}
}

// Get all sessions
export async function getAllSessions() {
	try {
		const sessions = await api.session.sessions();
		initSessionDb(sessions);
	} catch (e: unknown) {
		initSessionDb([]);
	}
}

// Get stats module
export async function getStatsModule(dispatch: Dispatch<any>) {
	const statsModule = await api.statsModule.get();
	if (statsModule) {
		dispatch(initStatsModuleStore(statsModule));
	}
}

// Get all settings
export async function getAllSettings(userId: string) {
	try {
		const backendSettings = await api.setting.settings();

		const settings: SettingValue[] = [];
		const localSettings = getAllLocalSettings(userId);
		const defaultSettings = {...getDefaultSettings()};

		for (const key of Object.keys(defaultSettings)) {
			const setting = {
				id: key,
				local: true,
				value: defaultSettings[key],
			};

			if (key in backendSettings) {
				setting.value = backendSettings[key];
				setting.local = false;
			} else if (localSettings[key] !== undefined && localSettings[key] !== null) {
				setting.value = localSettings[key];
			}

			settings.push(setting);
		}

		initSettingsDb(settings);
	} catch (e: unknown) {
		// Initialize with default settings only
		const settings: SettingValue[] = [];
		const localSettings = getAllLocalSettings(userId);
		const defaultSettings = {...getDefaultSettings()};

		for (const key of Object.keys(defaultSettings)) {
			const setting = {
				id: key,
				local: true,
				value: defaultSettings[key],
			};

			if (localSettings[key] !== undefined && localSettings[key] !== null) {
				setting.value = localSettings[key];
			}

			settings.push(setting);
		}

		initSettingsDb(settings);
	}
}

// Get all friends
export async function getAllFriends(dispatch: Dispatch<any>) {
	try {
		const friendships = await api.friendship.list();
		return dispatch(addFriendships(friendships));
	} catch (e: unknown) {
		return dispatch(addFriendships([]));
	}
}
