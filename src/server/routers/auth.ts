import {z} from 'zod';
import {createTRPCRouter, publicProcedure, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getJwtString} from '@/server/utils/auth';
import {checkPassword} from '@/server/utils/password';
import {
	getUserByEmail,
	getUserByUsername,
	sanitizeUser,
	createUserAccount,
	updateUserAccount,
	updateUserAccountPassword,
} from '@/server/models/user_account';
import {createSetting} from '@/server/models/settings';
import {createNotificationPreference} from '@/server/models/notification_preference';
import {UserAccount, UserAccountSchema} from '@/generated/zod';

const LoginInputSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1),
});

const SignupInputSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	username: z
		.string()
		.min(2)
		.max(18)
		.regex(/^[a-zA-Z0-9_]+$/, {
			message: 'Username can only contain letters, numbers, and underscores',
		}),
	password: z.string().min(1),
});

const ForgotPasswordInputSchema = z.object({
	email: z.string().email(),
});

const UpdateUserAccountInputSchema = z.object({
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	email: z.string().email(),
	username: z
		.string()
		.min(2)
		.max(18)
		.regex(/^[a-zA-Z0-9_]+$/, {
			message: 'Username can only contain letters, numbers, and underscores',
		}),
});

const UpdatePasswordInputSchema = z.object({
	oldPassword: z.string().min(1),
	newPassword: z.string().min(1),
});

export const authRouter = createTRPCRouter({
	login: publicProcedure
		.input(LoginInputSchema)
		.output(UserAccountSchema.omit({password: true}))
		.mutation(async ({input, ctx}) => {
			const {email, password} = input;

			const user = await getUserByEmail(email);
			if (!user) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid login'});
			}

			const goodPass = await checkPassword(password, user.password);
			if (!goodPass) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid login'});
			}

			// Set session cookie
			const jwt = getJwtString(user);
			ctx.resHeaders.set(
				'Set-Cookie',
				`session=${jwt}; Max-Age=2147483647; HttpOnly; Path=/`,
			);

			return sanitizeUser(user) as any;
		}),

	logout: publicProcedure.output(z.boolean()).mutation(async ({ctx}) => {
		// Clear session cookie
		ctx.resHeaders.set('Set-Cookie', 'session=; Max-Age=0; HttpOnly; Path=/');
		return true;
	}),

	signup: publicProcedure
		.input(SignupInputSchema)
		.output(UserAccountSchema.omit({password: true}))
		.mutation(async ({input, ctx}) => {
			const {firstName, lastName, email, username, password} = input;

			// Check if email exists
			const existingEmail = await getUserByEmail(email);
			if (existingEmail) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'That email address is already in use',
				});
			}

			// Check if username exists
			const existingUsername = await getUserByUsername(username);
			if (existingUsername && existingUsername.length) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'That username is already in use',
				});
			}

			// Get IP address for audit trail
			let ip =
				ctx.req.headers.get('x-forwarded-for') ||
				ctx.req.headers.get('x-real-ip') ||
				'unknown';
			if (Array.isArray(ip)) {
				ip = ip[0];
			} else if (ip.indexOf(',') > -1) {
				ip = ip.split(',')[0];
			}

			// Create user account
			const user = await createUserAccount(
				firstName,
				lastName,
				email,
				username,
				password,
				ip,
			);
			await createSetting(user);
			await createNotificationPreference(user);

			// Set session cookie
			const jwt = getJwtString(user);
			ctx.resHeaders.set(
				'Set-Cookie',
				`session=${jwt}; Max-Age=2147483647; HttpOnly; Path=/`,
			);

			return sanitizeUser(user) as any;
		}),

	updateUserAccount: userProcedure
		.input(UpdateUserAccountInputSchema)
		.output(UserAccountSchema.omit({password: true}))
		.mutation(async ({input, ctx}) => {
			const {firstName, lastName, email, username} = input;
			const {me} = ctx;

			// Check if email exists (and it's not the current user's email)
			if (email !== me.email) {
				const existingEmail = await getUserByEmail(email);
				if (existingEmail) {
					throw new TRPCError({
						code: 'BAD_REQUEST',
						message: 'That email address is already in use',
					});
				}
			}

			// Check if username exists (and it's not the current user's username)
			if (username !== me.username) {
				const existingUsername = await getUserByUsername(username);
				if (existingUsername && existingUsername.length) {
					throw new TRPCError({
						code: 'BAD_REQUEST',
						message: 'That username is already in use',
					});
				}
			}

			const updatedUser = await updateUserAccount(
				me.id,
				firstName,
				lastName,
				email,
				username,
			);
			return updatedUser as any;
		}),

	updatePassword: userProcedure
		.input(UpdatePasswordInputSchema)
		.output(UserAccount.omit({password: true}))
		.mutation(async ({input, ctx}) => {
			const {oldPassword, newPassword} = input;
			const {me} = ctx;

			// Get the full user record (including password) to verify old password
			const fullUser = await getUserByEmail(me.email);
			if (!fullUser) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'User not found'});
			}

			// Check old password
			const goodPass = await checkPassword(oldPassword, fullUser.password);
			if (!goodPass) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Incorrect old password'});
			}

			const updatedUser = await updateUserAccountPassword(me.id, newPassword);
			return updatedUser as any;
		}),

	// Placeholder for forgot password functionality
	forgotPassword: publicProcedure
		.input(ForgotPasswordInputSchema)
		.output(z.boolean())
		.mutation(async ({input}) => {
			// TODO: Implement forgot password functionality
			// This was likely in the old GraphQL resolver
			console.warn('Forgot password not yet implemented');
			return true;
		}),
});
