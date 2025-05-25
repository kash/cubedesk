import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { getPrismaClient } from '@/server/services/database';

const createAdViewInput = z.object({
  ad_key: z.string(),
  pathname: z.string(),
  browser_session_id: z.string(),
});

export const adViewRouter = createTRPCRouter({
  create: publicProcedure
    .input(createAdViewInput)
    .mutation(async ({ ctx, input }) => {
      const prisma = getPrismaClient();
      const existingAdView = await prisma.adView.findFirst({
        where: {
          user_id: ctx.me?.id,
            ad_key: input.ad_key,
          pathname: input.pathname,
          browser_session_id: input.browser_session_id,
          ip_address: ctx.req.headers.get('x-forwarded-for') || ctx.req.headers.get('x-real-ip'),
        },
      });

      if (existingAdView) {
        return { id: existingAdView.id };
      }

      const adView = await prisma.adView.create({
        data: {
          ad_key: input.ad_key,
          ip_address: ctx.req.headers.get('x-forwarded-for') || ctx.req.headers.get('x-real-ip'),
          pathname: input.pathname,
          browser_session_id: input.browser_session_id,
          view_time_seconds: 0,
          user_id: ctx.me?.id,
        },
      });

      return { id: adView.id };
    }),

  click: publicProcedure
    .input(z.object({ adViewId: z.string() }))
    .mutation(async ({ input }) => {
      const prisma = getPrismaClient();
      const adView = await prisma.adView.findUnique({
        where: {
          id: input.adViewId,
        },
      });

      if (!adView) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: 'Could not find Ad View with that ID',
        });
      }

      const updatedAdView = await prisma.adView.update({
        where: {
          id: adView.id,
        },
        data: {
          clicked_at: new Date(),
        },
      });

      return { id: updatedAdView.id };
    }),
});