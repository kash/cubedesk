import {createIntegration, getIntegration, updateIntegration} from '@/server/models/integration';
import {getOrCreateUserProfile, updateUserProfile} from '@/server/models/profile';
import axios from 'axios';
import {
	getIntegrationGetMe,
	linkOAuthAccount,
	RevokedIntegrationError,
	revokeIntegration,
} from './oauth';

jest.mock('axios', () => ({
	__esModule: true,
	default: {...jest.requireActual('axios'), get: jest.fn(), post: jest.fn()},
}));
jest.mock('@/server/models/integration', () => ({
	createIntegration: jest.fn(),
	getIntegration: jest.fn(),
	updateIntegration: jest.fn(),
}));
jest.mock('@/server/models/profile', () => ({
	getOrCreateUserProfile: jest.fn(),
	updateUserProfile: jest.fn(),
}));

const post = jest.mocked(axios.post);
const get = jest.mocked(axios.get);
const find = jest.mocked(getIntegration);
const update = jest.mocked(updateIntegration);
const create = jest.mocked(createIntegration);
const user = {id: 'profile-owner'};
const redirectUri = 'http://localhost:3000/oauth/wca';
const now = 1800000000000;
const integration = {
	id: 'integration',
	user_id: user.id,
	service_name: 'wca',
	auth_token: 'old-token',
	refresh_token: 'refresh-token',
	auth_expires_at: BigInt(now / 1000 + 7200),
	created_at: new Date(now),
};
const oldWcaSecret = process.env.WCA_SECRET;
const oldDiscordSecret = process.env.DISCORD_SECRET;

beforeEach(() => {
	jest.resetAllMocks();
	jest.spyOn(Date, 'now').mockReturnValue(now);
	process.env.WCA_SECRET = 'test-secret';
	process.env.DISCORD_SECRET = 'test-secret';
	find.mockResolvedValue(integration);
	update.mockResolvedValue({...integration, auth_token: 'new-token'});
	post.mockResolvedValue({
		data: {access_token: 'new-token', refresh_token: 'new-refresh', expires_in: 7200},
	});
	get.mockResolvedValue({data: {me: {id: 123, url: '/persons/2000TEST01'}}});
});

afterEach(() => jest.restoreAllMocks());
afterAll(() => {
	if (oldWcaSecret === undefined) delete process.env.WCA_SECRET;
	else process.env.WCA_SECRET = oldWcaSecret;
	if (oldDiscordSecret === undefined) delete process.env.DISCORD_SECRET;
	else process.env.DISCORD_SECRET = oldDiscordSecret;
});

it('exchanges the code with the exact callback URI and stores expiry in seconds', async () => {
	find.mockResolvedValue(null);
	await linkOAuthAccount('wca', user, 'authorization-code', redirectUri);
	const params = new URLSearchParams(post.mock.calls[0][1] as string);
	expect(params.get('redirect_uri')).toBe(redirectUri);
	expect(params.get('code')).toBe('authorization-code');
	expect(params.get('grant_type')).toBe('authorization_code');
	expect(create).toHaveBeenCalledWith(user, 'wca', 'new-token', 'new-refresh', now / 1000 + 7200);
});

it('does not leave a linked row if fetching the granted identity fails', async () => {
	find.mockResolvedValue(null);
	get.mockRejectedValue(new Error('Unavailable'));
	await expect(linkOAuthAccount('wca', user, 'code', redirectUri)).rejects.toThrow();
	expect(create).not.toHaveBeenCalled();
});

it('relinks an existing integration instead of rejecting or duplicating it', async () => {
	await linkOAuthAccount('wca', user, 'code', redirectUri);
	expect(update).toHaveBeenCalledWith(
		integration,
		expect.objectContaining({auth_token: 'new-token'}),
	);
	expect(create).not.toHaveBeenCalled();
});

it.each([BigInt(now / 1000 - 1), BigInt(now + 7200)])(
	'refreshes expired or legacy millisecond expiry %s',
	async (expiry) => {
		find.mockResolvedValue({...integration, auth_expires_at: expiry});
		await getIntegrationGetMe('wca', user);
		expect(update).toHaveBeenCalledWith(
			expect.anything(),
			expect.objectContaining({auth_expires_at: now / 1000 + 7200}),
		);
		expect(get).toHaveBeenCalledWith(
			expect.any(String),
			expect.objectContaining({headers: {Authorization: 'Bearer new-token'}}),
		);
	},
);

it('keeps a valid token without refreshing', async () => {
	await getIntegrationGetMe('wca', user);
	expect(post).not.toHaveBeenCalled();
});

