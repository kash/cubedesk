import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {getUserByEmail, sanitizeUser} from '../../models/user_account';
import {getJwtString} from '../../util/auth';
import {checkPassword} from '../../util/password';
import {publicProcedure, router} from '../trpc';

export const authRouter = router({
	logIn: publicProcedure
		.input(
			z.object({
				email: z.string(),
				password: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const user = await getUserByEmail(input.email);
			if (!user) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid login'});
			}

			const goodPass = await checkPassword(input.password, user.password);
			if (!goodPass) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Invalid login'});
			}

			const jwt = getJwtString(user);
			ctx.res.cookie('session', jwt, {maxAge: 2147483647, httpOnly: true});

			// The row from getUserByEmail includes full integrations (OAuth
			// tokens) and the password hash — never return it. The client only
			// needs the id.
			return {id: user.id};
		}),

	logOut: publicProcedure.mutation(({ctx}) => {
		ctx.res.clearCookie('session');

		return ctx.user ? sanitizeUser(ctx.user) : null;
	}),
});
