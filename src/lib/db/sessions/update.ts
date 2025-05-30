import {Session} from '@/generated/zod';
import {emitEvent} from '@/lib/util/event_handler';
import {updateOfflineHash} from '@/lib/util/offline';
import {api, apiUtils} from '@/trpc/react';
import {getSolveDb} from '../solves/init';
import {clearSolveStatCache} from '../solves/stats/solves/caching';
import {getSessionDb} from './init';
import {fetchSessionById, fetchSessions} from './query';

export async function createSessionDb(sessionInput: Partial<Session>) {
	const sessionDb = getSessionDb();
	let session = sessionInput as Session;

	if (!sessionInput.demo_mode) {
		session = await api.session.createSession.mutate({
			name: session.name,
			order: 0,
		});
	}

	sessionDb.insert({
		...session,
		order: 0,
	});
	updateLocalDbOrderValueForAllSessions();

	postProcessDbUpdate(session, false);

	return session;
}

export async function deleteSessionDb(session: Session) {
	const sessionDb = getSessionDb();
	const solveDb = getSolveDb();

	sessionDb.remove(session);
	solveDb.removeWhere({
		session_id: session.id,
	});

	postProcessDbUpdate(session);
	updateLocalDbOrderValueForAllSessions();

	await api.session.deleteSession.mutate({
		id: session.id,
	});
}

export async function reorderSessions(sessionIds: string[]) {
	updateLocalDbOrderValuesForSessionIds(sessionIds);

	await api.session.reorderSessions.mutate({
		ids: sessionIds,
	});
}

function updateLocalDbOrderValueForAllSessions() {
	const sessionIds = fetchSessions().map((s) => s.id);
	updateLocalDbOrderValuesForSessionIds(sessionIds);
}

function updateLocalDbOrderValuesForSessionIds(ids: string[]) {
	const sessionDb = getSessionDb();

	for (let i = 0; i < ids.length; i += 1) {
		const sessionId = ids[i];
		const session = fetchSessionById(sessionId);

		const updated = sessionDb.update({
			...session,
			order: i,
		});

		postProcessDbUpdate(updated, false);
	}
}

export async function updateSessionDb(session: Session, input: Partial<Session>) {
	const sessionDb = getSessionDb();

	sessionDb.update({
		...session,
		...input,
	});
	postProcessDbUpdate(session, false);

	await apiUtils.session.updateSession({
		id: session.id,
		input: {
			...input,
		},
	});
}

export async function mergeSessionsDb(oldSessionId: string, newSessionId: string) {
	const solvesDb = getSolveDb();
	const sessionsDb = getSessionDb();

	// First, update all the solves with the old session ID to have the new session ID
	solvesDb.findAndUpdate(
		{
			session_id: oldSessionId,
		},
		(solve) => {
			solve.session_id = newSessionId;
		},
	);

	// Next, delete the old session from the local DB
	const oldSession = fetchSessionById(oldSessionId);
	const newSession = fetchSessionById(newSessionId);

	if (oldSession) {
		sessionsDb.remove(oldSession);
		postProcessDbUpdate(oldSession, true);
	}

	if (newSession) {
		postProcessDbUpdate(newSession, true);
	}

	updateLocalDbOrderValueForAllSessions();

	await api.session.mergeSessions.mutate({
		oldSessionId,
		newSessionId,
	});
}

function postProcessDbUpdate(session: Session, clearSolveCache = true) {
	if (clearSolveCache) {
		clearSolveStatCache({
			filterOptions: {
				session_id: session.id,
			},
		});
	}

	emitEvent('solveDbUpdatedEvent');
	emitEvent('sessionsDbUpdatedEvent', session);

	updateOfflineHash();
}
