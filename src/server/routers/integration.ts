import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';
import {ErrorCode} from '@/server/constants/errors';
import {IntegrationType} from '@/shared/integration';
import {
	getIntegrationGetMe,
	linkOAuthAccount,
	revokeIntegration,
} from '@/server/integrations/oauth';
import {getIntegration} from '@/server/models/integration';

export const integrationRouter = createTRPCRouter({
	// Get a specific integration by type
	integration: userProcedure
		.input(
			z.object({
				integrationType: z.enum(['discord', 'wca'] as const),
			}),
		)
		.query(async ({ctx, input}) => {
			return getIntegration(ctx.me, input.integrationType);
		}),

	// Get WCA account information
	wcaMe: userProcedure.query(async ({ctx}) => {
		return getIntegrationGetMe('wca', ctx.me);
	}),

	// Get Discord account information
	discordMe: userProcedure.query(async ({ctx}) => {
		return getIntegrationGetMe('discord', ctx.me);
	}),

	// Get all integrations for the current user
	integrations: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();
		return prisma.integration.findMany({
			where: {
				user_id: ctx.me.id,
			},
		});
	}),

	// Create a new integration
	createIntegration: userProcedure
		.input(
			z.object({
				integrationType: z.enum(['discord', 'wca'] as const),
				code: z.string(),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const integration = await getIntegration(ctx.me, input.integrationType);
			if (integration) {
				throw new TRPCError({
					code: 'FORBIDDEN',
					message: 'This account is already linked',
				});
			}

			try {
				return linkOAuthAccount(input.integrationType, ctx.me, input.code);
			} catch (e: unknown) {
				throw new TRPCError({
					code: 'INTERNAL_SERVER_ERROR',
					message: 'Failed to link account',
				});
			}
		}),

	// Delete an integration
	deleteIntegration: userProcedure
		.input(
			z.object({
				integrationType: z.enum(['discord', 'wca'] as const),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const integration = await getIntegration(ctx.me, input.integrationType);
			if (!integration) {
				throw new TRPCError({
					code: 'FORBIDDEN',
					message: 'This account is not linked',
				});
			}

			await revokeIntegration(input.integrationType, ctx.me);

			const prisma = getPrismaClient();
			return prisma.integration.delete({
				where: {
					id: integration.id,
				},
			});
		}),
});
