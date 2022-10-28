import {gql} from '@apollo/client';
import {
	FRIENDSHIP_FRAGMENT,
	MINI_SOLVE_FRAGMENT,
	SESSION_FRAGMENT,
	SETTING_FRAGMENT,
	STATS_MODULE_BLOCK_FRAGMENT,
} from '../../util/graphql/fragments';
import {gqlQuery, removeTypename} from '../api';
import {initSessionCollection, initSessionDb} from '../../db/sessions/init';
import {Dispatch} from 'redux';
import {addFriendships} from '../../actions/account';
import {clearOfflineData, initOfflineData, updateOfflineHash} from './offline';
import {initSettingsDb, SettingValue} from '../../db/settings/init';
import {getDefaultSettings} from '../../db/settings/query';
import {initLokiDb} from '../../db/lokijs';
import {initSolveDb, initSolvesCollection} from '../../db/solves/init';
import {initTrainerData} from '../trainer/util/init';
import {getNewScramble} from '../timer/helpers/scramble';
import {Solve} from '../../../server/schemas/Solve.schema';
import {StatsModule} from '../../../server/schemas/StatsModule.schema';
import {initStatsModuleStore} from '../../actions/stats';
import {Session} from '../../../server/schemas/Session.schema';
import {Setting} from '../../../server/schemas/Setting.schema';
import {Friendship} from '../../../server/schemas/Friendship.schema';
import {UserAccount} from '../../../server/schemas/UserAccount.schema';
import {getAllLocalSettings} from '../../db/settings/local';
import {getStore} from '../store';
import {setGeneral} from '../../actions/general';
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
	const query = gql`
		${MINI_SOLVE_FRAGMENT}

		query Query {
			solves {
				...MiniSolveFragment
			}
		}
	`;

	try {
		const res = await gqlQuery<{solves: Solve[]}>(query);
		const solves = res.data.solves;

		initSolveDb(solves, forceRefresh);
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
	const query = gql`
		${SESSION_FRAGMENT}

		query Query {
			sessions {
				...SessionFragment
			}
		}
	`;

	const res = await gqlQuery<{sessions: Session[]}>(query);
	initSessionDb(res.data.sessions);
}

async function getStatsModule(disatch: Dispatch<any>) {
	const query = gql`
		${STATS_MODULE_BLOCK_FRAGMENT}

		query Query {
			statsModule {
				blocks {
					...StatsModuleBlockFragment
				}
			}
		}
	`;

	const res = await gqlQuery<{statsModule: StatsModule}>(query);
	disatch(initStatsModuleStore(removeTypename(res.data.statsModule)));
}

async function getAllSettings(userId: string) {
	const query = gql`
		${SETTING_FRAGMENT}

		query Query {
			settings {
				...SettingsFragment
			}
		}
	`;

	const backendSettings = (await gqlQuery<{settings: Setting}>(query)).data.settings;

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
	const query = gql`
		${FRIENDSHIP_FRAGMENT}

		query Query {
			allFriendships {
				...FriendshipFragment
			}
		}
	`;

	const res = await gqlQuery<{allFriendships: Friendship[]}>(query);
	return dispatch(addFriendships(res.data.allFriendships));
}
