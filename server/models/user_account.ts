import {Prisma} from '@/generated/prisma/client';
import {MetricLogType} from '@/server/@types/enums';
import {getPrisma} from '@/server/database';
import {getActiveBanLogsByUserId} from '@/server/models/ban_log';
import {createMetricLog} from '@/server/models/metric_log';
import {getLocationFromIp} from '@/server/services/ipstack';
import {logger} from '@/server/services/logger';
import {hashPassword} from '@/server/util/password';
import {meUserSelect, publicUserSelect, UserAccount} from '@/types/user';
import dayjs from 'dayjs';
import {v4 as uuid} from 'uuid';

// Reuses publicUserSelect so integrations stay limited to id/service_name —
// full rows carry OAuth tokens, and objects fetched with this include are sent
// to clients over socket.io (matches) and tRPC, where nothing masks fields.
export const publicUserInclude = {
	select: publicUserSelect,
};

export function getUserById(id: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			id,
		},
	});
}

export async function getAuthUserById(id: string) {
	const user = await getPrisma().userAccount.findUnique({
		where: {
			id,
		},
		include: {
			bans: {
				where: {
					active: true,
				},
				select: {
					id: true,
				},
				take: 1,
			},
		},
	});

	if (!user) {
		return null;
	}

	const {bans, ...account} = user;
	return {account, hasActiveBan: bans.length > 0};
}

export function getClientMeById(id: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			id,
		},
		select: {
			...meUserSelect,
			bans: {
				where: {
					active: true,
				},
			},
		},
	});
}

// Returns the FULL row (password hash) — never send this to a client
// without sanitizing/narrowing first
export function getUserByEmail(email: string) {
	return getPrisma().userAccount.findUnique({
		where: {
			email: email.toLowerCase(),
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

export async function updateUserAccount(userId: string, email: string, username: string) {
	return updateUserAccountWithParams(userId, {
		id: userId,
		email: email.toLowerCase(),
		username,
	});
}

export function updateUserAccountWithParams(
	userId: string,
	params: Prisma.UserAccountUncheckedUpdateInput,
) {
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
	email: string,
	username: string,
	password: string,
	ip: string | undefined,
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
			username,
			email: email.toLowerCase(),
			password: hashedPassword,
			join_ip: ip || '',
			join_country: country,
		},
	});
}

/**
 * Clients keep a local copy of their solves and sessions, which they trust only while its hash matches this one.
 * Changing it makes every client refetch on its next load, so call this after changing solves or sessions on the
 * server without the client knowing (bulk actions, imports).
 */
export function bumpOfflineHash(db: Pick<Prisma.TransactionClient, 'userAccount'>, userId: string) {
	return db.userAccount.update({
		where: {id: userId},
		data: {offline_hash: uuid()},
		select: {id: true},
	});
}

/**
 * Sets the offline hash to `hash` only if it is currently `expected`, so a client can only claim its local copy is
 * current if no other client changed data since it last synced. When the check fails the hash is still changed, so
 * other clients learn about this client's change, but the caller must treat its own copy as stale.
 */
export async function swapOfflineHash(
	userId: string,
	hash: string,
	expected: string | null,
): Promise<boolean> {
	const swapped = await getPrisma().userAccount.updateMany({
		where: {id: userId, offline_hash: expected},
		data: {offline_hash: hash},
	});

	if (swapped.count === 1) {
		return true;
	}

	await getPrisma().userAccount.update({
		where: {id: userId},
		data: {offline_hash: hash},
		select: {id: true},
	});
	return false;
}
