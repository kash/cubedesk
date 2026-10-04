import {postChanges} from '@/db/persist/broadcast';
import {CubedeskDb, disablePersistence, getActiveUserId, getDatabase} from '@/db/persist/database';
import {TAB_ID, withLock} from '@/db/persist/locks';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import {trpc} from '@/util/trpc';
import * as Sentry from '@sentry/browser';
import {v4 as uuid} from 'uuid';

// Set when a local write fails, in case the failure also prevents recording that in the DB itself
const STALE_FLAG_KEY = 'cubedesk.localDataStale';
const HASH_LOCK = 'cubedesk-offline-hash';

export interface LocalChanges {
	putSolves?: Solve[];
	deleteSolveIds?: string[];
	putSessions?: Session[];
	deleteSessionIds?: string[];
}

// Local writes run one at a time, in the order they were made
let writeQueue: Promise<void> = Promise.resolve();

/**
 * Queues a write to the local DB. Never rejects: a failed write marks the local copy stale and turns off persistence
 * for this tab, which keeps working from memory and the server.
 */
export function enqueueWrite(label: string, write: (db: CubedeskDb) => Promise<void>): Promise<void> {
	const run = writeQueue.then(async () => {
		const db = getDatabase();
		if (!db) {
			return;
		}

		try {
			await write(db);
		} catch (error) {
			await handleWriteFailure(label, error);
		}
	});

	writeQueue = run;
	return run;
}

/**
 * Waits for queued writes to finish, or for the timeout
 */
export function flushWrites(timeoutMs: number): Promise<void> {
	return Promise.race([writeQueue, delay(timeoutMs)]);
}

export function isLocalDataMarkedStale() {
	try {
		return localStorage.getItem(STALE_FLAG_KEY) !== null;
	} catch {
		return true;
	}
}

export function clearLocalDataStaleMark() {
	try {
		localStorage.removeItem(STALE_FLAG_KEY);
	} catch {
		// Storage unavailable: the next load can't trust local data anyway
	}
}

async function handleWriteFailure(label: string, error: unknown) {
	console.error(`Local data write failed (${label})`, error);
	Sentry.captureException(error, {tags: {area: 'local-db', write: label}});

	try {
		localStorage.setItem(STALE_FLAG_KEY, String(Date.now()));
	} catch {
		// Fall through to marking the DB itself
	}

	try {
		await getDatabase()?.meta.update('sync', {valid: false});
	} catch {
		// The stale flag covers this
	}

	disablePersistence(`write failed: ${label}`);
}

async function applyChanges(db: CubedeskDb, changes: LocalChanges) {
	const {putSolves = [], deleteSolveIds = [], putSessions = [], deleteSessionIds = []} = changes;

	if (putSolves.length) await db.solves.bulkPut(putSolves);
	if (deleteSolveIds.length) await db.solves.bulkDelete(deleteSolveIds);
	if (putSessions.length) await db.sessions.bulkPut(putSessions);
	if (deleteSessionIds.length) await db.sessions.bulkDelete(deleteSessionIds);
}

function notifyOtherTabs(changes: LocalChanges) {
	const {putSolves = [], deleteSolveIds = [], putSessions = [], deleteSessionIds = []} = changes;
	postChanges(
		[...putSolves.map((solve) => solve.id), ...deleteSolveIds],
		[...putSessions.map((session) => session.id), ...deleteSessionIds]
	);
}

export interface LocalOp {
	// Resolves once the op (and any local-first changes) are recorded locally, or after a short timeout
	durable: Promise<void>;
	// The server accepted the change. Applies any changes that had to wait for the server.
	confirm: (changes?: LocalChanges) => void;
	// The server call failed. Applies any changes that undo the local-first ones. The local copy may still differ from
	// the server, which may have applied the change (e.g. a lost response), so the local copy is marked stale and other
	// devices are told to resync.
	fail: (revert?: LocalChanges) => void;
}

