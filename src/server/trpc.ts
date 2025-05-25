import {getAuthedProps} from '@/server/utils/auth';
import {USER_SESSION_COOKIE} from '@/server/utils/consts';
import {initTRPC, TRPCError} from '@trpc/server';
import {cookies} from 'next/headers';
import superjson from 'superjson';
import {ZodError} from 'zod';
import { getPrismaClient } from "@/server/services/database";
import { UserAccount } from "@/generated/zod";

export type TrpcContext = {
	req: Request;
	resHeaders: Headers;
	me?: Omit<UserAccount, 'password'>;
};

export const createTRPCContext = async (opts: TrpcContext): Promise<TrpcContext> => {
    const me = await getMe();

	return {
		...opts,
		me,
	};
};

const t = initTRPC.context<TrpcContext>().create({
	transformer: superjson,
	errorFormatter({shape, error}) {
		return {
			...shape,
			data: {
				...shape.data,
				zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
			},
		};
	},
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;
export const createTRPCMiddleware = t.middleware;

export const publicProcedure = t.procedure;

export const userProcedure = t.procedure.use(async (opts) => {
	const me = opts.ctx.me;

	if (!me) {
		throw new TRPCError({code: 'UNAUTHORIZED'});
	}

	return opts.next({
		ctx: {
			me,
		},
	});
});

export const proProcedure = t.procedure.use(async (opts) => {
	const me = opts.ctx.me;

	if (!me || !me.is_pro) {
		throw new TRPCError({code: 'UNAUTHORIZED'});
	}

	return opts.next({
		ctx: {
			me,
		},
	});
});

export const modProcedure = t.procedure.use(async (opts) => {
	const me = opts.ctx.me;

	if (!me || (!me.mod && !me.admin)) {
		throw new TRPCError({code: 'UNAUTHORIZED'});
	}

	return opts.next({
		ctx: {
			me,
		},
	});
});

export const adminProcedure = t.procedure.use(async (opts) => {
	const me = opts.ctx.me;

	if (!me || !me.admin) {
		throw new TRPCError({code: 'UNAUTHORIZED'});
	}

	return opts.next({
		ctx: {
			me,
		},
	});
});

async function getMe() {
	const sessionCookie = (await cookies()).get(USER_SESSION_COOKIE);
	const prisma = getPrismaClient();

	return getAuthedProps(sessionCookie?.value, (id) =>
		prisma.userAccount.findUnique({
			omit: {
				password: true,
			},
			where: {
				id,
			},
		}),
	);
}
