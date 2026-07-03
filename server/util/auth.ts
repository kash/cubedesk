import jwt from 'jsonwebtoken';
import {getUserById, getUserByIdWithProfile, updateUserAccountWithParams} from '../models/user_account';
import {getOrCreateUserProfile} from '../models/profile';
import {deactivateAllBanLogs} from '../models/ban_log';
import {Request} from 'express';
import {InternalUserAccount, UserAccount} from '@/types/user';

const jwtSecret = (process as any).env.JWT_SECRET as string;

// Returns the FULL user row (password hash, tokens) for server-side use only
export async function getMe(req: Request): Promise<InternalUserAccount | null> {
	const session = req.cookies.session;

	if (!session) {
		// User not logged in
		return null;
	}

	try {
		const output: any = jwt.verify(session, jwtSecret);

		if (output) {
			const me = await getUserByIdWithProfile(output.user_id, true);

			if (!me) {
				return null;
			}

			if (!me.banned_forever && !me.banned_until && me.bans && me.bans.length) {
				deactivateAllBanLogs(me.id);
			} else if (me.banned_until && new Date() > new Date(me.banned_until)) {
				me.banned_until = null;
				updateUserAccountWithParams(me.id, {
					banned_until: null,
					banned_forever: false,
				});

				deactivateAllBanLogs(me.id);
			}

			return me;
		}
	} catch (e) {
		return null;
	}
	return null;
}

export async function getMeWithCookieString(cookies: string | any): Promise<UserAccount | null> {
	if (!cookies || typeof cookies !== 'string' || !cookies.trim()) {
		return null;
	}

	const coo = cookies.split('; ');
	if (!coo || !coo.length) {
		return null;
	}

	const cookieMap: {[key: string]: string} = {};
	for (const c of coo) {
		const kv = c.split('=');
		if (!kv || kv.length !== 2) {
			continue;
		}

		cookieMap[kv[0]] = kv[1];
	}

	const session = cookieMap.session;
	if (!session || !session.trim()) {
		return null;
	}

	try {
		const output: any = jwt.verify(session, jwtSecret);
		if (output) {
			const user = await getUserById(output.user_id);
			if (!user) {
				return null;
			}

			const profile = await getOrCreateUserProfile(user);
			return {
				...user,
				profile,
			};
		}
	} catch (e) {
		return null;
	}
}

export function getJwtString(user: UserAccount) {
	const payload = {
		user_id: user.id,
		createdAt: new Date().getTime(),
	};

	return jwt.sign(payload, jwtSecret);
}
