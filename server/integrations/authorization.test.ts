import type {Request, Response} from 'express';
import {finishAuthorization, startAuthorization} from './authorization';

const originalEnv = {
	BASE_URI: process.env.BASE_URI,
	WCA_SECRET: process.env.WCA_SECRET,
	JWT_SECRET: process.env.JWT_SECRET,
};
const res = {cookie: jest.fn(), clearCookie: jest.fn()} as unknown as Response;

beforeEach(() => {
	jest.clearAllMocks();
	process.env.BASE_URI = 'http://localhost:3000/';
	process.env.WCA_SECRET = 'test-secret';
	process.env.JWT_SECRET = 'test-jwt-secret';
});
afterAll(() => {
	for (const [key, value] of Object.entries(originalEnv)) {
		if (value === undefined) delete process.env[key];
		else process.env[key] = value;
	}
});

function start() {
	const url = new URL(startAuthorization('wca', 'owner', res));
	const state = url.searchParams.get('state')!;
	const req = {cookies: {oauth_wca: state}} as unknown as Request;
	return {url, state, req};
}

it('uses one canonical callback URI for authorization and token exchange', () => {
	const {url, state, req} = start();
	expect(url.searchParams.get('redirect_uri')).toBe('http://localhost:3000/oauth/wca');
	expect(finishAuthorization('wca', 'owner', state, req, res)).toBe(
		url.searchParams.get('redirect_uri'),
	);
	expect(res.cookie).toHaveBeenCalledWith(
		'oauth_wca',
		state,
		expect.objectContaining({httpOnly: true, sameSite: 'lax'}),
	);
	expect(res.clearCookie).toHaveBeenCalled();
});

it('fails before sending the user to WCA when its secret is missing', () => {
	delete process.env.WCA_SECRET;
	expect(() => start()).toThrow('WCA linking is not configured');
	expect(res.cookie).not.toHaveBeenCalled();
});

it('rejects mismatched cookies, another user, another provider, and tampered state', () => {
	const {state, req} = start();
	expect(() =>
		finishAuthorization('wca', 'owner', state, {cookies: {}} as unknown as Request, res),
	).toThrow();
	expect(() => finishAuthorization('wca', 'other-user', state, req, res)).toThrow();
	expect(() =>
		finishAuthorization(
			'discord',
			'owner',
			state,
			{cookies: {oauth_discord: state}} as unknown as Request,
			res,
		),
	).toThrow();
	expect(() =>
		finishAuthorization(
			'wca',
			'owner',
			state + 'x',
			{cookies: {oauth_wca: state + 'x'}} as unknown as Request,
			res,
		),
	).toThrow();
});

it('rejects an expired linking request', () => {
	const now = Date.now();
	const clock = jest.spyOn(Date, 'now').mockReturnValue(now);
	try {
		const {state, req} = start();
		clock.mockReturnValue(now + 11 * 60 * 1000);
		expect(() => finishAuthorization('wca', 'owner', state, req, res)).toThrow('expired');
	} finally {
		clock.mockRestore();
	}
});
