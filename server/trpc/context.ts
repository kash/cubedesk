import type {InternalUserAccount} from '@/types/user';
import type {CreateExpressContextOptions} from '@trpc/server/adapters/express';
import {TRPCError} from '@trpc/server';
import requestIp from 'request-ip';
import {ErrorMessage} from '@/server/constants/errors';
import {getPrisma} from '@/server/database';
import {getMe} from '@/server/util/auth';

export async function createTRPCContext({req, res}: CreateExpressContextOptions) {
	const user = await getMe(req);
	const ipAddress = requestIp.getClientIp(req);

	if (user && (user.banned_until || user.banned_forever)) {
		throw new TRPCError({
			code: 'FORBIDDEN',
			message: ErrorMessage.BANNED,
		});
	}

	return {
		user,
		ipAddress,
		req,
		res,
		prisma: getPrisma(),
	};
}

export type TRPCContext = Awaited<ReturnType<typeof createTRPCContext>> & {
	user: InternalUserAccount | null;
};
