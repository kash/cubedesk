import type {Session} from '@/generated/prisma/client';
import type {SessionInput} from '@/types/session';
import uniqid from 'uniqid';
import {getPrisma} from '../database';

export function getSessionById(id: string) {
	return getPrisma().session.findUnique({
		where: {
			id,
		},
	});
}

export function getSessionsByUserId(userId: string) {
	return getPrisma().session.findMany({
		where: {
			user_id: userId,
		},
		orderBy: [
			{
				order: 'asc',
			},
			{
				created_at: 'desc',
			},
		],
	});
}

export function getSessionsByIds(userId: string, ids: string[]) {
	return getPrisma().session.findMany({
		where: {
			user_id: userId,
			id: {
				in: ids,
			},
		},
	});
}

export function createSession(userId: string, input: {id?: string; name: string}) {
	return getPrisma().session.create({
		data: {
			id: uniqid('se-'),
			...input,
			user_id: userId,
			order: 0,
		},
	});
}

export function bulkCreateSessions(userId: string, sessions: SessionInput[]) {
	return getPrisma().session.createMany({
		data: sessions.map((session) => ({
			...session,
			user_id: userId,
		})),
	});
}

export function updateSession(id: string, input: {name?: string; order?: number}) {
	return getPrisma().session.update({
		where: {
			id,
		},
		data: input,
	});
}

export function deleteSession(id: string) {
	return getPrisma().session.delete({
		where: {
			id,
		},
	});
}

export function moveSolvesBetweenSessions(userId: string, oldSessionId: string, newSessionId: string) {
	return getPrisma().solve.updateMany({
		where: {
			user_id: userId,
			session_id: oldSessionId,
		},
		data: {
			session_id: newSessionId,
		},
	});
}

export async function updateOrderOfSessionsForUser(userId: string) {
	const sessions = await getSessionsByUserId(userId);
	return updateOrderOfSessions(sessions);
}

export function updateOrderOfSessions(sessions: Session[]): Promise<Session[]> {
	const txs = sessions.map((session, index) =>
		getPrisma().session.update({
			where: {
				id: session.id,
			},
			data: {
				order: index,
			},
		})
	);

	return getPrisma().$transaction(txs);
}
