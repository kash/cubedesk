import {Prisma} from '@/generated/prisma/client';
import {MetricLogType} from '@/server/@types/enums';
import {getPrisma} from '@/server/database';
import {getActiveBanLogsByUserId} from '@/server/models/ban_log';
import {createMetricLog} from '@/server/models/metric_log';
import {getLocationFromIp} from '@/server/services/ipstack';
import {logger} from '@/server/services/logger';
import {hashPassword} from '@/server/util/password';
import {
	InternalUserAccount,
	PublicUserAccount,
	UserAccount,
} from '@/types/user';
import {publicUserSelect} from '@/types/user';
import dayjs from 'dayjs';
import {v4 as uuid} from 'uuid';

// Reuses publicUserSelect so integrations stay limited to id/service_name —
// full rows carry OAuth tokens, and objects fetched with this include are sent
// to clients over socket.io (matches) and tRPC, where nothing masks fields.
export const publicUserInclude = {
	select: publicUserSelect,
};

export function sanitizeUser(user: InternalUserAccount, forPublic = false): UserAccount | PublicUserAccount {
	return sanitizeUsers([user], forPublic)[0];
}

// Always call this method before returning any user to the frontend
function sanitizeUsers(users: InternalUserAccount[], forPublic = false): Array<UserAccount | PublicUserAccount> {
	function sanitizeUser(user: InternalUserAccount): UserAccount | PublicUserAccount {
		if (!user) {
			return user;
		}

		// User's password should never go to the front-end
		delete (user as Partial<InternalUserAccount>).password;
		delete (user as Partial<InternalUserAccount>).join_ip;

		if (forPublic) {
			return <PublicUserAccount>{
				id: user.id,
				username: user.username,
				banned_until: user.banned_until,
				banned_forever: user.banned_forever,
				admin: user.admin,
				created_at: user.created_at,
				profile: user.profile,
				verified: user.verified,
				integrations: user.integrations,
				badges: user.badges,
			};
		}

		return user;
	}

	return users.map((user) => sanitizeUser({...user}));
}

export function getUserById(id: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			id,
		},
	});
}

// Relations loaded alongside the full user row for internal use. bans is
// filtered to active ones only.
const internalUserInclude = {
	timer_background: true,
	integrations: true,
	elo_rating: true,
	profile: {
		include: {
			pfp_image: true,
		},
	},
	bans: {
		where: {
			active: true,
		},
	},
} satisfies Prisma.UserAccountInclude;

// Full user row (password hash + integration OAuth tokens) with internal
// relations — server-side only, never send to a client without sanitizing
export type InternalUser = Prisma.UserAccountGetPayload<{include: typeof internalUserInclude}>;

export function getUserByIdWithProfile(id: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			id,
		},
		include: internalUserInclude,
	});
}

// Returns the FULL row (password hash + integration OAuth tokens) — never
// send this to a client without sanitizing/narrowing first
export function getUserByEmail(email: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			email: email.toLowerCase(),
		},
		include: {
			integrations: true,
		},
	});
}

export function getUserByUsername(username: string) {
	return getPrisma().userAccount.findMany({
		where: {
			username: {
				equals: username,
				mode: 'insensitive',
			},
		},
		include: {
			integrations: true,
		},
	});
}

export async function updateUserAccountPassword(userId: string, password: string) {
	const hashedPassword = await hashPassword(password);

	return getPrisma().userAccount.update({
		where: {
			id: userId,
		},
		data: {
			password: hashedPassword,
		},
	});
}

export async function banUserAccountUntil(user: UserAccount, minutes: number) {
	const until = dayjs().add(minutes, 'm').toDate();

	return updateUserAccountWithParams(user.id, {
		banned_until: until,
	});
}

export async function banUserAccountForever(user: UserAccount) {
	return updateUserAccountWithParams(user.id, {
		banned_forever: true,
	});
}

export async function unbanUserAccount(user: UserAccount) {
	return updateUserAccountWithParams(user.id, {
		banned_forever: false,
		banned_until: null,
	});
}

export async function isUserBanned(user: UserAccount, checkLogs = false): Promise<boolean> {
	let bannedInLogs = false;
	if (checkLogs) {
		const logs = await getActiveBanLogsByUserId(user.id);
		bannedInLogs = logs && !!logs.length;
	}
	return user.banned_forever || !!user.banned_until || bannedInLogs;
}

export async function updateUserAccount(
	userId: string,
	firstName: string,
	lastName: string,
	email: string,
	username: string
) {
	return updateUserAccountWithParams(userId, {
		id: userId,
		first_name: firstName,
		last_name: lastName,
		email: email.toLowerCase(),
		username,
	});
}

export function updateUserAccountWithParams(userId: string, params: Prisma.UserAccountUncheckedUpdateInput) {
	return getPrisma().userAccount.update({
		where: {
			id: userId,
		},
		data: params,
	});
}

export async function deleteUserAccount(user: UserAccount): Promise<UserAccount | null> {
	const txs = [
		createMetricLog(user, MetricLogType.DELETE_USER_ACCOUNT),
		getPrisma().userAccount.delete({
			where: {
				id: user.id,
			},
		}),
	];

	try {
		await getPrisma().$transaction(txs);
	} catch (e) {
		if (e instanceof Error) {
			throw new Error((e as Error).message);
		}

		return null;
	}

	return null;
}

export async function createUserAccount(
	firstName: string,
	lastName: string,
	email: string,
	username: string,
	password: string,
	ip: string | undefined
) {
	const user = await getUserByEmail(email);
	if (user != null) {
		throw new Error('An account with this email already exists');
	}

	let country = 'NONE';
	try {
		const location = await getLocationFromIp(ip ?? '');
		country = location.country_iso || 'NONE';
	} catch (e) {
		logger.error('Could not get location for IP', {
			ip,
			error: e,
		});
	}

	const hashedPassword = await hashPassword(password);

	return getPrisma().userAccount.create({
		data: {
			id: uuid(),
			first_name: firstName,
			username,
			last_name: lastName,
			email: email.toLowerCase(),
			password: hashedPassword,
			join_ip: ip || '',
			join_country: country,
		},
	});
}
