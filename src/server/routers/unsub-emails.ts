import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { z } from 'zod';
import { getPrismaClient } from '@/server/services/database';
import { TRPCError } from '@trpc/server';
import { setNotificationPreference } from '../models/notification_preference';

const UnsubEmailsInputSchema = z.object({
  unsubId: z.string(),
});

export const unsubEmailsRouter = createTRPCRouter({
  unsubscribe: publicProcedure
    .input(UnsubEmailsInputSchema)
    .output(z.boolean())
    .mutation(async ({ input }) => {
      const { unsubId } = input;
      const prisma = getPrismaClient();

      // Find user by unsubscribe ID
      const user = await prisma.userAccount.findFirst({
        where: {
          unsub_id: unsubId,
        },
      });

      if (!user) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Invalid unsubscribe code',
        });
      }

      // Set marketing emails to false
      await setNotificationPreference(user, 'marketing_emails', false);

      return true;
    }),
});