import {getLocationFromIp} from '../services/ipstack';
import {v4 as uuid} from 'uuid';
import {hashPassword} from '../util/password';
import {Prisma} from '@prisma/client';
import {getPrisma} from '../database';
import dayjs from 'dayjs';
import {createMetricLog} from './metric_log';
import {MetricLogType} from '../@types/enums';
import {
	InternalUserAccount,
	PublicUserAccount,
	UserAccount,
} from '../schemas/UserAccount.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {logger} from '../services/logger';
import {getActiveBanLogsByUserId} from './ban_log';

export const publicUserInclude = {
	select: {
		id: true,
		admin: true,
		mod: true,
		created_at: true,
		username: true,
		verified: true,
		is_pro: true,
		banned_forever: true,
		banned_until: true,
		integrations: true,
		elo_rating: true,
		profile: {
			include: {
				pfp_image: true,
			},
		},
	},
};

export function sanitizeUser(user: InternalUserAccount, forPublic = false): UserAccount | PublicUserAccount {
	return sanitizeUsers([user], forPublic)[0];
}

// Always call this method before returning any user to the frontend
export function sanitizeUsers(users: InternalUserAccount[], forPublic = false): Array<UserAccount | PublicUserAccount> {
	function sanitizeUser(user: InternalUserAccount): UserAccount | PublicUserAccount {
		if (!user) {
			return user;
		}

		// User's password should never go to the front-end
		delete user.password;
		delete user.join_ip;
		delete user.stripe_customer_id;

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

export async function getUserByIdOrThrow404(id: string) {
	const user = await getUserById(id);
	if (!user) {
		throw new GraphQLError(ErrorCode.NOT_FOUND, `Could not find user with ID ${id}`);
	}
	return user;
}

export function getUserByStripeCustomerId(stripeCustomerId: string): Promise<InternalUserAccount> {
	return getPrisma().userAccount.findUnique({
		where: {
			stripe_customer_id: stripeCustomerId,
		},
	});
}

export function getUserById(id: string): Promise<InternalUserAccount> {
	return getPrisma().userAccount.findUnique({
		where: {
			id,
		},
	});
}

export async function getUserByIdWithProfile(
	id: string,
	includeBans: boolean = false
): Promise<InternalUserAccount | null> {
	const include: any = {
		timer_background: true,
		integrations: true,
		elo_rating: true,
		profile: {
			include: {
				pfp_image: true,
			},
		},
	};

	if (includeBans) {
		include.bans = {
			where: {
				active: true,
			},
		};
	}

	return await getPrisma().userAccount.findUnique({
		where: {
			id,
		},
		include,
	});
}

export async function adminUserSearch(page: number, query: string): Promise<UserAccount[]> {
	const pageSize = 50;

	let where = {};
	if (query) {
		where = {
			OR: [
				{
					username: {
						contains: query,
						mode: 'insensitive',
					},
				},
				{
					email: {
						contains: query,
						mode: 'insensitive',
					},
				},
			],
		};
	}

	return await getPrisma().userAccount.findMany({
		where,
		orderBy: {
			created_at: 'desc',
		},
		include: {
			integrations: true,
			badges: {
				include: {
					badge_type: true,
				},
			},
		},
		skip: page * pageSize,
		take: pageSize,
	});
}

export async function getUserByEmail(email: string): Promise<UserAccount | null> {
	return await getPrisma().userAccount.findUnique({
		where: {
			email: email.toLowerCase(),
		},
		include: {
			integrations: true,
		},
	});
}

export async function getUserByUsername(username: string): Promise<UserAccount[]> {
	return await getPrisma().userAccount.findMany({
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

export async function updateUserAccountPassword(userId: string, password: string): Promise<UserAccount> {
	const hashedPassword = await hashPassword(password);

	return await getPrisma().userAccount.update({
		where: {
			id: userId,
		},
		data: {
			password: hashedPassword,
		},
	});
}

export async function banUserAccountUntil(user: UserAccount, minutes: number): Promise<UserAccount> {
	const until = dayjs().add(minutes, 'm').toDate();

	return updateUserAccountWithParams(user.id, {
		banned_until: until,
	});
}

export async function banUserAccountForever(user: UserAccount): Promise<UserAccount> {
	return updateUserAccountWithParams(user.id, {
		banned_forever: true,
	});
}

export async function unbanUserAccount(user: UserAccount): Promise<UserAccount> {
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
): Promise<UserAccount> {
	return updateUserAccountWithParams(userId, {
		id: userId,
		first_name: firstName,
		last_name: lastName,
		email: email.toLowerCase(),
		username,
	});
}

export async function updateUserAccountWithParams(
	userId: string,
	params: Prisma.UserAccountUncheckedUpdateInput
): Promise<UserAccount> {
	return await getPrisma().userAccount.update({
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
		const location = await getLocationFromIp(ip);
		country = location.country_iso || 'NONE';
	} catch (e) {
		logger.error('Could not get location for IP', {
			ip,
			error: e,
		});
	}

	const hashedPassword = await hashPassword(password);

	return await getPrisma().userAccount.create({
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