it('retries once after a rejected token and preserves an omitted refresh token', async () => {
	get.mockRejectedValueOnce({isAxiosError: true, response: {status: 401}});
	post.mockResolvedValue({data: {access_token: 'new-token', expires_in: 7200}});
	await getIntegrationGetMe('wca', user);
	expect(get).toHaveBeenCalledTimes(2);
	expect(update).toHaveBeenCalledWith(
		integration,
		expect.objectContaining({refresh_token: 'refresh-token'}),
	);
});

it('does not make an authenticated provider request for an unlinked user', async () => {
	find.mockResolvedValue(null);
	await expect(getIntegrationGetMe('wca', user)).resolves.toBeNull();
	expect(get).not.toHaveBeenCalled();
});

it('revokes an expired token without trying to refresh it', async () => {
	find.mockResolvedValue({...integration, auth_expires_at: BigInt(1)});
	post.mockResolvedValue({data: ''});
	await revokeIntegration('wca', user);
	expect(post).toHaveBeenCalledTimes(1);
	expect(post.mock.calls[0][0]).toContain('/oauth/revoke');
	expect(new URLSearchParams(post.mock.calls[0][1] as string).get('token')).toBe('old-token');
});

it('links Discord using its unwrapped identity response', async () => {
	find.mockResolvedValue(null);
	get.mockResolvedValue({data: {id: 'discord-user'}});
	jest.mocked(getOrCreateUserProfile).mockResolvedValue({id: 'profile'} as any);
	await linkOAuthAccount('discord', user, 'code', 'http://localhost:3000/oauth/discord');
	expect(updateUserProfile).toHaveBeenCalledWith({id: 'profile'}, {discord_id: 'discord-user'});
});

it('reports expired authorization codes without leaking provider credentials', async () => {
	post.mockRejectedValue({
		isAxiosError: true,
		response: {data: {error: 'invalid_grant'}},
		config: {secret: 'test-secret'},
	});
	await expect(linkOAuthAccount('wca', user, 'code', redirectUri)).rejects.toThrow(
		'This authorization expired or was already used',
	);
	expect(create).not.toHaveBeenCalled();
	expect(update).not.toHaveBeenCalled();
});

it('identifies an externally revoked grant after WCA rejects both access and refresh tokens', async () => {
	get.mockRejectedValue({isAxiosError: true, response: {status: 401}});
	post.mockRejectedValue({isAxiosError: true, response: {data: {error: 'invalid_grant'}}});
	await expect(getIntegrationGetMe('wca', user)).rejects.toBeInstanceOf(RevokedIntegrationError);
});

it('does not treat a temporary refresh failure as revoked access', async () => {
	get.mockRejectedValue({isAxiosError: true, response: {status: 401}});
	post.mockRejectedValue({isAxiosError: true, response: {status: 503}});
	await expect(getIntegrationGetMe('wca', user)).rejects.not.toBeInstanceOf(
		RevokedIntegrationError,
	);
});

it('allows local unlinking when remote revocation fails', async () => {
	post.mockRejectedValue({isAxiosError: true, response: {status: 400}});
	await expect(revokeIntegration('wca', user)).resolves.toBeUndefined();
});

it('allows local unlinking when the provider secret is missing', async () => {
	delete process.env.WCA_SECRET;
	await expect(revokeIntegration('wca', user)).resolves.toBeUndefined();
});

it('still clears the Discord profile link when remote revocation fails', async () => {
	post.mockRejectedValue({isAxiosError: true, response: {status: 503}});
	jest.mocked(getOrCreateUserProfile).mockResolvedValue({id: 'profile'} as any);
	await revokeIntegration('discord', user);
	expect(updateUserProfile).toHaveBeenCalledWith({id: 'profile'}, {discord_id: null});
});

it('reports revoked access when the refreshed token is also rejected, without retrying again', async () => {
	get.mockRejectedValue({isAxiosError: true, response: {status: 401}});
	await expect(getIntegrationGetMe('wca', user)).rejects.toBeInstanceOf(RevokedIntegrationError);
	expect(post).toHaveBeenCalledTimes(1);
	expect(get).toHaveBeenCalledTimes(2);
});

it('does not retry a token that was already refreshed because it expired', async () => {
	find.mockResolvedValue({...integration, auth_expires_at: BigInt(1)});
	get.mockRejectedValue({isAxiosError: true, response: {status: 401}});
	await expect(getIntegrationGetMe('wca', user)).rejects.toBeInstanceOf(RevokedIntegrationError);
	expect(post).toHaveBeenCalledTimes(1);
	expect(get).toHaveBeenCalledTimes(1);
});
