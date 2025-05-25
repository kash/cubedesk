import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { z } from 'zod';
import { getPrismaClient } from '@/server/services/database';

const UpdateOfflineHashInputSchema = z.object({
  hash: z.string(),
});

export const userAccountRouter = createTRPCRouter({
  updateOfflineHash: userProcedure
    .input(UpdateOfflineHashInputSchema)
    .output(z.string())
    .mutation(async ({ ctx, input }) => {
      const { me } = ctx;
      const { hash } = input;
      const prisma = getPrismaClient();

      await prisma.userAccount.update({
        where: {
          id: me.id,
        },
        data: {
          offline_hash: hash,
        },
      });

      return hash;
    }),
});