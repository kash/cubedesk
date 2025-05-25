import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { getPrismaClient } from '@/server/services/database';

const demoSolveInput = z.object({
  demo_session_id: z.string(),
  raw_time: z.number(),
  cube_type: z.string(),
  scramble: z.string(),
  started_at: z.bigint().optional(),
  ended_at: z.bigint().optional(),
});

export const demoSolveRouter = createTRPCRouter({
  // Create a new demo solve
  create: publicProcedure
    .input(demoSolveInput)
    .mutation(async ({ ctx, input }) => {
      const prisma = getPrismaClient();

      return prisma.demoSolve.create({
        data: {
          ...input,
          ip_address: ctx.req.headers['x-forwarded-for'] as string || 
                     ctx.req.headers['x-real-ip'] as string || 
                     'unknown',
        },
      });
    }),
});