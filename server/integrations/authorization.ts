import type {Request, Response} from 'express';
import {IntegrationType, LINKED_SERVICES} from '@/shared/integration';
import {TRPCError} from '@trpc/server';
import {randomUUID} from 'crypto';
import jwt from 'jsonwebtoken';

const cookieOptions = {httpOnly: true, sameSite: 'lax' as const, path: '/trpc'};
const cookieName = (type: IntegrationType) => `oauth_${type}`;

export function getOAuthRedirectUri(type: IntegrationType) {
	if (!process.env.BASE_URI) {
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: 'Account linking is not configured.',
		});
	}
	return new URL(`/oauth/${type}`, process.env.BASE_URI).href;
}

export function startAuthorization(type: IntegrationType, userId: string, res: Response) {
	const service = LINKED_SERVICES[type];
	if (!process.env[`${type.toUpperCase()}_SECRET`] || !process.env.JWT_SECRET) {
		throw new TRPCError({
			code: 'INTERNAL_SERVER_ERROR',
			message: `${service.name} linking is not configured. Please try again later.`,
		});
	}
	const redirectUri = getOAuthRedirectUri(type);
	const state = jwt.sign({integrationType: type, redirectUri}, process.env.JWT_SECRET, {
		subject: userId,
		expiresIn: '10m',
		jwtid: randomUUID(),
	});
	res.cookie(cookieName(type), state, {
		...cookieOptions,
		secure: new URL(redirectUri).protocol === 'https:',
		maxAge: 10 * 60 * 1000,
	});
	const url = new URL(service.authEndpoint);
	url.search = new URLSearchParams({
		client_id: service.clientId,
		response_type: service.responseType,
		scope: service.scope.join(' '),
		redirect_uri: redirectUri,
		state,
	}).toString();
	return url.href;
}

export function finishAuthorization(
	type: IntegrationType,
	userId: string,
	state: string,
	req: Request,
	res: Response,
) {
	try {
		if (!state || req.cookies?.[cookieName(type)] !== state) {
			throw new Error('Missing state');
		}
		const payload = jwt.verify(state, process.env.JWT_SECRET || '', {algorithms: ['HS256']});
		if (
			typeof payload === 'string' ||
			payload.sub !== userId ||
			payload.integrationType !== type ||
			payload.redirectUri !== getOAuthRedirectUri(type)
		) {
			throw new Error('Invalid state');
		}
		res.clearCookie(cookieName(type), cookieOptions);
		return payload.redirectUri as string;
	} catch {
		throw new TRPCError({
			code: 'BAD_REQUEST',
			message:
				'This linking request expired or belongs to another session. Please start again.',
		});
	}
}
