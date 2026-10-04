import {MemoryTable} from '@/db/memory/table';
import {Session} from '@/types/session';
import {emitEvent} from '@/util/event_handler';

// Synchronous mirror of the user's sessions. Persisted to IndexedDB by @/db/persist. Only browser entry points
// write to it, so it stays empty on the server.
const sessionDb = new MemoryTable<Session>();

export function getSessionDb(): MemoryTable<Session> {
	return sessionDb;
}

/**
 * Replaces all local sessions
 */
export function initSessionDb(sessions: Session[]) {
	if (typeof window === 'undefined') {
		return;
	}

	sessionDb.replaceAll(sessions);
	emitEvent('sessionsDbUpdatedEvent');
}
