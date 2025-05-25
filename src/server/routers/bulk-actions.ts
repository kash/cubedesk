import { z } from 'zod';
import { createTRPCRouter, proProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';
import { getPrismaClient } from '@/server/services/database';
import { ErrorCode } from '@/server/constants/errors';
import { getDefaultCubeTypes } from '@/lib/util/cubes/util';
import { getCustomCubeTypesByUserId } from '@/server/resolvers/CustomCubeType.resolver';

// Input schema for bulk actions
const solveIdsInput = z.object({
  solveIds: z.array(z.string()),
});

const solveIdsWithSessionInput = z.object({
  solveIds: z.array(z.string()),
  sessionId: z.string(),
});

const solveIdsWithCubeTypeInput = z.object({
  solveIds: z.array(z.string()),
  cubeType: z.string(),
});

async function deleteSolves(userId: string, solveIds: string[]) {
  const prisma = getPrismaClient();
  return prisma.solve.deleteMany({
    where: {
      user_id: userId,
      id: {
        in: solveIds,
      },
    },
  });
}

async function moveSolvesToSession(userId: string, solveIds: string[], sessionId: string) {
  const prisma = getPrismaClient();
  return prisma.solve.updateMany({
    where: {
      user_id: userId,
      id: {
        in: solveIds,
      },
    },
    data: {
      session_id: sessionId,
    },
  });
}

async function dnfSolves(userId: string, solveIds: string[]): Promise<number> {
  const prisma = getPrismaClient();
  return prisma.$executeRaw`
    UPDATE
        solve
    SET dnf = TRUE, "time" = -1
    WHERE user_id = ${userId} 
        AND id IN (${Prisma.join(solveIds)})
  `;
}

async function plusTwoSolves(userId: string, solveIds: string[]): Promise<number> {
  const prisma = getPrismaClient();
  const plusTwoSolves = prisma.$executeRaw`
    UPDATE
        solve
    SET plus_two = TRUE, 
        "time" = raw_time + 2
    WHERE user_id = ${userId} 
        AND id IN (${Prisma.join(solveIds)})
  `;
  const updateTime = prisma.$executeRaw`
    UPDATE
        solve
    SET "time" = raw_time + 2
    WHERE user_id = ${userId} 
        AND id IN (${Prisma.join(solveIds)})
        AND dnf = FALSE
  `;

  const [updated] = await Promise.all([plusTwoSolves, updateTime]);
  return updated;
}

async function okSolves(userId: string, solveIds: string[]): Promise<number> {
  const prisma = getPrismaClient();
  return prisma.$executeRaw`
    UPDATE
        solve
    SET "time" = raw_time,
        dnf = false,
        plus_two = false
    WHERE user_id = ${userId} AND id IN (${Prisma.join(solveIds)})
  `;
}

async function updateCubeTypeForSolves(userId: string, solveIds: string[], cubeType: string) {
  const prisma = getPrismaClient();
  return prisma.solve.updateMany({
    where: {
      user_id: userId,
      id: {
        in: solveIds,
      },
    },
    data: {
      cube_type: cubeType,
    },
  });
}

export const bulkActionsRouter = createTRPCRouter({
  // Delete multiple solves
  deleteSolves: proProcedure
    .input(solveIdsInput)
    .mutation(async ({ ctx, input }) => {
      const deleted = await deleteSolves(ctx.me.id, input.solveIds);
      return deleted.count;
    }),

  // Move multiple solves to a session
  moveSolvesToSession: proProcedure
    .input(solveIdsWithSessionInput)
    .mutation(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      
      // Check if session exists and belongs to the user
      const session = await prisma.session.findUnique({
        where: {
          id: input.sessionId,
        },
      });

      if (!session || session.user_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Could not find a session with that ID',
        });
      }

      const updated = await moveSolvesToSession(ctx.me.id, input.solveIds, input.sessionId);
      return updated.count;
    }),

  // DNF multiple solves
  dnfSolves: proProcedure
    .input(solveIdsInput)
    .mutation(async ({ ctx, input }) => {
      return await dnfSolves(ctx.me.id, input.solveIds);
    }),

  // Plus Two multiple solves
  plusTwoSolves: proProcedure
    .input(solveIdsInput)
    .mutation(async ({ ctx, input }) => {
      return await plusTwoSolves(ctx.me.id, input.solveIds);
    }),

  // OK multiple solves (remove penalties)
  okSolves: proProcedure
    .input(solveIdsInput)
    .mutation(async ({ ctx, input }) => {
      return await okSolves(ctx.me.id, input.solveIds);
    }),

  // Update cube type for multiple solves
  updateCubeType: proProcedure
    .input(solveIdsWithCubeTypeInput)
    .mutation(async ({ ctx, input }) => {
      const defaultCubeTypes = getDefaultCubeTypes();
      
      // TODO: After CustomCubeType is migrated to tRPC, we'll need to update this
      const customCubeTypes = await getCustomCubeTypesByUserId({ user: ctx.me, prisma: getPrismaClient() }, ctx.me.id);

      const validCubeType = [...defaultCubeTypes, ...customCubeTypes].some((ct) => ct.id === input.cubeType);

      if (!validCubeType) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: ErrorCode.BAD_INPUT,
        });
      }

      const updated = await updateCubeTypeForSolves(ctx.me.id, input.solveIds, input.cubeType);
      return updated.count;
    }),
});