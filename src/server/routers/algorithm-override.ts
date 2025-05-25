import { z } from 'zod';
import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { getPrismaClient } from '@/server/services/database';
import { ErrorCode } from '@/server/constants/errors';

// Input schema for algorithm overrides
const algorithmOverrideInput = z.object({
  rotate: z.number(),
  solution: z.string(),
  cube_key: z.string().optional(), // This can be passed in the request or set in the procedure
  name: z.string(),
  scrambles: z.string(),
});

export const algorithmOverrideRouter = createTRPCRouter({
  // Get all algorithm overrides for the current user
  getAll: userProcedure.query(async ({ ctx }) => {
    const prisma = getPrismaClient();
    
    return prisma.algorithmOverride.findMany({
      where: {
        user_id: ctx.me.id,
      },
    });
  }),

  // Update or create an algorithm override
  update: userProcedure
    .input(z.object({
      algoKey: z.string(),
      input: algorithmOverrideInput,
    }))
    .mutation(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      const { algoKey, input: overrideInput } = input;
      
      // Set the cube_key from the algoKey parameter
      const data = {
        ...overrideInput,
        cube_key: algoKey,
      };

      // Try to find an existing override
      const existingOverride = await prisma.algorithmOverride.findFirst({
        where: {
          user_id: ctx.me.id,
          cube_key: algoKey,
        },
      });

      // If exists, ensure it belongs to the current user
      if (existingOverride && existingOverride.user_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: ErrorCode.FORBIDDEN,
        });
      }

      // If override doesn't exist, create it
      if (!existingOverride) {
        return prisma.algorithmOverride.create({
          data: {
            ...data,
            user_id: ctx.me.id,
          },
        });
      }

      // Otherwise, update the existing override
      return prisma.algorithmOverride.update({
        where: {
          id: existingOverride.id,
        },
        data: data,
      });
    }),

  // Delete an algorithm override
  delete: userProcedure
    .input(z.object({ algoKey: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      const { algoKey } = input;

      // Find the override
      const algorithmOverride = await prisma.algorithmOverride.findFirst({
        where: {
          user_id: ctx.me.id,
          cube_key: algoKey,
        },
      });

      // Check if exists and belongs to the current user
      if (!algorithmOverride || algorithmOverride.user_id !== ctx.me.id) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: ErrorCode.FORBIDDEN,
        });
      }

      // Delete the override
      return prisma.algorithmOverride.delete({
        where: {
          id: algorithmOverride.id,
        },
      });
    }),
});