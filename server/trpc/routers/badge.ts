import {
	addBadgeToUser,
	createBadgeType,
	deleteBadgeFromUser,
	deleteBadgeType,
	editBadgeType,
	getAllBadgeTypes,
	getBadgeTypeById,
	userHasBadge,
} from '@/server/models/badge';
import {getUserById} from '@/server/models/user_account';
import {adminProcedure, router} from '@/server/trpc/trpc';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';

const badgeTypeInput = z.object({
	name: z.string().min(1).max(50),
	description: z.string().max(200),
	priority: z.number().int().min(0).max(100),
	color: z.string().length(7).regex(/^#/, 'Color must be a valid hex'),
});

const userBadgeInput = z.object({
	badgeTypeId: z.string(),
	userId: z.string(),
});

async function getUserAndBadgeType(userId: string, badgeTypeId: string, mustHaveBadge: boolean) {
	const badgeType = await getBadgeTypeById(badgeTypeId);
	if (!badgeType) {
		throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find badge type with that ID'});
	}

	const user = await getUserById(userId);
	if (!user) {
		throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find user with that ID'});
	}

	const badge = await userHasBadge(user, badgeType);
	if (!badge && mustHaveBadge) {
		throw new TRPCError({code: 'BAD_REQUEST', message: 'User does not have this badge'});
	}

	return {user, badgeType};
}

export const badgeRouter = router({
	listTypes: adminProcedure.query(() => getAllBadgeTypes()),

	createType: adminProcedure
		.input(z.object({input: badgeTypeInput}))
		.mutation(({ctx, input}) => createBadgeType(ctx.user, input.input)),

	editType: adminProcedure
		.input(
			z.object({
				id: z.string(),
				input: badgeTypeInput,
			}),
		)
		.mutation(async ({input}) => {
			const badgeType = await getBadgeTypeById(input.id);
			if (!badgeType) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Could not find Badge Type with that id',
				});
			}

			return editBadgeType(badgeType, input.input);
		}),

	deleteType: adminProcedure
		.input(
			z.object({
				id: z.string(),
			}),
		)
		.mutation(async ({input}) => {
			const badgeType = await getBadgeTypeById(input.id);
			if (!badgeType) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'Could not find Badge Type with that id',
				});
			}

			return deleteBadgeType(badgeType);
		}),

	addToUser: adminProcedure.input(userBadgeInput).mutation(async ({input}) => {
		const {user, badgeType} = await getUserAndBadgeType(input.userId, input.badgeTypeId, false);

		return addBadgeToUser(user, badgeType);
	}),

	removeFromUser: adminProcedure.input(userBadgeInput).mutation(async ({input}) => {
		const {user, badgeType} = await getUserAndBadgeType(input.userId, input.badgeTypeId, true);

		return deleteBadgeFromUser(user, badgeType);
	}),
});
