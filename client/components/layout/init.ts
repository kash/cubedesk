import {initSessionCollection, initSessionDb} from '@/db/sessions/init';
import {Dispatch} from 'redux';
import {addFriendships} from '@/actions/account';
import {clearOfflineData, initOfflineData, updateOfflineHash} from '@/components/layout/offline';
import {initSettingsDb, SettingValue} from '@/db/settings/init';
import {getDefaultSettings} from '@/db/settings/query';
import {initLokiDb} from '@/db/lokijs';
import {initSolveDb, initSolvesCollection} from '@/db/solves/init';
import {initTrainerData} from '@/components/trainer/util/init';
import {getNewScramble} from '@/components/timer/helpers/scramble';
import {Solve} from '@/types/solve';
import {initStatsModuleStore} from '@/actions/stats';
import {trpc} from '@/util/trpc';
import {UserAccount} from '@/types/user';
import {getAllLocalSettings} from '@/db/settings/local';
import {getStore} from '@/components/store';
import {setGeneral} from '@/actions/general';
import {generateId} from '../../../shared/code';

export function initAnonymousAppData(callback) {
	if (typeof window === 'undefined') {
		return;
	}

	initLokiDb({
		autoload: false,
		autosave: false,
		autosaveInterval: undefined,
		adapter: undefined,
	});

	const localSettings = getAllLocalSettings('demo');
	const settingValues = Object.keys(localSettings).map((key) => ({
		id: key,
		local: true,
		value: localSettings[key],
	}));
	initSettingsDb(settingValues);
	initSessionCollection();
	initSolvesCollection(true);

	callback();
}

export async function initAppData(me: UserAccount, dispatch: Dispatch<any>, callback): Promise<any> {
	if (typeof window === 'undefined') {
		return;
	}

	console.time('loadedFromOffline');
	await initOfflineData(me, async (passed) => {
		const promises: Promise<any>[] = [];

		if (!passed) {
			try {
				await clearOfflineData();
			} catch (e) {
				console.error(e);
			}
			initLokiDb({
				autoload: false,
			});

			promises.push(initAllSolves());
			promises.push(getAllSessions());
		} else {
			console.timeEnd('loadedFromOffline');
		}

		promises.push(getStatsModule(dispatch));
		promises.push(getAllSettings(me?.id));
		promises.push(getAllFriends(dispatch));
		promises.push(initTrainerData());
		promises.push(initNewScramble());

		try {
			console.time('loadedFromDatabase');
			await Promise.all(promises);
			console.timeEnd('loadedFromDatabase');

			initSolvesCollection();

			updateOfflineHash(true);
		} catch (e) {
			console.error(e);
		}

		callback();
	});
}

/**
 * This may seem out of place but scrambo takes 300ms to load and its best to load it as early as possible
 * (with everything else)
 */
async function initNewScramble() {
	return new Promise((resolve) => {
		getNewScramble('333');
		resolve(null);
	});
}

export async function initAllSolves(forceRefresh = false) {
	try {
		const solves = await trpc.solve.list.query();

		initSolveDb(solves as unknown as Solve[], forceRefresh);
	} catch (e) {
		initSolveDb([], forceRefresh);
	} finally {
		await updateOfflineHash();
	}
}

export function setBrowserSessionId(dispatch: Dispatch<any>) {
	const currentId = getStore().getState()?.general?.browserSessionId;

	if (currentId) {
		return;
	}

	const newSessionId = generateId();
	dispatch(setGeneral('browser_session_id', newSessionId));
}

async function getAllSessions() {
	const sessions = await trpc.session.list.query();
	initSessionDb(sessions);
}

async function getStatsModule(dispatch: Dispatch<any>) {
	const statsModule = await trpc.stats.module.query();
	dispatch(initStatsModuleStore(statsModule));
}

async function getAllSettings(userId: string) {
	const backendSettings = (await trpc.setting.get.query()) ?? {};

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