/**
 * Starts a change that is mirrored locally and sent to the server.
 *
 * The op is recorded in the local DB before the server is called and removed once the offline hash has been
 * updated, so if this tab dies in between, the next load knows the server may have changed without other devices
 * being told, and resyncs.
 */
export function beginOp(kind: string, localFirst: LocalChanges = {}): LocalOp {
	const id = uuid();

	const recorded = enqueueWrite(kind, async (db) => {
		await db.transaction('rw', [db.pendingOps, db.solves, db.sessions], async () => {
			await db.pendingOps.add({id, tabId: TAB_ID, kind, createdAt: Date.now()});
			await applyChanges(db, localFirst);
		});
		notifyOtherTabs(localFirst);
	});

	return {
		// Don't hold up the server call for long if IndexedDB is slow. The op is still recorded in order.
		durable: Promise.race([recorded, delay(2000)]),
		confirm: (afterServer = {}) => {
			enqueueWrite(kind, async (db) => {
				await db.transaction('rw', [db.solves, db.sessions], () => applyChanges(db, afterServer));
				notifyOtherTabs(afterServer);
			});
			scheduleHashBump(id);
		},
		fail: (revert = {}) => {
			enqueueWrite(kind, async (db) => {
				await db.transaction('rw', [db.solves, db.sessions, db.meta], async () => {
					await applyChanges(db, revert);
					await db.meta.update('sync', {valid: false});
				});
				notifyOtherTabs(revert);
			});
			scheduleHashBump(id);
		},
	};
}

// Ops whose server call has finished, but whose hash update hasn't completed yet
const finishedOpIds = new Set<string>();
let hashBumpRunning = false;
let hashBumpRequested = false;

function scheduleHashBump(opId: string) {
	// Demo mode: there is no account whose other devices need telling
	if (!getActiveUserId()) {
		return;
	}

	finishedOpIds.add(opId);
	hashBumpRequested = true;

	if (hashBumpRunning) {
		return;
	}

	hashBumpRunning = true;
	(async () => {
		while (hashBumpRequested) {
			hashBumpRequested = false;
			await bumpHashForFinishedOps();
		}
		hashBumpRunning = false;
	})();
}

/**
 * Tells other devices that this user's data changed, and keeps the local copy trusted if nothing else changed it.
 *
 * Swaps the server's offline hash from the one the local copy was synced at to a new one. If the swap fails,
 * another client changed data in between, so the local copy is marked stale.
 */
async function bumpHashForFinishedOps() {
	const opIds = Array.from(finishedOpIds);
	const nextHash = uuid();

	try {
		// Let the confirmed changes reach the local DB before claiming it matches the server
		await writeQueue;

		const db = getDatabase();
		if (!db) {
			await trpc.user.updateOfflineHash.mutate({hash: nextHash});
			opIds.forEach((id) => finishedOpIds.delete(id));
			return;
		}

		await withLock(HASH_LOCK, async () => {
			const before = await db.meta.get('sync');
			const {applied} = await trpc.user.updateOfflineHash.mutate({
				hash: nextHash,
				expected: before?.hash ?? null,
			});

			await db.transaction('rw', [db.meta, db.pendingOps], async () => {
				const current = await db.meta.get('sync');
				if (current) {
					// Another tab may have rewritten the local copy while the server call was in flight
					const unchanged = !!before && current.hash === before.hash;
					await db.meta.put({
						...current,
						hash: applied && unchanged ? nextHash : current.hash,
						valid: current.valid && applied && unchanged,
						updatedAt: Date.now(),
					});
				}
				await db.pendingOps.bulkDelete(opIds);
			});
		});

		opIds.forEach((id) => finishedOpIds.delete(id));
	} catch (error) {
		// The ops stay pending: they're retried with the next change, or resynced on the next load
		console.error('Could not update the offline hash', error);
	}
}

function delay(ms: number) {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
