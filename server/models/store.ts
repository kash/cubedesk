import {getMe} from '@/server/util/auth';
import {sanitizeUser} from '@/server/models/user_account';

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
