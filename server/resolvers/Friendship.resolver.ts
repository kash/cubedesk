import {Arg, Args, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {Role} from '../middlewares/auth';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {
	Friendship,
	FriendshipRequest,
	PaginatedFriendshipRequests,
	PaginatedFriendships,
} from '../schemas/Friendship.schema';
import {getUserByIdOrThrow404, publicUserInclude} from '../models/user_account';
import {getPaginatedResponse, PaginatedRequestInput} from '../util/pagination/paginated_response';
import {PaginationArgs} from '../schemas/Pagination.schema';
import GraphQLError from '../util/graphql_error';
import {
	acceptFriendshipRequest,
	createFriendshipRequest,
	deleteFriendship,
	deleteFriendshipRequest,
	getFriendship,
	getFriendshipRequestById,
	getFriendships,
} from '../models/friendship';
import {ErrorCode} from '../constants/errors';
import FriendRequestNotification from '../resources/notification_types/friend_request';
import FriendRequestAcceptNotification from '../resources/notification_types/friend_request_accept';

function getPaginatedFriendsResponse<T>(
	context: GraphQLContext,
	paginationArgs: PaginationArgs,
	tableName: string,
	whereKey: string,
	userKey: string,
	excludeAcceptedAt: boolean = false
) {
	const where = {
		[whereKey]: context.user.id,
		[userKey]: {
			username: {
				contains: paginationArgs.searchQuery || '',
			},
		},
	};

	if (!excludeAcceptedAt) {
		where.accepted_at = null;
	}

	const prismaPayload = {
		where,
		orderBy: {
			created_at: 'desc',
		},
		include: {
			[userKey]: publicUserInclude,
		},
	};

	const requestInput: PaginatedRequestInput = {
		paginationArgs,
		tableName: tableName,
		prismaPayload,
	};

	return getPaginatedResponse<T>(requestInput);
}

@Resolver()
export class FriendshipResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [Friendship])
	async allFriendships(@Ctx() context: GraphQLContext): Promise<Friendship[]> {
		return getFriendships(context.user);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => PaginatedFriendships)
	async friendships(
		@Ctx() context: GraphQLContext,
		@Args() paginationArgs: PaginationArgs
	): Promise<PaginatedFriendships> {
		return getPaginatedFriendsResponse<Friendship>(
			context,
			paginationArgs,
			'friendship',
			'user_id',
			'other_user',
			true
		);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => PaginatedFriendshipRequests)
	async friendshipRequestsSent(
		@Ctx() context: GraphQLContext,
		@Args() paginationArgs: PaginationArgs
	): Promise<PaginatedFriendshipRequests> {
		return getPaginatedFriendsResponse<FriendshipRequest>(
			context,
			paginationArgs,
			'friendshipRequest',
			'from_id',
			'to_user'
		);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => PaginatedFriendshipRequests)
	async friendshipRequestsReceived(
		@Ctx() context: GraphQLContext,
		@Args() paginationArgs: PaginationArgs
	): Promise<PaginatedFriendshipRequests> {
		return getPaginatedFriendsResponse<FriendshipRequest>(
			context,
			paginationArgs,
			'friendshipRequest',
			'to_id',
			'from_user'
		);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => [FriendshipRequest])
	async receivedFriendshipRequestsFromUser(@Ctx() {prisma, user}: GraphQLContext, @Arg('userId') userId: string) {
		const targetUser = await getUserByIdOrThrow404(userId);

		return prisma.friendshipRequest.findMany({
			where: {
				from_id: user.id,
				to_id: targetUser.id,
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => [FriendshipRequest])
	async sentFriendshipRequestsToUser(@Ctx() {prisma, user}: GraphQLContext, @Arg('userId') userId: string) {
		const targetUser = await getUserByIdOrThrow404(userId);

		return prisma.friendshipRequest.findMany({
			where: {
				to_id: user.id,
				from_id: targetUser.id,
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => FriendshipRequest)
	async sendFriendshipRequest(@Ctx() {user}: GraphQLContext, @Arg('toUserId') toUserId: string) {
		const targetUser = await getUserByIdOrThrow404(toUserId);

		if (toUserId === user.id) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You cannot send a friend request to yourself');
		}

		const friendship = await getFriendship(user, targetUser);
		if (friendship) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You are already friends with this user');
		}

		const notification = new FriendRequestNotification({
			user: targetUser,
			triggeringUser: user,
			sendEmail: true,
		});
		await notification.send();

		return createFriendshipRequest(user, targetUser);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Friendship)
	async acceptFriendshipRequest(
		@Ctx() {user}: GraphQLContext,
		@Arg('friendshipRequestId') friendshipRequestId: string
	) {
		const request = await getFriendshipRequestById(friendshipRequestId);
		if (!request) {
			return new GraphQLError(ErrorCode.NOT_FOUND, 'Could not find friend request with that ID');
		}

		if (request.to_id !== user.id) {
			return new GraphQLError(ErrorCode.NOT_FOUND, 'You cannot accept this friend request');
		}

		if (request.accepted_at) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You have already accepted this friend request');
		}

		const friendship = await getFriendship(user, request.from_user);
		if (friendship) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You are already friends with this user');
		}

		const notification = new FriendRequestAcceptNotification({
			user: request.from_user,
			triggeringUser: user,
			sendEmail: true,
		});
		await notification.send();

		return acceptFriendshipRequest(request);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => FriendshipRequest)
	async deleteFriendshipRequest(
		@Ctx() {user}: GraphQLContext,
		@Arg('friendshipRequestId') friendshipRequestId: string
	) {
		const request = await getFriendshipRequestById(friendshipRequestId);
		if (!request) {
			return new GraphQLError(ErrorCode.NOT_FOUND, 'Could not find friend request with that ID');
		}

		if (request.accepted_at) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'Accepted friend requests cannot be deleted');
		}

		if (request.from_id !== user.id) {
			return new GraphQLError(ErrorCode.NOT_FOUND, 'You cannot delete this friend request');
		}

		return deleteFriendshipRequest(request);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Friendship)
	async unfriend(@Ctx() {user}: GraphQLContext, @Arg('targetUserId') targetUserId: string) {
		const targetUser = await getUserByIdOrThrow404(targetUserId);

		if (targetUserId === user.id) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You cannot unfriend yourself');
		}

		const friendship = await getFriendship(user, targetUser);
		if (!friendship) {
			return new GraphQLError(ErrorCode.BAD_INPUT, 'You are not friends with this user');
		}

		return deleteFriendship(friendship, user, targetUser);
	}
}
