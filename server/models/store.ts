import {getMe} from '../util/auth';
import {sanitizeUser} from './user_account';

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

export async function initUserAccount(store, req) {
	return await setMe(store, req);
}
