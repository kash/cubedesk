import {addFriendships} from '@/actions/account';
import {setGeneral} from '@/actions/general';
import {initStatsModuleStore} from '@/actions/stats';
import {getMe, getStore} from '@/components/store';
import {listenForOtherTabChanges} from '@/db/persist/broadcast';
import {disablePersistence, setActiveUserId} from '@/db/persist/database';
import {removeLegacyLocalData} from '@/db/persist/legacy';
import {holdTabLock} from '@/db/persist/locks';
import {loadLocalSnapshot, refetchSolvesAndSessions} from '@/db/persist/sync';
import {initSessionDb} from '@/db/sessions/init';
import {initSettingsDb, SettingValue} from '@/db/settings/init';
import {getAllLocalSettings} from '@/db/settings/local';
import {getDefaultSettings} from '@/db/settings/query';
import {initSolveDb} from '@/db/solves/init';
import {clearAllSolveStatCache} from '@/db/solves/stats/solves/caching';
import {generateId} from '@/shared/code';
import {AppBootstrap} from '@/types/bootstrap';
import {UserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';
import {Dispatch} from 'redux';

export function initAnonymousAppData(callback) {
	if (typeof window === 'undefined') {
		return;
	}

	// Demo solves live only in memory
	disablePersistence('demo');
	removeLegacyLocalData();

	const localSettings = getAllLocalSettings('demo');
	const settingValues = Object.keys(localSettings).map((key) => ({
		id: key,
		local: true,
		value: localSettings[key],
	}));
	initSettingsDb(settingValues);
	initSessionDb([]);
	initSolveDb([]);

	callback();
}

// Reading the local copy should be much faster than this. If IndexedDB hangs, fetch from the server instead.
const LOCAL_DATA_TIMEOUT_MS = 8000;

export async function initAppData(
	me: UserAccount,
	dispatch: Dispatch<any>,
	callback,
): Promise<any> {
	if (typeof window === 'undefined') {
		return;
	}

	removeLegacyLocalData();
	setActiveUserId(me.id);
	holdTabLock();
	listenForOtherTabChanges();

	// Embedded in the page by the server when available, so these usually need no requests
	const bootstrap = getAppBootstrap();

	const promises: Promise<unknown>[] = [
		initStatsModule(dispatch, bootstrap),
		initSettings(me.id, bootstrap),
		initSolvesAndSessions(me),
	];

	// Not needed to show the app, so loaded in the background. Trainer data loads when something first needs it.
	getAllFriends(dispatch).catch((error) => {
		console.error('Could not load friends', error);
	});

	try {
		console.time('loadedFromDatabase');
		await Promise.all(promises);
		console.timeEnd('loadedFromDatabase');
	} catch (e) {
		console.error(e);
	}

	// Settings (e.g. custom event types) are now loaded, so recompute any stats read before then
	clearAllSolveStatCache();

	callback();
}

async function initSolvesAndSessions(me: UserAccount) {
	console.time('loadedFromOffline');
	const local = await loadLocalSnapshot(me, LOCAL_DATA_TIMEOUT_MS);
	if (!local) {
		await refetchSolvesAndSessions(me);
		return;
	}

	initSolveDb(local.solves);
	initSessionDb(local.sessions);
	console.timeEnd('loadedFromOffline');
}

/**
 * Reloads all solves and sessions from the server, e.g. after a change made only on the server
 */
export async function initAllSolves() {
	const me = getMe();
	if (!me) {
		return;
	}

	await refetchSolvesAndSessions(me, {forceNewHash: true});
}

export function setBrowserSessionId(dispatch: Dispatch<any>) {
	const currentId = getStore().getState()?.general?.browserSessionId;

	if (currentId) {
		return;
	}

	const newSessionId = generateId();
	dispatch(setGeneral('browser_session_id', newSessionId));
}

function getAppBootstrap(): AppBootstrap | null {
	return getStore().getState().ssr?.app_bootstrap ?? null;
}

async function initStatsModule(dispatch: Dispatch<any>, bootstrap: AppBootstrap | null) {
	const statsModule = bootstrap ? bootstrap.statsModule : await trpc.stats.module.query();
	dispatch(initStatsModuleStore(statsModule));
}

async function initSettings(userId: string, bootstrap: AppBootstrap | null) {
	const backendSettings = (bootstrap ? bootstrap.settings : await trpc.setting.get.query()) ?? {};

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
}

async function getAllFriends(dispatch) {
	const friendships = await trpc.friendship.list.query();
	return dispatch(addFriendships(friendships));
}
