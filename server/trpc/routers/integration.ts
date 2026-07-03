import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {protectedProcedure, router} from '../trpc';
import {safeIntegrationSelect, SafeIntegration, WcaAccount} from '@/types/integration';
import {getIntegration} from '../../models/integration';
import {getIntegrationGetMe, linkOAuthAccount, revokeIntegration} from '../../integrations/oauth';

const integrationTypeInput = z.object({
	integrationType: z.enum(['discord', 'wca']),
});

function toSafeIntegration(integration: {auth_expires_at: bigint} & Omit<SafeIntegration, 'auth_expires_at'>): SafeIntegration {
	return {
		id: integration.id,
		service_name: integration.service_name,
		created_at: integration.created_at,
		auth_expires_at: Number(integration.auth_expires_at),
	};
}

export const integrationRouter = router({
	get: protectedProcedure.input(integrationTypeInput).query(async ({ctx, input}) => {
		const integration = await ctx.prisma.integration.findFirst({
			where: {
				user_id: ctx.user.id,
				service_name: input.integrationType,
			},
			select: safeIntegrationSelect,
		});

		return integration ? toSafeIntegration(integration) : null;
	}),

	list: protectedProcedure.query(async ({ctx}) => {
		const integrations = await ctx.prisma.integration.findMany({
			where: {
				user_id: ctx.user.id,
			},
			select: safeIntegrationSelect,
		});

		return integrations.map(toSafeIntegration);
	}),

	wcaMe: protectedProcedure.query(async ({ctx}): Promise<WcaAccount | null> => {
		const integration = await getIntegration(ctx.user, 'wca');
		if (!integration) {
			return null;
		}

		const me = await getIntegrationGetMe('wca', ctx.user);
		return {
			id: String(me.id),
			url: me.url ?? null,
			wca_id: me.wca_id ?? null,
			country_iso2: me.country_iso2 ?? null,
			created_at: me.created_at ?? null,
		};
	}),

	create: protectedProcedure
		.input(
			integrationTypeInput.extend({
				code: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const integration = await getIntegration(ctx.user, input.integrationType);
			if (integration) {
				throw new TRPCError({code: 'FORBIDDEN', message: 'This account is already linked'});
			}

			// Do not return the result — the created row contains OAuth tokens
			await linkOAuthAccount(input.integrationType, ctx.user, input.code);
			return true;
		}),

	delete: protectedProcedure.input(integrationTypeInput).mutation(async ({ctx, input}) => {
		const integration = await getIntegration(ctx.user, input.integrationType);
		if (!integration) {
			throw new TRPCError({code: 'FORBIDDEN', message: 'This account is not linked'});
		}

		await revokeIntegration(input.integrationType, ctx.user);
		await ctx.prisma.integration.delete({
			where: {
				id: integration.id,
			},
		});

		return true;
	}),
});
