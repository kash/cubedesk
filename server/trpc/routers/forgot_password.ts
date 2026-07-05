import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {claimForgotPassword, createForgotPassword, getForgotPassword} from '@/server/models/forgot_password';
import {getUserByEmail, updateUserAccountPassword} from '@/server/models/user_account';
import {sendEmailWithTemplate} from '@/server/services/ses';
import {getJwtString} from '@/server/util/auth';
import {publicProcedure, router} from '@/server/trpc/trpc';

function forgotPasswordLessThan15Min(fp: {created_at: Date | string}) {
	const createdAt = new Date(fp.created_at);
	const FIFTEEN_MIN = 15 * 60 * 1000;

	return Date.now() - createdAt.getTime() < FIFTEEN_MIN;
}

const emailInput = z.object({
	email: z.string(),
});

const codeInput = emailInput.extend({
	code: z.string(),
});

export const forgotPasswordRouter = router({
	// Always succeeds so the response doesn't reveal whether the email exists
	sendCode: publicProcedure.input(emailInput).mutation(async ({input}) => {
		const user = await getUserByEmail(input.email);

		if (user) {
			const fp = await createForgotPassword(user);

			sendEmailWithTemplate(user, 'Reset Your CubeDesk Password', 'forgot_password', {
				code: fp.code,
				message: 'Please use the code below to reset your password:',
			});
		}
	}),

	checkCode: publicProcedure.input(codeInput).mutation(async ({input}): Promise<boolean> => {
		const user = await getUserByEmail(input.email);

		if (!user) {
			return false;
		}

		const fp = (await getForgotPassword(user))[0];

		return Boolean(fp && fp.code === input.code && forgotPasswordLessThan15Min(fp));
	}),

	updatePassword: publicProcedure
		.input(
			codeInput.extend({
				password: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const user = await getUserByEmail(input.email);

			if (!user) {
				return null;
			}

			const fp = (await getForgotPassword(user))[0];
			const passed = fp && fp.code === input.code && forgotPasswordLessThan15Min(fp);

			if (!passed) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid code'});
			}

			await claimForgotPassword(fp);
			await updateUserAccountPassword(user.id, input.password);

			const jwt = getJwtString(user);
			ctx.res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

			// The row from getUserByEmail includes full integrations (OAuth
			// tokens) and the password hash — never return it
			return {id: user.id};
		}),
});
