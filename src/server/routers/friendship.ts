import { z } from 'zod';
import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { getPrismaClient } from '@/server/services/database';
import { ErrorCode } from '@/server/constants/errors';
import { getUserByIdOrThrow404, publicUserInclude } from '@/server/models/user_account';
import { getPaginatedResponse } from '@/server/utils/pagination/paginated_response';
import {
  acceptFriendshipRequest,
  createFriendshipRequest,
  deleteFriendship,
  deleteFriendshipRequest,
  getFriendship,
  getFriendshipRequestById,
  getFriendships,
} from '@/server/models/friendship';
import FriendRequestNotification from '@/server/resources/notification_types/friend_request';
import FriendRequestAcceptNotification from '@/server/resources/notification_types/friend_request_accept';

// Input schemas
const paginationArgsInput = z.object({
  page: z.number().min(0).default(0),
  pageSize: z.number().min(1).max(100).default(25),
  searchQuery: z.string().default(''),
});

const userIdInput = z.object({
  userId: z.string(),
});

const friendshipRequestIdInput = z.object({
  friendshipRequestId: z.string(),
});

function getPaginatedFriendsResponse<T>(
  userId: string,
  paginationArgs: z.infer<typeof paginationArgsInput>,
  tableName: string,
  whereKey: string,
  userKey: string,
  excludeAcceptedAt: boolean = false
) {
  const where = {
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

  const prismaPayload = {
    where,
    orderBy: {
      created_at: 'desc',
    },
    include: {
      [userKey]: publicUserInclude,
    },
  };

  return getPaginatedResponse<T>({
    paginationArgs,
    tableName,
    prismaPayload,
  });
}

export const friendshipRouter = createTRPCRouter({
  // Get all friendships for the current user
  allFriendships: userProcedure
    .query(async ({ ctx }) => {
      return getFriendships(ctx.me);
    }),

  // Get paginated friendships
  friendships: userProcedure
    .input(paginationArgsInput)
    .query(async ({ ctx, input }) => {
      return getPaginatedFriendsResponse(
        ctx.me.id,
        input,
        'friendship',
        'user_id',
        'other_user',
        true
      );
    }),

  // Get sent friendship requests
  friendshipRequestsSent: userProcedure
    .input(paginationArgsInput)
    .query(async ({ ctx, input }) => {
      return getPaginatedFriendsResponse(
        ctx.me.id,
        input,
        'friendshipRequest',
        'from_id',
        'to_user'
      );
    }),

  // Get received friendship requests
  friendshipRequestsReceived: userProcedure
    .input(paginationArgsInput)
    .query(async ({ ctx, input }) => {
      return getPaginatedFriendsResponse(
        ctx.me.id,
        input,
        'friendshipRequest',
        'to_id',
        'from_user'
      );
    }),

  // Get received friendship requests from a specific user
  receivedFriendshipRequestsFromUser: userProcedure
    .input(userIdInput)
    .query(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      const targetUser = await getUserByIdOrThrow404(input.userId);

      return prisma.friendshipRequest.findMany({
        where: {
          from_id: ctx.me.id,
          to_id: targetUser.id,
        },
      });
    }),

  // Get sent friendship requests to a specific user
  sentFriendshipRequestsToUser: userProcedure
    .input(userIdInput)
    .query(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      const targetUser = await getUserByIdOrThrow404(input.userId);

      return prisma.friendshipRequest.findMany({
        where: {
          to_id: ctx.me.id,
          from_id: targetUser.id,
        },
      });
    }),

  // Send a friendship request
  sendFriendshipRequest: userProcedure
    .input(z.object({ toUserId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const targetUser = await getUserByIdOrThrow404(input.toUserId);

      if (input.toUserId === ctx.me.id) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You cannot send a friend request to yourself'
        });
      }

      const friendship = await getFriendship(ctx.me, targetUser);
      if (friendship) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You are already friends with this user'
        });
      }

      const notification = new FriendRequestNotification({
        user: targetUser,
        triggeringUser: ctx.me,
        sendEmail: true,
      });
      await notification.send();

      return createFriendshipRequest(ctx.me, targetUser);
    }),

  // Accept a friendship request
  acceptFriendshipRequest: userProcedure
    .input(friendshipRequestIdInput)
    .mutation(async ({ ctx, input }) => {
      const request = await getFriendshipRequestById(input.friendshipRequestId);
      if (!request) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Could not find friend request with that ID'
        });
      }

      if (request.to_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You cannot accept this friend request'
        });
      }

      if (request.accepted_at) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You have already accepted this friend request'
        });
      }

      const friendship = await getFriendship(ctx.me, request.from_user);
      if (friendship) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You are already friends with this user'
        });
      }

      const notification = new FriendRequestAcceptNotification({
        user: request.from_user,
        triggeringUser: ctx.me,
        sendEmail: true,
      });
      await notification.send();

      return acceptFriendshipRequest(request);
    }),

  // Delete a friendship request
  deleteFriendshipRequest: userProcedure
    .input(friendshipRequestIdInput)
    .mutation(async ({ ctx, input }) => {
      const request = await getFriendshipRequestById(input.friendshipRequestId);
      if (!request) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Could not find friend request with that ID'
        });
      }

      if (request.accepted_at) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Accepted friend requests cannot be deleted'
        });
      }

      if (request.from_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'You cannot delete this friend request'
        });
      }

      return deleteFriendshipRequest(request);
    }),

  // Unfriend a user
  unfriend: userProcedure
    .input(z.object({ targetUserId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const targetUser = await getUserByIdOrThrow404(input.targetUserId);

      if (input.targetUserId === ctx.me.id) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You cannot unfriend yourself'
        });
      }

      const friendship = await getFriendship(ctx.me, targetUser);
      if (!friendship) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'You are not friends with this user'
        });
      }

      return deleteFriendship(friendship, ctx.me, targetUser);
    }),
});