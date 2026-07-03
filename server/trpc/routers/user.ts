import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {protectedProcedure, publicProcedure, router} from '../trpc';
import {getPaginatedResponse} from '../../util/pagination/paginated_response';
import {publicUserSelect, meUserSelect, PublicUser} from '@/types/user';
import {
	createUserAccount,
	deleteUserAccount,
	getUserByEmail,
	getUserByUsername,
	updateUserAccount,
	updateUserAccountPassword,
} from '../../models/user_account';
import {createSetting} from '../../models/settings';
import {createNotificationPreference} from '../../models/notification_preference';
import {getJwtString} from '../../util/auth';
import {checkPassword} from '../../util/password';

async function validateUsername(username: string, currentUsername?: string) {
	if (username.length < 2) {
		throw new TRPCError({code: 'BAD_REQUEST', message: 'Username must be at least 3 characters long'});
	}

	if (username.length > 18) {
		throw new TRPCError({code: 'BAD_REQUEST', message: 'Username cannot be longer than 15 characters'});
	}

	if (!/^[a-zA-Z0-9_]+$/.test(username)) {
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message: 'Username can only contain letters, numbers, and underscores',
		});
	}

	if (username !== currentUsername) {
		const existing = await getUserByUsername(username);
		if (existing && existing.length) {
			throw new TRPCError({code: 'BAD_REQUEST', message: 'That username is already in use'});
		}
	}
}

async function validateEmail(email: string, currentEmail?: string) {
	if (email !== currentEmail) {
		const existing = await getUserByEmail(email);
		if (existing) {
			throw new TRPCError({code: 'BAD_REQUEST', message: 'That email address is already in use'});
		}
	}
}

const accountInput = z.object({
	first_name: z.string().min(1, 'Please fill out all of the required fields'),
	last_name: z.string().min(1, 'Please fill out all of the required fields'),
	email: z.string().min(1, 'Please fill out all of the required fields'),
	username: z.string().min(1, 'Please fill out all of the required fields'),
});

export const userRouter = router({
	me: publicProcedure.query(({ctx}) => {
		if (!ctx.user) {
			return null;
		}

		return ctx.prisma.userAccount.findUnique({
			where: {
				id: ctx.user.id,
			},
			select: meUserSelect,
		});
	}),

	create: publicProcedure
		.input(
			accountInput.extend({
				password: z.string().min(1),
			})
		)
		.mutation(async ({ctx, input}) => {
			await validateEmail(input.email);
			await validateUsername(input.username);

			const user = await createUserAccount(
				input.first_name,
				input.last_name,
				input.email,
				input.username,
				input.password,
				ctx.ipAddress || ''
			);
			await createSetting(user);
			await createNotificationPreference(user);

			const jwt = getJwtString(user);
			ctx.res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

			// Raw rows carry the password hash; the client only needs the id
			return {id: user.id};
		}),

	update: protectedProcedure.input(accountInput).mutation(async ({ctx, input}) => {
		await validateEmail(input.email, ctx.user.email);
		await validateUsername(input.username, ctx.user.username);

		const updated = await updateUserAccount(ctx.user.id, input.first_name, input.last_name, input.email, input.username);

		return {id: updated.id};
	}),

	updatePassword: protectedProcedure
		.input(
			z.object({
				old_password: z.string(),
				new_password: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const goodPass = await checkPassword(input.old_password, ctx.user.password);
			if (!goodPass) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Incorrect old password'});
			}

			const updated = await updateUserAccountPassword(ctx.user.id, input.new_password);

			return {id: updated.id};
		}),

	deleteAccount: protectedProcedure.mutation(async ({ctx}) => {
		try {
			return await deleteUserAccount(ctx.user);
		} catch (e) {
			throw new TRPCError({code: 'INTERNAL_SERVER_ERROR', message: 'Something went wrong on our side'});
		}
	}),

	updateOfflineHash: protectedProcedure
		.input(
			z.object({
				hash: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			await ctx.prisma.userAccount.update({
				where: {
					id: ctx.user.id,
				},
				data: {
					offline_hash: input.hash,
				},
			});

			return input.hash;
		}),

	search: publicProcedure
		.input(
			z.object({
				page: z.number().int().min(0).default(0),
				pageSize: z.number().int().min(1).max(100).default(25),
				searchQuery: z.string().max(250).default(''),
			})
		)
		.query(({input}) =>
			getPaginatedResponse<PublicUser>({
				paginationArgs: input,
				tableName: 'userAccount',
				prismaPayload: {
					where: {
						username: {
							contains: input.searchQuery,
							mode: 'insensitive',
						},
					},
					select: publicUserSelect,
				},
			})
		),
});
