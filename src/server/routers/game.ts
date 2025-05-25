import { z } from 'zod';
import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { getPrismaClient } from '@/server/services/database';
import { ErrorCode } from '@/server/constants/errors';
import { publicUserInclude } from '@/server/models/user_account';
import { GameType } from '@/shared/match/consts';

const gameSessionInclude = {
  user: publicUserInclude,
  solves: {
    orderBy: {
      created_at: 'desc',
    },
  },
};

// Input schemas
const gameSessionIdInput = z.object({
  id: z.string(),
});

const createGameSessionInput = z.object({
  gameType: z.nativeEnum(GameType),
  matchId: z.string(),
});

export async function getGameSessionById(id: string) {
  const prisma = getPrismaClient();
  return prisma.gameSession.findUnique({
    where: {
      id,
    },
    include: gameSessionInclude,
  });
}

export async function getGameSessionsByUserId(userId: string) {
  const prisma = getPrismaClient();
  return prisma.gameSession.findMany({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: 'desc',
    },
    include: gameSessionInclude,
  });
}

async function createGameSession(userId: string, gameType: GameType, matchId: string) {
  const prisma = getPrismaClient();
  return prisma.gameSession.create({
    data: {
      user_id: userId,
      match_id: matchId,
      game_type: gameType,
    },
  });
}

async function deleteGameSession(id: string) {
  const prisma = getPrismaClient();
  return prisma.gameSession.delete({
    where: {
      id,
    },
  });
}

export const gameRouter = createTRPCRouter({
  // Get a specific game session by ID
  gameSession: userProcedure
    .input(gameSessionIdInput)
    .query(async ({ ctx, input }) => {
      const session = await getGameSessionById(input.id);
      if (!session || session.user_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: ErrorCode.NOT_FOUND
        });
      }

      return session;
    }),

  // Get all game sessions for the current user
  gameSessions: userProcedure
    .query(async ({ ctx }) => {
      return getGameSessionsByUserId(ctx.me.id);
    }),

  // Create a new game session
  createGameSession: userProcedure
    .input(createGameSessionInput)
    .mutation(async ({ ctx, input }) => {
      return createGameSession(ctx.me.id, input.gameType, input.matchId);
    }),

  // Delete a game session
  deleteGameSession: userProcedure
    .input(gameSessionIdInput)
    .mutation(async ({ ctx, input }) => {
      const gameSession = await getGameSessionById(input.id);

      if (!gameSession || gameSession.user_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: ErrorCode.NOT_FOUND
        });
      }

      return deleteGameSession(input.id);
    }),
});