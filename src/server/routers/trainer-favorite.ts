import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { z } from 'zod';
import { getPrismaClient } from '@/server/services/database';
import { TRPCError } from '@trpc/server';
import { TrainerFavoriteSchema } from '@/generated/zod';

const CreateTrainerFavoriteInputSchema = z.object({
  cubeKey: z.string(),
});

const DeleteTrainerFavoriteInputSchema = z.object({
  cubeKey: z.string(),
});

export const trainerFavoriteRouter = createTRPCRouter({
  getAll: userProcedure
    .output(z.array(TrainerFavoriteSchema))
    .query(async ({ ctx }) => {
      const { me } = ctx;
      const prisma = getPrismaClient();
      
      return prisma.trainerFavorite.findMany({
        where: {
          user_id: me.id,
        },
      });
    }),

  create: userProcedure
    .input(CreateTrainerFavoriteInputSchema)
    .output(TrainerFavoriteSchema)
    .mutation(async ({ ctx, input }) => {
      const { me } = ctx;
      const { cubeKey } = input;
      const prisma = getPrismaClient();

      // Check if already favorited
      const existing = await prisma.trainerFavorite.findFirst({
        where: {
          user_id: me.id,
          cube_key: cubeKey,
        },
      });

      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'This algorithm has already been favorited',
        });
      }

      return prisma.trainerFavorite.create({
        data: {
          cube_key: cubeKey,
          user_id: me.id,
        },
      });
    }),

  delete: userProcedure
    .input(DeleteTrainerFavoriteInputSchema)
    .output(z.object({ count: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { me } = ctx;
      const { cubeKey } = input;
      const prisma = getPrismaClient();

      // Check if favorite exists and belongs to user
      const existing = await prisma.trainerFavorite.findFirst({
        where: {
          user_id: me.id,
          cube_key: cubeKey,
        },
      });

      if (!existing) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Trainer favorite not found',
        });
      }

      const result = await prisma.trainerFavorite.deleteMany({
        where: {
          user_id: me.id,
          cube_key: cubeKey,
        },
      });

      return { count: result.count };
    }),
});