import {sanitizeUser} from '../../models/user_account';
import {publicProcedure, router} from '../trpc';

export const authRouter = router({
	logOut: publicProcedure.mutation(({ctx}) => {
		ctx.res.clearCookie('session');

		return ctx.user ? sanitizeUser(ctx.user) : null;
	}),
});
