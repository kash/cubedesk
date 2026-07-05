import {initTRPC, TRPCError} from '@trpc/server';
import type {TRPCContext} from './context';

const t = initTRPC.context<TRPCContext>().create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(({ctx, next}) => {
	if (!ctx.user) {
		throw new TRPCError({
			code: 'UNAUTHORIZED',
			message: 'You must be logged in to perform this action',
		});
	}

	return next({
		ctx: {
			...ctx,
			user: ctx.user,
		},
	});
});

export const modProcedure = protectedProcedure.use(({ctx, next}) => {
	if (!ctx.user.mod && !ctx.user.admin) {
		throw new TRPCError({code: 'FORBIDDEN'});
	}

	return next();
});

export const adminProcedure = protectedProcedure.use(({ctx, next}) => {
	if (!ctx.user.admin) {
		throw new TRPCError({code: 'FORBIDDEN'});
	}

	return next();
});
