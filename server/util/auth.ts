import jwt from 'jsonwebtoken';
import {getUserById, getUserByIdWithProfile, updateUserAccountWithParams} from '../models/user_account';
import {getOrCreateUserProfile} from '../models/profile';
import {deactivateAllBanLogs} from '../models/ban_log';
import GraphQLError from './graphql_error';
import {Request} from 'express-serve-static-core';
import {UserAccount} from '../schemas/UserAccount.schema';
import {ErrorCode} from '../constants/errors';

const jwtSecret = (process as any).env.JWT_SECRET as string;

export async function getMe(req: Request) {
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

export async function getMeWithCookieString(cookies: string | any): Promise<UserAccount> {
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

export function checkLoggedIn(user: UserAccount, admin: boolean = false) {
	if (!user) {
		throw new GraphQLError(ErrorCode.UNAUTHENTICATED, 'You must be logged in to perform this action');
	}

	if (admin && !user.admin) {
		throw new GraphQLError(ErrorCode.FORBIDDEN, 'You do not have permission to perform this action');
	}
}

export function getJwtString(user: UserAccount) {
	const payload = {
		user_id: user.id,
		createdAt: new Date().getTime(),
	};

	return jwt.sign(payload, jwtSecret);
}
