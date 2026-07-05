import {getUserAccountForAdmin} from '@/server/models/admin';
import {createBanLog, deactivateAllBanLogs} from '@/server/models/ban_log';
import {refundElo} from '@/server/models/elo_log';
import {deleteAllPublishedSolves} from '@/server/models/top_solve';
import {
	banUserAccountForever,
	banUserAccountUntil,
	deleteUserAccount,
	getUserById,
	isUserBanned,
	unbanUserAccount,
	updateUserAccountWithParams,
} from '@/server/models/user_account';
import {resolveReportsOfUserId} from '@/server/trpc/routers/report';
import {adminProcedure, router} from '@/server/trpc/trpc';
import {getPaginatedResponse} from '@/server/util/pagination/paginated_response';
import {PublicUser, publicUserSelect} from '@/types/user';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const userIdInput = z.object({
	userId: z.string(),
});

async function getUserOrThrow(userId: string) {
	const user = await getUserById(userId);
	if (!user) {
		throw new TRPCError({code: 'NOT_FOUND', message: 'User not found'});
	}

	return user;
}

// The old GraphQL layer's @Authorized([ADMIN, MOD]) ANDed the roles, so all of
// these were effectively admin-only. Kept as adminProcedure for parity.
export const adminRouter = router({
	searchUsers: adminProcedure
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
						OR: [
							{
								username: {
									contains: input.searchQuery,
									mode: 'insensitive',
								},
							},
							{
								email: {
									contains: input.searchQuery,
									mode: 'insensitive',
								},
							},
						],
					},
					select: publicUserSelect,
				},
			})
		),

	getUser: adminProcedure.input(userIdInput).query(async ({input}) => {
		const userForAdmin = await getUserAccountForAdmin(input.userId);

		if (!userForAdmin) {
			throw new TRPCError({code: 'NOT_FOUND'});
		}

		return userForAdmin;
	}),

	banUser: adminProcedure
		.input(
			z.object({
				user_id: z.string(),
				reason: z.string(),
				// Set to -1 for forever
				minutes: z.number().int(),
				delete_published_solves: z.boolean(),
				cheating_in_1v1: z.boolean(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const targetUser = await getUserOrThrow(input.user_id);

			if (await isUserBanned(targetUser, true)) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'This user is already banned'});
			}

			let forever = false;
			let min = -1;
			let res;
			if (input.minutes > 0) {
				min = input.minutes;
				res = await banUserAccountUntil(targetUser, input.minutes);
			} else {
				forever = true;
				res = await banUserAccountForever(targetUser);
			}

			if (input.delete_published_solves) {
				await deleteAllPublishedSolves(targetUser);
			}

			if (input.cheating_in_1v1) {
				await refundElo(targetUser.id);
			}

			await resolveReportsOfUserId(targetUser.id);
			const banLog = await createBanLog(ctx.user, targetUser, input.reason, min, forever, res.banned_until);
			return {id: banLog.id};
		}),

	unbanUser: adminProcedure.input(userIdInput).mutation(async ({input}) => {
		const targetUser = await getUserOrThrow(input.userId);

		await unbanUserAccount(targetUser);
		await deactivateAllBanLogs(input.userId);

		return true;
	}),

	setVerifiedStatus: adminProcedure
		.input(
			userIdInput.extend({
				verified: z.boolean(),
			})
		)
		.mutation(async ({input}) => {
			const targetUser = await getUserOrThrow(input.userId);

			await updateUserAccountWithParams(targetUser.id, {
				verified: input.verified,
			});

			return true;
		}),

	deleteUser: adminProcedure.input(userIdInput).mutation(async ({input}) => {
		const targetUser = await getUserOrThrow(input.userId);
		await deleteUserAccount(targetUser);

		return true;
	}),
});
