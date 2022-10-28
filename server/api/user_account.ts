import GraphQLError from '../util/graphql_error';
import {
	createUserAccount,
	deleteUserAccount,
	getUserByEmail,
	getUserByIdWithProfile,
	getUserByUsername,
	sanitizeUser,
	updateUserAccount,
	updateUserAccountPassword,
} from '../models/user_account';
import {createSetting} from '../models/settings';
import {checkLoggedIn, getJwtString} from '../util/auth';
import {checkPassword} from '../util/password';
import {createNotificationPreference} from '../models/notification_preference';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {ErrorCode} from '../constants/errors';

export const gqlQuery = `
	me: UserAccount!
`;

export const gqlMutation = `
	createUserAccount(first_name: String!, last_name: String!, email: String!, username: String!, password: String!): PublicUserAccount
	updateUserAccount(first_name: String!, last_name: String!, email: String!, username: String!): PublicUserAccount
	updateUserPassword(old_password: String!, new_password: String!): PublicUserAccount
	deleteUserAccount: PublicUserAccount
`;

export const queryActions = {
	me: async (a: any, b: any, {user}: GraphQLContext) => {
		return await getUserByIdWithProfile(user.id);
	},
};

type CreateAccountInput = {
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	password: string;
};

type UpdatePasswordInput = {
	old_password: string;
	new_password: string;
};

export const mutateActions = {
	createUserAccount: async (
		_: any,
		{first_name, last_name, email, username, password}: CreateAccountInput,
		{req, res}: GraphQLContext
	) => {
		let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

		const newEmail = await getUserByEmail(email);
		if (newEmail) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'That email address is already in use');
		}

		if (username.length < 2) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username must be at least 3 characters long');
		}

		if (username.length > 18) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username cannot be longer than 15 characters');
		}

		if (!/^[a-zA-Z0-9_]+$/.test(username)) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username can only contain letters, numbers, and underscores');
		}

		const newUsername = await getUserByUsername(username);
		if (newUsername && newUsername.length) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'That username is already in use');
		}

		if (Array.isArray(ip)) {
			ip = ip[0];
		} else if (ip.indexOf(',') > -1) {
			ip = ip.split(',')[0];
		}

		const user = await createUserAccount(first_name, last_name, email, username, password, ip);
		await createSetting(user);
		await createNotificationPreference(user);

		const jwt = getJwtString(user);
		res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

		return sanitizeUser(user);
	},

	updateUserAccount: async (
		_: any,
		{first_name, last_name, email, username}: CreateAccountInput,
		{user}: GraphQLContext
	) => {
		checkLoggedIn(user);

		if (!first_name || !last_name || !email || !username) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Please fill out all of the required fields');
		}

		if (email !== user.email) {
			const newEmail = await getUserByEmail(email);
			if (newEmail) {
				throw new GraphQLError(ErrorCode.BAD_INPUT, 'That email address is already in use');
			}
		}

		if (username.length < 2) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username must be at least 3 characters long');
		}

		if (username.length > 18) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username cannot be longer than 15 characters');
		}

		if (!/^[a-zA-Z0-9_]+$/.test(username)) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Username can only contain letters, numbers, and underscores');
		}

		if (username !== user.username) {
			const newUsername = await getUserByUsername(username);
			if (newUsername && newUsername.length) {
				throw new GraphQLError(ErrorCode.BAD_INPUT, 'That username is already in use');
			}
		}

		return await updateUserAccount(user.id, first_name, last_name, email, username);
	},

	updateUserPassword: async (_: any, {old_password, new_password}: UpdatePasswordInput, {user}: GraphQLContext) => {
		checkLoggedIn(user);

		const goodPass = await checkPassword(old_password, user.password);
		if (!goodPass) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Incorrect old password');
		}

		return await updateUserAccountPassword(user.id, new_password);
	},

	deleteUserAccount: async (_: any, params: any, {user}: GraphQLContext) => {
		checkLoggedIn(user);

		try {
			return await deleteUserAccount(user);
		} catch (e) {
			throw new GraphQLError(ErrorCode.INTERNAL_SERVER_ERROR, 'Something went wrong on our side');
		}
	},
};
