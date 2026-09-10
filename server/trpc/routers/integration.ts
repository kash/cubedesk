import {finishAuthorization, startAuthorization} from '@/server/integrations/authorization';
import {
	getIntegrationGetMe,
	linkOAuthAccount,
	RevokedIntegrationError,
	revokeIntegration,
} from '@/server/integrations/oauth';
import {getIntegration} from '@/server/models/integration';
import {getWcaStats} from '@/server/integrations/wca';
import type {WcaProfile} from '@/types/wca';
import {protectedProcedure, publicProcedure, router} from '@/server/trpc/trpc';
import {SafeIntegration, safeIntegrationSelect, WcaAccount} from '@/types/integration';
import {z} from 'zod';

const integrationTypeInput = z.object({
	integrationType: z.enum(['discord', 'wca']),
});

function toSafeIntegration(
	integration: {auth_expires_at: bigint} & Omit<SafeIntegration, 'auth_expires_at'>,
): SafeIntegration {
	return {
		id: integration.id,
		service_name: integration.service_name,
		created_at: integration.created_at,
		auth_expires_at: Number(integration.auth_expires_at),
	};
}

export const integrationRouter = router({
	start: protectedProcedure.input(integrationTypeInput).mutation(({ctx, input}) => {
		return {url: startAuthorization(input.integrationType, ctx.user.id, ctx.res)};
	}),

	get: protectedProcedure.input(integrationTypeInput).query(async ({ctx, input}) => {
		const integration = await ctx.prisma.integration.findFirst({
			where: {
				user_id: ctx.user.id,
				service_name: input.integrationType,
			},
		});

		if (integration && input.integrationType === 'wca') {
			try {
				await getIntegrationGetMe('wca', ctx.user);
			} catch (error) {
				if (error instanceof RevokedIntegrationError) {
					// Do not remove credentials replaced by a concurrent relink or refresh.
					const removed = await ctx.prisma.integration.deleteMany({
						where: {
							id: integration.id,
							auth_token: integration.auth_token,
							refresh_token: integration.refresh_token,
						},
					});
					if (removed.count) return null;
					const current = await getIntegration(ctx.user, 'wca');
					return current ? toSafeIntegration(current) : null;
				}
				// A timeout or provider outage is not evidence of revoked access.
			}
		}

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

	wcaProfile: publicProcedure
		.input(z.object({userId: z.string().uuid()}))
		.query(async ({input}): Promise<WcaProfile | null> => {
			try {
				const account = await getIntegrationGetMe('wca', {id: input.userId});
				if (!account) return null;
				const wcaId = typeof account.wca_id === 'string' ? account.wca_id : null;
				const candidate = account.url
					? new URL(account.url, 'https://www.worldcubeassociation.org')
					: null;
				const url =
					candidate?.origin === 'https://www.worldcubeassociation.org'
						? candidate.href
						: null;
				if (!wcaId) return {url, wcaId: null, status: 'no_wca_id', stats: null};
				return {url, wcaId, ...(await getWcaStats(wcaId))};
			} catch {
				// A broken integration must not break a public profile or expose OAuth errors.
				return {url: null, wcaId: null, status: 'unavailable', stats: null};
			}
		}),

	create: protectedProcedure
		.input(
			integrationTypeInput.extend({
				code: z.string().min(1),
				state: z.string().min(1),
			}),
		)
		.mutation(async ({ctx, input}) => {
			const redirectUri = finishAuthorization(
				input.integrationType,
				ctx.user.id,
				input.state,
				ctx.req,
				ctx.res,
			);
			// Do not return the result — the created row contains OAuth tokens
			await linkOAuthAccount(input.integrationType, ctx.user, input.code, redirectUri);
			return true;
		}),

	delete: protectedProcedure.input(integrationTypeInput).mutation(async ({ctx, input}) => {
		await revokeIntegration(input.integrationType, ctx.user);
		await ctx.prisma.integration.deleteMany({
			where: {
				user_id: ctx.user.id,
				service_name: input.integrationType,
			},
		});

		return true;
	}),
});
