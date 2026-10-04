import {beginOp, LocalChanges, LocalOp} from '@/db/persist/writes';
import {getSessionDb} from '@/db/sessions/init';
import {fetchSessionById, fetchSessions} from '@/db/sessions/query';
import {getSolveDb} from '@/db/solves/init';
import {clearSolveStatCache} from '@/db/solves/stats/solves/caching';
import {Session} from '@/types/session';
import {emitEvent} from '@/util/event_handler';
import {trpc} from '@/util/trpc';

export async function createSessionDb(sessionInput: Partial<Session>): Promise<Session> {
	const session = sessionInput as Session;

	if (!sessionInput.demo_mode) {
		return runServerOp(
			'session.create',
			() => trpc.session.create.mutate({name: session.name}),
			(created) => {
				getSessionDb().insert({...created, order: 0});
				updateLocalDbOrderValueForAllSessions();
				postProcessDbUpdate(created, false);

				return {putSessions: getSessionDb().all()};
			}
		);
	}

	getSessionDb().insert({
		...session,
		order: 0,
	});
	updateLocalDbOrderValueForAllSessions();

	postProcessDbUpdate(session, false);

	return session;
}

export async function deleteSessionDb(session: Session) {
	const removedSolves = getSolveDb().removeWhere({
		session_id: session.id,
	});
	getSessionDb().remove(session.id);

	postProcessDbUpdate(session);
	updateLocalDbOrderValueForAllSessions();

	await runLocalFirstOp(
		'session.delete',
		session,
		{
			deleteSessionIds: [session.id],
			deleteSolveIds: removedSolves.map((solve) => solve.id),
			putSessions: getSessionDb().all(),
		},
		() =>
			trpc.session.delete.mutate({
				id: session.id,
			})
	);
}

export async function reorderSessions(sessionIds: string[]) {
	updateLocalDbOrderValuesForSessionIds(sessionIds);

	await runLocalFirstOp('session.reorder', null, {putSessions: getSessionDb().all()}, () =>
		trpc.session.reorder.mutate({
			ids: sessionIds,
		})
	);
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
		if (!session) {
			continue;
		}

		const updated = sessionDb.update({
			...session,
			order: i,
		});

		if (updated) {
			postProcessDbUpdate(updated, false);
		}
	}
}

export async function updateSessionDb(session: Session, input: Partial<Session>) {
	const updated = getSessionDb().update({
		...session,
		...input,
	});
	postProcessDbUpdate(session, false);

	await runLocalFirstOp('session.update', session, {putSessions: updated ? [updated] : []}, () =>
		trpc.session.update.mutate({
			id: session.id,
			data: {
				name: input.name,
				order: input.order,
			},
		})
	);
}

export async function mergeSessionsDb(oldSessionId: string, newSessionId: string) {
	// First, update all the solves with the old session ID to have the new session ID
	const movedSolves = getSolveDb().updateWhere(
		{
			session_id: oldSessionId,
		},
		(solve) => ({...solve, session_id: newSessionId})
	);

	// Next, delete the old session from the local DB
	const oldSession = getSessionDb().remove(oldSessionId);
	const newSession = fetchSessionById(newSessionId);

	if (oldSession) {
		postProcessDbUpdate(oldSession, true);
	}

	if (newSession) {
		postProcessDbUpdate(newSession, true);
	}
	updateLocalDbOrderValueForAllSessions();

	// Finally, update the database
	await runLocalFirstOp(
		'session.merge',
		oldSession,
		{
			putSolves: movedSolves,
			deleteSessionIds: [oldSessionId],
			putSessions: getSessionDb().all(),
		},
		() =>
			trpc.session.merge.mutate({
				oldSessionId,
				newSessionId,
			})
	);
}

/**
 * Persists changes already made in memory, then makes the server change. Server errors are rethrown.
 */
async function runLocalFirstOp(
	kind: string,
	session: Session | null,
	changes: LocalChanges,
	serverCall: () => Promise<unknown>
) {
	let op: LocalOp | null = null;
	if (!session?.demo_mode) {
		op = beginOp(kind, changes);
		await op.durable;
	}

	try {
		await serverCall();
	} catch (error) {
		op?.fail();
		throw error;
	}

	op?.confirm();
}

/**
 * Makes the server change first, then applies it in memory and persists it. Server errors are rethrown.
 */
async function runServerOp<T>(
	kind: string,
	serverCall: () => Promise<T>,
	applyLocally: (result: T) => LocalChanges
): Promise<T> {
	const op = beginOp(kind);
	await op.durable;

	let result: T;
	try {
		result = await serverCall();
	} catch (error) {
		op.fail();
		throw error;
	}

	op.confirm(applyLocally(result));
	return result;
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
}
