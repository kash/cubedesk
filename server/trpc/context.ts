import type {CreateExpressContextOptions} from '@trpc/server/adapters/express';
import requestIp from 'request-ip';
import {getPrisma} from '../database';
import {getMe} from '../util/auth';
import type {InternalUserAccount} from '../schemas/UserAccount.schema';
import {TRPCError} from '@trpc/server';
import {ErrorMessage} from '../constants/errors';

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
