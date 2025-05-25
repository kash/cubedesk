import { z } from 'zod';
import { createTRPCRouter, userProcedure } from '@/server/trpc';
import { TRPCError } from '@trpc/server';
import { getPrismaClient } from '@/server/services/database';
import { ErrorCode } from '@/server/constants/errors';
import { IntegrationType } from '@/shared/integration';
import { getIntegrationGetMe, linkOAuthAccount, revokeIntegration } from '@/server/integrations/oauth';
import { getIntegration } from '@/server/models/integration';

// Input schemas
const integrationTypeInput = z.object({
  integrationType: z.enum(['discord', 'wca'] as const),
});

const createIntegrationInput = z.object({
  integrationType: z.enum(['discord', 'wca'] as const),
  code: z.string(),
});

function getIntegrationsByUserId(userId: string) {
  const prisma = getPrismaClient();
  return prisma.integration.findMany({
    where: {
      user_id: userId,
    },
  });
}

function getIntegrationMe(intType: IntegrationType, user: any) {
  return getIntegrationGetMe(intType, user);
}

function deleteIntegrationById(id: string) {
  const prisma = getPrismaClient();
  return prisma.integration.delete({
    where: {
      id,
    },
  });
}

export const integrationRouter = createTRPCRouter({
  // Get a specific integration by type
  integration: userProcedure
    .input(integrationTypeInput)
    .query(async ({ ctx, input }) => {
      return getIntegration(ctx.me, input.integrationType);
    }),

  // Get WCA account information
  wcaMe: userProcedure
    .query(async ({ ctx }) => {
      return getIntegrationMe('wca', ctx.me);
    }),

  // Get Discord account information
  discordMe: userProcedure
    .query(async ({ ctx }) => {
      return getIntegrationMe('discord', ctx.me);
    }),

  // Get all integrations for the current user
  integrations: userProcedure
    .query(async ({ ctx }) => {
      return getIntegrationsByUserId(ctx.me.id);
    }),

  // Create a new integration
  createIntegration: userProcedure
    .input(createIntegrationInput)
    .mutation(async ({ ctx, input }) => {
      const integration = await getIntegration(ctx.me, input.integrationType);
      if (integration) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'This account is already linked'
        });
      }

      try {
        return linkOAuthAccount(input.integrationType, ctx.me, input.code);
      } catch (e) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Failed to link account'
        });
      }
    }),

  // Delete an integration
  deleteIntegration: userProcedure
    .input(integrationTypeInput)
    .mutation(async ({ ctx, input }) => {
      const integration = await getIntegration(ctx.me, input.integrationType);
      if (!integration) {
        throw new TRPCError({
          code: 'FORBIDDEN',
          message: 'This account is not linked'
        });
      }

      await revokeIntegration(input.integrationType, ctx.me);
      return deleteIntegrationById(integration.id);
    }),
});