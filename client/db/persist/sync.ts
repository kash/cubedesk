import {postReplaced} from '@/db/persist/broadcast';
import {CubedeskDb, DATA_VERSION, disablePersistence, getDatabase} from '@/db/persist/database';
import {getLiveTabIds} from '@/db/persist/locks';
import {clearLocalDataStaleMark, enqueueWrite, flushWrites, isLocalDataMarkedStale} from '@/db/persist/writes';
import {getSessionDb, initSessionDb} from '@/db/sessions/init';
import {getSolveDb, initSolveDb} from '@/db/solves/init';
import {clearAllSolveStatCache} from '@/db/solves/stats/solves/caching';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import {UserAccount} from '@/types/user';
import {trpc} from '@/util/trpc';
import {v4 as uuid} from 'uuid';

type SyncUser = Pick<UserAccount, 'id' | 'offline_hash'>;

interface LocalSnapshot {
	solves: Solve[];
	sessions: Session[];
}

/**
 * Reads the local copy of the user's solves and sessions, if it is known to match the server. Returns null when it
 * can't be trusted (or read in time), in which case data must be fetched from the server.
 *
 * The local copy is current when it was synced at the server's current offline hash, nothing marked it stale since,
 * and no change is still waiting on its hash update.
 */
export async function loadLocalSnapshot(user: SyncUser, timeoutMs: number): Promise<LocalSnapshot | null> {
	const db = getDatabase();
	if (!db || isLocalDataMarkedStale()) {
		return null;
	}

	const read = readValidSnapshot(db, user).catch((error) => {
		console.error('Could not read local data', error);
		if (error?.name === 'OpenFailedError' || error?.name === 'MissingAPIError') {
			// e.g. private browsing modes that block IndexedDB
			disablePersistence('open failed');
		}
		return null;
	});

	// A late result is ignored: by then the caller has fetched from the server instead
	return Promise.race([read, delay(timeoutMs).then(() => null)]);
}

async function readValidSnapshot(db: CubedeskDb, user: SyncUser): Promise<LocalSnapshot | null> {
	return db.transaction('r', [db.meta, db.pendingOps, db.solves, db.sessions], async () => {
		const meta = await db.meta.get('sync');
		const valid =
			!!meta &&
			meta.valid &&
			meta.userId === user.id &&
			meta.dataVersion === DATA_VERSION &&
			meta.hash === (user.offline_hash ?? null);

		if (!valid || (await db.pendingOps.count())) {
			return null;
		}

		const [solves, sessions] = await Promise.all([db.solves.toArray(), db.sessions.toArray()]);
		return {solves, sessions};
	});
}

/**
 * Loads all solves and sessions from the server into memory, and replaces the local copy with them.
 *
 * The new local copy is marked as synced at `user.offline_hash`, which must have been read before this fetch. Pass
 * `forceNewHash` when that hash may be outdated (e.g. after a server-side bulk change), so a new one is set first.
 */
export async function refetchSolvesAndSessions(user: SyncUser, options: {forceNewHash?: boolean} = {}) {
	let hash = user.offline_hash ?? null;
	let persist = !!getDatabase();
	let orphanOpIds: string[] = [];

	if (persist) {
		try {
			const pending = await findPendingOps();
			orphanOpIds = pending.orphanIds;

			// A change may have reached the server without its hash update (e.g. its tab closed in between), so other
			// devices may not know about it. Set a new hash before fetching to make them resync too.
			if (pending.any || options.forceNewHash) {
				hash = uuid();
				await trpc.user.updateOfflineHash.mutate({hash});
			}
		} catch (error) {
			console.error('Could not prepare local data resync', error);
			persist = false;
		}
	}

	let solves: Solve[];
	let sessions: Session[];
	try {
		const [listedSolves, listedSessions] = await Promise.all([trpc.solve.list.query(), trpc.session.list.query()]);
		// The list is a lean subset of solve fields, which the local store has always held as Solve
		solves = listedSolves as unknown as Solve[];
		sessions = listedSessions;
	} catch (error) {
		console.error('Could not fetch solves and sessions', error);
		initSolveDb([]);
		initSessionDb([]);
		enqueueWrite('invalidate', (db) => db.meta.update('sync', {valid: false}).then(() => undefined));
		return;
	}

	initSolveDb(solves);
	initSessionDb(sessions);

	if (persist) {
		writeSnapshot(user.id, hash, orphanOpIds);
	} else {
		enqueueWrite('invalidate', (db) => db.meta.update('sync', {valid: false}).then(() => undefined));
	}
}

// Without Web Locks, an op this old is assumed to belong to a closed tab
const ORPHAN_OP_AGE_MS = 5 * 60 * 1000;

/**
 * Finds pending ops, and which of them were left behind by tabs that are no longer open
 */
async function findPendingOps(): Promise<{any: boolean; orphanIds: string[]}> {
	const db = getDatabase();
	if (!db) {
		return {any: false, orphanIds: []};
	}

	const ops = await db.pendingOps.toArray();
	if (!ops.length) {
		return {any: false, orphanIds: []};
	}

	const liveTabs = await getLiveTabIds();
	const orphans = liveTabs
		? ops.filter((op) => !liveTabs.has(op.tabId))
		: ops.filter((op) => Date.now() - op.createdAt > ORPHAN_OP_AGE_MS);

	return {any: true, orphanIds: orphans.map((op) => op.id)};
}

/**
 * Replaces the local copy with the in-memory solves and sessions, in one transaction so other tabs never see a
 * partial copy. The copy only counts as valid if no other tab has a change in flight when it is written.
 */
function writeSnapshot(userId: string, hash: string | null, orphanOpIds: string[]) {
	const solves = getSolveDb().all();
	const sessions = getSessionDb().all();

	enqueueWrite('snapshot', async (db) => {
		await db.transaction('rw', [db.meta, db.pendingOps, db.solves, db.sessions], async () => {
			await db.meta.delete('sync');
			await db.pendingOps.bulkDelete(orphanOpIds);
			await db.solves.clear();
			await db.sessions.clear();
			await db.solves.bulkAdd(solves);
			await db.sessions.bulkAdd(sessions);

			const changesInFlight = await db.pendingOps.count();
			await db.meta.put({
				key: 'sync',
				userId,
				hash,
				valid: !changesInFlight,
				dataVersion: DATA_VERSION,
				updatedAt: Date.now(),
			});
		});

		clearLocalDataStaleMark();
		postReplaced();
	});
}

/**
 * Clears all local solves and sessions, in memory and in the local DB (e.g. on logout)
 */
export async function clearLocalData() {
	await flushWrites(1500);

	const db = getDatabase();
	if (db) {
		try {
			await db.transaction('rw', [db.meta, db.pendingOps, db.solves, db.sessions], async () => {
				await Promise.all([db.meta.clear(), db.pendingOps.clear(), db.solves.clear(), db.sessions.clear()]);
			});
		} catch (error) {
			console.error('Could not clear local data', error);
		}
	}

	getSolveDb().clear();
	getSessionDb().clear();
	clearAllSolveStatCache();
}

function delay(ms: number) {
	return new Promise<void>((resolve) => setTimeout(resolve, ms));
}
