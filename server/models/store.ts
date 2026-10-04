import {setSsrValue} from '@/actions/ssr';
import {getSettingsByUserId, getStatsModuleFromSettings} from '@/server/models/settings';
import {sanitizeUser} from '@/server/models/user_account';
import {logger} from '@/server/services/logger';
import {getMe} from '@/server/util/auth';

async function setMe(store, req) {
	const user = await getMe(req);
	if (!user) {
		return;
	}

	const me = sanitizeUser(user);
	if (!me || !Object.keys(me).length) {
		return;
	}

	store.dispatch({
		type: 'SET_ME',
		payload: {
			me,
		},
	});

	return me;
}

/**
 * Embeds the data the app waits on before showing anything, saving the client a round trip after the page loads.
 * If this fails, the client fetches it instead.
 */
async function setAppBootstrap(store, userId: string) {
	try {
		const settings = await getSettingsByUserId(userId);
		store.dispatch(
			setSsrValue('app_bootstrap', {
				settings,
				statsModule: getStatsModuleFromSettings(settings),
			})
		);
	} catch (error) {
		logger.warn('Could not load app bootstrap data', {error});
	}
}

export async function initUserAccount(store, req) {
	const me = await setMe(store, req);
	if (me) {
		await setAppBootstrap(store, me.id);
	}

	return me;
}
