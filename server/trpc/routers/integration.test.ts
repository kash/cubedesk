import type {TRPCContext} from '@/server/trpc/context';
import {
	getIntegrationGetMe,
	RevokedIntegrationError,
	revokeIntegration,
} from '@/server/integrations/oauth';
import {getIntegration} from '@/server/models/integration';
import {getWcaStats} from '@/server/integrations/wca';
import {integrationRouter} from './integration';

jest.mock('@/server/integrations/oauth', () => ({
	getIntegrationGetMe: jest.fn(),
	linkOAuthAccount: jest.fn(),
	revokeIntegration: jest.fn(),
	RevokedIntegrationError: class extends Error {},
}));
jest.mock('@/server/models/integration', () => ({getIntegration: jest.fn()}));
jest.mock('@/server/integrations/wca', () => ({getWcaStats: jest.fn()}));
const lookup = jest.mocked(getIntegrationGetMe);
const ownerId = 'a155a2af-2d37-445d-aac7-fb1bd99c34f3';
function caller(signedIn: boolean) {
	return integrationRouter.createCaller({user: signedIn ? {id: 'viewer'} : null} as TRPCContext);
}
beforeEach(() => jest.resetAllMocks());

it.each([true, false])(
	'uses the viewed account and exposes only safe profile fields (signed in: %s)',
	async (signedIn) => {
		lookup.mockResolvedValue({
			id: 5,
			url: '/persons/2000TEST01',
			email: 'private',
			auth_token: 'secret',
		});
		await expect(caller(signedIn).wcaProfile({userId: ownerId})).resolves.toEqual({
			url: 'https://www.worldcubeassociation.org/persons/2000TEST01',
			wcaId: null,
			status: 'no_wca_id',
			stats: null,
		});
		expect(lookup).toHaveBeenCalledWith('wca', {id: ownerId});
	},
);

it('returns null for an unlinked account without requesting results', async () => {
	lookup.mockResolvedValue(null);
	await expect(caller(false).wcaProfile({userId: ownerId})).resolves.toBeNull();
	expect(getWcaStats).not.toHaveBeenCalled();
});

it.each([{url: null}, {url: 'https://untrusted.example/person'}, {url: 'javascript:alert(1)'}])(
	'does not return missing or untrusted URLs',
	async (identity) => {
		lookup.mockResolvedValue(identity);
		await expect(caller(false).wcaProfile({userId: ownerId})).resolves.toEqual({
			url: null,
			wcaId: null,
			status: 'no_wca_id',
			stats: null,
		});
	},
);

it('keeps unavailable integrations from breaking public profiles', async () => {
	lookup.mockRejectedValue(new Error('Provider unavailable'));
	await expect(caller(false).wcaProfile({userId: ownerId})).resolves.toEqual({
		url: null,
		wcaId: null,
		status: 'unavailable',
		stats: null,
	});
});

it.each([true, false])(
	'fetches public stats for the linked identity (signed in: %s)',
	async (signedIn) => {
		lookup.mockResolvedValue({
			wca_id: '2000TEST01',
			url: '/persons/2000TEST01',
			email: 'private',
			avatar: {url: 'private'},
		});
		const stats = {
			records: [],
			competitionCount: 0,
			latestCompetition: null,
			competitionDetailsUnavailable: false,
		};
		jest.mocked(getWcaStats).mockResolvedValue({status: 'ready', stats});
		await expect(caller(signedIn).wcaProfile({userId: ownerId})).resolves.toEqual({
			url: 'https://www.worldcubeassociation.org/persons/2000TEST01',
			wcaId: '2000TEST01',
			status: 'ready',
			stats,
		});
		expect(getWcaStats).toHaveBeenCalledWith('2000TEST01');
	},
);

it('keeps the WCA profile link when public results fail', async () => {
	lookup.mockResolvedValue({wca_id: '2000TEST01', url: '/persons/2000TEST01'});
	jest.mocked(getWcaStats).mockResolvedValue({status: 'unavailable', stats: null});
	await expect(caller(false).wcaProfile({userId: ownerId})).resolves.toMatchObject({
		url: 'https://www.worldcubeassociation.org/persons/2000TEST01',
		status: 'unavailable',
	});
});

it('requires a session to begin linking', async () => {
	await expect(caller(false).start({integrationType: 'wca'})).rejects.toMatchObject({
		code: 'UNAUTHORIZED',
	});
});

function accountCaller() {
	const integration = {
		id: 'saved-wca',
		user_id: 'viewer',
		service_name: 'wca',
		auth_token: 'private-token',
		refresh_token: 'private-refresh',
		auth_expires_at: BigInt(1800000000),
		created_at: new Date(),
	};
	const prisma = {
		integration: {
			findFirst: jest.fn().mockResolvedValue(integration),
			deleteMany: jest.fn().mockResolvedValue({count: 1}),
		},
	};
	const account = integrationRouter.createCaller({
		user: {id: 'viewer'},
		prisma,
	} as unknown as TRPCContext);
	return {account, integration, prisma};
}

it('removes a saved WCA link when the provider confirms it was revoked', async () => {
	const {account, integration, prisma} = accountCaller();
	lookup.mockRejectedValue(new RevokedIntegrationError());
	await expect(account.get({integrationType: 'wca'})).resolves.toBeNull();
	expect(prisma.integration.deleteMany).toHaveBeenCalledWith({
		where: {
			id: integration.id,
			auth_token: integration.auth_token,
			refresh_token: integration.refresh_token,
		},
	});
});

it('keeps a saved link during a provider outage without exposing credentials', async () => {
	const {account, prisma} = accountCaller();
	lookup.mockRejectedValue(new Error('Provider timeout'));
	const result = await account.get({integrationType: 'wca'});
	expect(result).toMatchObject({id: 'saved-wca', service_name: 'wca'});
	expect(result).not.toHaveProperty('auth_token');
	expect(result).not.toHaveProperty('refresh_token');
	expect(prisma.integration.deleteMany).not.toHaveBeenCalled();
});

it('preserves a concurrently relinked WCA account', async () => {
	const {account, integration, prisma} = accountCaller();
	lookup.mockRejectedValue(new RevokedIntegrationError());
	prisma.integration.deleteMany.mockResolvedValue({count: 0});
	jest.mocked(getIntegration).mockResolvedValue({...integration, auth_token: 'replacement'});
	await expect(account.get({integrationType: 'wca'})).resolves.toMatchObject({
		id: integration.id,
	});
});

it('unlinks all matching rows for the signed-in account and tolerates repeated unlinking', async () => {
	const {account, prisma} = accountCaller();
	await expect(account.delete({integrationType: 'wca'})).resolves.toBe(true);
	expect(revokeIntegration).toHaveBeenCalledWith('wca', {id: 'viewer'});
	expect(prisma.integration.deleteMany).toHaveBeenCalledWith({
		where: {user_id: 'viewer', service_name: 'wca'},
	});
	prisma.integration.deleteMany.mockResolvedValue({count: 0});
	await expect(account.delete({integrationType: 'wca'})).resolves.toBe(true);
});

it('reports local deletion failures instead of pretending unlink succeeded', async () => {
	const {account, prisma} = accountCaller();
	prisma.integration.deleteMany.mockRejectedValue(new Error('Database unavailable'));
	await expect(account.delete({integrationType: 'wca'})).rejects.toThrow('Database unavailable');
});
