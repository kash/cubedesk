import {publicUserSelect} from '@/types/user';
import {TRPCError} from '@trpc/server';
import {z} from 'zod';
import {
	acceptFriendshipRequest,
	createFriendshipRequest,
	deleteFriendship,
	deleteFriendshipRequest,
	getFriendship,
	getFriendshipRequestById,
	getFriendships,
} from '@/server/models/friendship';
import {getUserById} from '@/server/models/user_account';
import FriendRequestNotification from '@/server/resources/notification_types/friend_request';
import FriendRequestAcceptNotification from '@/server/resources/notification_types/friend_request_accept';
import {getPaginatedResponse} from '@/server/util/pagination/paginated_response';
import {protectedProcedure, router} from '@/server/trpc/trpc';

const paginationInputSchema = z.object({
	page: z.number().int().min(0).default(0),
	pageSize: z.number().int().min(1).max(100).default(25),
	searchQuery: z.string().max(250).default(''),
});

type PaginationInput = z.infer<typeof paginationInputSchema>;

function getPaginatedFriendsResponse<T>(
	userId: string,
	paginationArgs: PaginationInput,
	tableName: string,
	whereKey: string,
	userKey: string,
	excludeAcceptedAt: boolean = false
) {
	const where: Record<string, any> = {
		[whereKey]: userId,
		[userKey]: {
			username: {
				contains: paginationArgs.searchQuery || '',
			},
		},
	};

	if (!excludeAcceptedAt) {
		where.accepted_at = null;
	}

	return getPaginatedResponse<T>({
		paginationArgs,
		tableName,
		prismaPayload: {
			where,
			orderBy: {
				created_at: 'desc',
			},
			include: {
				[userKey]: {
					select: publicUserSelect,
				},
			},
		},
	});
}

async function getUserByIdOrNotFound(id: string) {
	const user = await getUserById(id);

	if (!user) {
		throw new TRPCError({
			code: 'NOT_FOUND',
			message: `Could not find user with ID ${id}`,
		});
	}

	return user;
}

export const friendshipRouter = router({
	list: protectedProcedure.query(({ctx}) => getFriendships(ctx.user)),

	searchFriends: protectedProcedure
		.input(paginationInputSchema)
		.query(({ctx, input}) => getPaginatedFriendsResponse(ctx.user.id, input, 'friendship', 'user_id', 'other_user', true)),

	searchRequestsSent: protectedProcedure
		.input(paginationInputSchema)
		.query(({ctx, input}) => getPaginatedFriendsResponse(ctx.user.id, input, 'friendshipRequest', 'from_id', 'to_user')),

	searchRequestsReceived: protectedProcedure
		.input(paginationInputSchema)
		.query(({ctx, input}) => getPaginatedFriendsResponse(ctx.user.id, input, 'friendshipRequest', 'to_id', 'from_user')),

	// Requests the current user has sent to the given user
	requestsToUser: protectedProcedure
		.input(
			z.object({
				userId: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const targetUser = await getUserByIdOrNotFound(input.userId);

			return ctx.prisma.friendshipRequest.findMany({
				where: {
					from_id: ctx.user.id,
					to_id: targetUser.id,
				},
			});
		}),

	// Requests the given user has sent to the current user
	requestsFromUser: protectedProcedure
		.input(
			z.object({
				userId: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const targetUser = await getUserByIdOrNotFound(input.userId);

			return ctx.prisma.friendshipRequest.findMany({
				where: {
					to_id: ctx.user.id,
					from_id: targetUser.id,
				},
			});
		}),

	sendRequest: protectedProcedure
		.input(
			z.object({
				toUserId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;
			const targetUser = await getUserByIdOrNotFound(input.toUserId);

			if (input.toUserId === user.id) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You cannot send a friend request to yourself'});
			}

			const friendship = await getFriendship(user, targetUser);
			if (friendship) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You are already friends with this user'});
			}

			const notification = new FriendRequestNotification({
				user: targetUser,
				triggeringUser: user,
				sendEmail: true,
			});
			await notification.send();

			return createFriendshipRequest(user, targetUser);
		}),

	acceptRequest: protectedProcedure
		.input(
			z.object({
				friendshipRequestId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;

			const request = await getFriendshipRequestById(input.friendshipRequestId);
			if (!request) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find friend request with that ID'});
			}

			if (request.to_id !== user.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'You cannot accept this friend request'});
			}

			if (request.accepted_at) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You have already accepted this friend request'});
			}

			const friendship = await getFriendship(user, request.from_user);
			if (friendship) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You are already friends with this user'});
			}

			const notification = new FriendRequestAcceptNotification({
				user: request.from_user,
				triggeringUser: user,
				sendEmail: true,
			});
			await notification.send();

			return acceptFriendshipRequest(request);
		}),

	deleteRequest: protectedProcedure
		.input(
			z.object({
				friendshipRequestId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const request = await getFriendshipRequestById(input.friendshipRequestId);
			if (!request) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find friend request with that ID'});
			}

			if (request.accepted_at) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'Accepted friend requests cannot be deleted'});
			}

			if (request.from_id !== ctx.user.id) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'You cannot delete this friend request'});
			}

			return deleteFriendshipRequest(request);
		}),

	unfriend: protectedProcedure
		.input(
			z.object({
				targetUserId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const {user} = ctx;
			const targetUser = await getUserByIdOrNotFound(input.targetUserId);

			if (input.targetUserId === user.id) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You cannot unfriend yourself'});
			}

			const friendship = await getFriendship(user, targetUser);
			if (!friendship) {
				throw new TRPCError({code: 'BAD_REQUEST', message: 'You are not friends with this user'});
			}

			return deleteFriendship(friendship, user, targetUser);
		}),
});
