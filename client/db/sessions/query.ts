import {Session} from '@/types/session';
import {fetchSolves} from '@/db/solves/query';
import {getSessionDb} from '@/db/sessions/init';

interface FetchSessionOptions {
	id?: string;
	name?: string;
}

export function fetchSessionById(id: string) {
	const sessionDb = getSessionDb();
	return sessionDb.findOne({
		id,
	});
}

export function fetchSessions(options: FetchSessionOptions = {}) {
	const sessionDb = getSessionDb();
	return sessionDb
		.chain()
		.find(options)
		.sort((a, b) => {
			if (a.order < b.order) {
				return -1;
			} else if (a.order > b.order) {
				return 1;
			} else {
				const aDate = new Date(a.created_at);
				const bDate = new Date(b.created_at);

				return bDate.getTime() - aDate.getTime();
			}
		})
		.data();
}

export function getCubeTypesFromSession(session: Session) {
	if (!session) {
		return [];
	}

	const types = new Set<string>();
	const solves = fetchSolves({
		session_id: session.id,
	});

	for (const solve of solves) {
		types.add(solve.cube_type);
	}

	return Array.from(types);
}
