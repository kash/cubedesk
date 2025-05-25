import {getLokiDb} from '../lokijs';
import {Session} from '../../../server/schemas/Session.schema';

export function getSessionDb(): Collection<Session> {
	const db = getLokiDb();
	return db.getCollection('sessions');
}

export function initSessionCollection() {
	const db = getLokiDb();

	if (!getSessionDb()) {
		db.addCollection<Session>('sessions', {
			unique: ['id'],
		});
	}
}

export function initSessionDb(sessions: Session[]) {
	if (typeof window === 'undefined') {
		return;
	}

	initSessionCollection();

	for (const session of sessions) {
		getSessionDb().insert(session);
	}
}
