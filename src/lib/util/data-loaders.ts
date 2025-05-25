import { Dispatch } from 'redux';
import { initSolveDb } from '../db/solves/init';
import { initSessionDb } from '../db/sessions/init';
import { initSettingsDb, SettingValue } from '../db/settings/init';
import { getDefaultSettings } from '../db/settings/query';
import { getAllLocalSettings } from '../db/settings/local';
import { addFriendships } from '../actions/account';
import { initStatsModuleStore } from '../actions/stats';
import { Session } from '../../server/schemas/Session.schema';
import { Setting } from '../../server/schemas/Setting.schema';
import { StatsModule } from '../types/stats';
import { Friendship } from '../../server/schemas/Friendship.schema';
import { updateOfflineHash } from "@/lib/util/offline";
import { api } from '../../trpc/server';

// Initialize all solves
export async function initAllSolves(forceRefresh = false) {
  try {
    const solves = await api.solve.solves();
    initSolveDb(solves, forceRefresh);
  } catch (e) {
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
  } catch (e) {
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
  } catch (e) {
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
    const friendships = await api.friendship.allFriendships();
    return dispatch(addFriendships(friendships));
  } catch (e) {
    return dispatch(addFriendships([]));
  }
}