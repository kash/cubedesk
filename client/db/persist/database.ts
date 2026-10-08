import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import Dexie, {type EntityTable} from 'dexie';

/**
 * Bumping this makes every client discard its local copy and refetch from the server. The local DB is only a cache of
 * server data, so schema changes should bump this rather than write data-migrating upgrade functions.
 */
export const DATA_VERSION = 2;

export interface SyncMeta {
	key: 'sync';
	userId: string;
	// The server's offline_hash that the local snapshot corresponds to
	hash: string | null;
	// Set to false whenever local data may have diverged from the server, forcing a refetch on next load
	valid: boolean;
	dataVersion: number;
	updatedAt: number;
}

/**
 * A local change whose server mutation has not been reflected in the offline hash yet. Rows left behind by a closed
 * tab mean the server may have changed without other devices being told.
 */
export interface PendingOp {
	id: string;
	tabId: string;
	kind: string;
	createdAt: number;
}

export class CubedeskDb extends Dexie {
	solves!: EntityTable<Solve, 'id'>;
	sessions!: EntityTable<Session, 'id'>;
	meta!: EntityTable<SyncMeta, 'key'>;
	pendingOps!: EntityTable<PendingOp, 'id'>;

	constructor() {
		super('cubedesk');

		// Secondary indexes are unused for now, but allow loading solves lazily by session and event type later
		this.version(1).stores({
			solves: 'id, session_id, [session_id+started_at], [cube_type+started_at]',
			sessions: 'id',
			meta: 'key',
			pendingOps: 'id, tabId',
		});
		// cube_type was renamed to event_type. Solves stored before then are discarded by the DATA_VERSION bump.
		this.version(2).stores({
			solves: 'id, session_id, [session_id+started_at], [event_type+started_at]',
		});

		// A newer version of the app was opened in another tab. Let it upgrade, and stop persisting from this one.
		this.on('versionchange', () => {
			this.close();
			disablePersistence('versionchange');
		});
	}
}

let database: CubedeskDb | null = null;
let disabledReason: string | null = null;

/**
 * Returns the local database, or null when local persistence is unavailable (server, no IndexedDB, demo mode, or
 * after a storage failure in this tab). Callers must treat null as "memory only".
 */
export function getDatabase(): CubedeskDb | null {
	if (disabledReason || typeof window === 'undefined' || typeof indexedDB === 'undefined') {
		return null;
	}

	database ??= new CubedeskDb();
	return database;
}

export function disablePersistence(reason: string) {
	if (disabledReason) {
		return;
	}

	disabledReason = reason;
	if (reason !== 'demo') {
		console.warn(`Local data persistence disabled: ${reason}`);
	}
}

// The signed-in user whose data this tab persists. Null in demo mode and before init.
let activeUserId: string | null = null;

export function getActiveUserId() {
	return activeUserId;
}

export function setActiveUserId(userId: string) {
	activeUserId = userId;
}
