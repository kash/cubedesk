import {setSsrValue} from '@/actions/ssr';
import {getSettingsByUserId, getStatsModuleFromSettings} from '@/server/models/settings';
import {getClientMeById} from '@/server/models/user_account';
import {logger} from '@/server/services/logger';
import {getMe, getSessionUserId} from '@/server/util/auth';

async function loadSettings(userId: string) {
	try {
		return {settings: await getSettingsByUserId(userId)};
	} catch (error) {
		logger.warn('Could not load app bootstrap data', {error});
		return null;
	}
}

/**
 * Embeds the data the app waits on before showing anything, saving the client a round trip after the page loads.
 * If this fails, the client fetches it instead.
 */
function setAppBootstrap(store, settings: Awaited<ReturnType<typeof getSettingsByUserId>>) {
	try {
		store.dispatch(
			setSsrValue('app_bootstrap', {
				settings,
				statsModule: getStatsModuleFromSettings(settings),
			}),
		);
	} catch (error) {
		logger.warn('Could not load app bootstrap data', {error});
	}
}

export async function initUserAccount(store, req) {
	const userId = getSessionUserId(req);
	if (!userId) {
		return null;
	}

	const [authUser, me, bootstrap] = await Promise.all([
		getMe(req),
		getClientMeById(userId),
		loadSettings(userId),
	]);
	if (!authUser || !me) {
		return null;
	}

	me.banned_until = authUser.banned_until;

	store.dispatch({
		type: 'SET_ME',
		payload: {
			me,
		},
	});

	if (bootstrap) {
		setAppBootstrap(store, bootstrap.settings);
	}

	return me;
}
