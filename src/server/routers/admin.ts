import {ErrorCode} from '@/server/constants/errors';
import {getUserAccountForAdmin} from '@/server/models/admin';
import {createBanLog, deactivateAllBanLogs} from '@/server/models/ban_log';
import {refundElo} from '@/server/models/elo_log';
import {deleteAllPublishedSolves} from '@/server/models/top_solve';
import {
	banUserAccountForever,
	banUserAccountUntil,
	deleteUserAccount,
	getUserById,
	getUserByIdOrThrow404,
	isUserBanned,
	publicUserInclude,
	unbanUserAccount,
	updateUserAccountWithParams,
} from '@/server/models/user_account';
import {resolveReportsOfUserId} from '@/server/resolvers/Report.resolver';
import {adminProcedure, createTRPCRouter} from '@/server/trpc';
import {getPaginatedResponse} from '@/server/utils/pagination';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

// Input schema for pagination and search
const paginationArgsInput = z.object({
	take: z.number(),
	skip: z.number(),
	searchQuery: z.string().optional(),
	desc: z.boolean().optional(),
	orderBy: z.string().optional(),
});

// Input schema for banning users
const banUserInput = z.object({
	user_id: z.string(),
	minutes: z.number(),
	reason: z.string(),
	delete_published_solves: z.boolean(),
	cheating_in_1v1: z.boolean(),
});

export const adminRouter = createTRPCRouter({
	// Search for users (admin view)
	adminUserSearch: adminProcedure.input(paginationArgsInput).query(async ({input}) => {
		const requestInput = {
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
				...publicUserInclude,
			},
		};

		return getPaginatedResponse(requestInput);
	}),

	// Get a user account with admin details
	getUserAccountForAdmin: adminProcedure
		.input(z.object({userId: z.string()}))
		.query(async ({input}) => {
			const userForAdmin = await getUserAccountForAdmin(input.userId);

			if (!userForAdmin) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: ErrorCode.NOT_FOUND,
				});
			}

			return userForAdmin;
		}),

	// Ban a user
	banUserAccount: adminProcedure.input(banUserInput).mutation(async ({ctx, input}) => {
		const admin = ctx.me;
		const {
			user_id: targetUserId,
			minutes,
			reason,
			delete_published_solves: deletePublishedSolves,
			cheating_in_1v1: cheatingIn1v1,
		} = input;

		const targetUser = await getUserByIdOrThrow404(targetUserId);

		if (await isUserBanned(targetUser, true)) {
			throw new TRPCError({
				code: 'FORBIDDEN',
				message: 'This user is already banned',
			});
		}

		let forever = false;
		let min = -1;
		let res;
		if (minutes > 0) {
			min = minutes;
			res = await banUserAccountUntil(targetUser, minutes);
		} else {
			forever = true;
			res = await banUserAccountForever(targetUser);
		}

		if (deletePublishedSolves) {
			await deleteAllPublishedSolves(targetUser);
		}

		if (cheatingIn1v1) {
			await refundElo(targetUser.id);
		}

		// TODO: Update this when Report resolver is migrated to tRPC
		await resolveReportsOfUserId({user: admin}, targetUser.id);

		return createBanLog(admin, targetUser, reason, min, forever, res.banned_until);
	}),

	// Unban a user
	unbanUserAccount: adminProcedure
		.input(z.object({userId: z.string()}))
		.mutation(async ({input}) => {
			const targetUser = await getUserByIdOrThrow404(input.userId);

			await unbanUserAccount(targetUser);
			await deactivateAllBanLogs(input.userId);

			return getUserById(input.userId);
		}),

	// Set verified status for a user
	setVerifiedStatus: adminProcedure
		.input(
			z.object({
				userId: z.string(),
				verified: z.boolean(),
			}),
		)
		.mutation(async ({input}) => {
			const targetUser = await getUserByIdOrThrow404(input.userId);

			await updateUserAccountWithParams(targetUser.id, {
				verified: input.verified,
			});

			return getUserById(input.userId);
		}),

	// Delete a user account (admin only)
	adminDeleteUserAccount: adminProcedure
		.input(z.object({userId: z.string()}))
		.mutation(async ({input}) => {
			const targetUser = await getUserByIdOrThrow404(input.userId);
			await deleteUserAccount(targetUser);

			return targetUser;
		}),
});
