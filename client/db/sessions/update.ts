import {gqlMutateTyped} from '../../components/api';
import {getSessionDb} from './init';
import {emitEvent} from '../../util/event_handler';
import {getSolveDb} from '../solves/init';
import {clearSolveStatCache} from '../solves/stats/solves/caching';
import {Session} from '../../../server/schemas/Session.schema';
import {
	CreateSessionDocument,
	DeleteSessionDocument,
	MergeSessionsDocument,
	ReorderSessionsDocument,
	UpdateSessionDocument,
} from '../../@types/generated/graphql';
import {fetchSessionById, fetchSessions} from './query';
import {updateOfflineHash} from '../../components/layout/offline';

export async function createSessionDb(sessionInput: Partial<Session>) {
	const sessionDb = getSessionDb();
	let session = sessionInput as Session;

	if (!sessionInput.demo_mode) {
		const res = await gqlMutateTyped(CreateSessionDocument, {
			input: {
				name: session.name,
			},
		});

		session = res.data.createSession;
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

	await gqlMutateTyped(DeleteSessionDocument, {
		id: session.id,
	});
}

export async function reorderSessions(sessionIds: string[]) {
	updateLocalDbOrderValuesForSessionIds(sessionIds);

	await gqlMutateTyped(ReorderSessionsDocument, {
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

	await gqlMutateTyped(UpdateSessionDocument, {
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
		}
	);

	// Next, delete the old session from the local DB
	const oldSession = fetchSessionById(oldSessionId);
	const newSession = fetchSessionById(newSessionId);

	sessionsDb.remove(oldSession);

	// Finally, update the database
	postProcessDbUpdate(oldSession, true);
	postProcessDbUpdate(newSession, true);
	updateLocalDbOrderValueForAllSessions();

	await gqlMutateTyped(MergeSessionsDocument, {
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
