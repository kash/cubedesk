import {Session} from '@/types/session';
import {getLokiDb} from '../lokijs';

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
