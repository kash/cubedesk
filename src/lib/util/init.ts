import { initLokiDb } from '../db/lokijs';
import { getAllLocalSettings } from '../db/settings/local';
import { initSettingsDb } from '../db/settings/init';
import { initSessionCollection } from '../db/sessions/init';
import { initSolvesCollection } from '../db/solves/init';
import { Dispatch } from 'redux';
import { UserAccount } from '@/types/user-account';
import { generateId } from '../../shared/code';
import { getStore } from '../../components/store';
import { setGeneral } from '../actions/general';
import { initOfflineData, clearOfflineData, updateOfflineHash } from './offline';
import { initTrainerData } from '../../components/trainer/util/init';
import { getNewScramble } from '../../components/timer/helpers/scramble';
import { initAllSolves, getAllSessions, getAllSettings, getStatsModule, getAllFriends } from './data-loaders';

// Initialize anonymous app data for non-authenticated users
export function initAnonymousAppData(callback: () => void) {
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

// Initialize app data for authenticated users
export async function initAppData(me: UserAccount, dispatch: Dispatch<any>, callback: () => void): Promise<any> {
  if (typeof window === 'undefined') {
    return;
  }

  console.time('loadedFromOffline');
  await initOfflineData(me, async (passed) => {
    const promises: Promise<any>[] = [];

    if (!passed) {
      try {
        await clearOfflineData();
      } catch (e: unknown) {
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
    } catch (e: unknown) {
      console.error(e);
    }

    callback();
  });
}

// Initialize new scramble
async function initNewScramble() {
  return new Promise((resolve) => {
    getNewScramble('333');
    resolve(null);
  });
}

// Set browser session ID
export function setBrowserSessionId(dispatch: Dispatch<any>) {
  const currentId = getStore()?.getState()?.general?.browserSessionId;

  if (currentId) {
    return;
  }

  const newSessionId = generateId();
  dispatch(setGeneral('browser_session_id', newSessionId));
}