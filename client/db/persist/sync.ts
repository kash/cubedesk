import {postReplaced} from '@/db/persist/broadcast';
import {
	CubedeskDb,
	DATA_VERSION,
	disablePersistence,
	getDatabase,
	SyncMeta,
} from '@/db/persist/database';
import {getLiveTabIds} from '@/db/persist/locks';
import {
	clearLocalDataStaleMark,
	enqueueWrite,
	flushWrites,
	isLocalDataMarkedStale,
} from '@/db/persist/writes';
import {getSessionDb, initSessionDb} from '@/db/sessions/init';
import {getSolveDb, initSolveDb} from '@/db/solves/init';
import {clearAllSolveStatCache} from '@/db/solves/stats/solves/caching';
import {Session} from '@/types/session';
import {Solve} from '@/types/solve';
import {UserAccount} from '@/types/user';
import {LoadTrace, noLoadTrace} from '@/util/load-trace';
import {trpc} from '@/util/trpc';
import {v4 as uuid} from 'uuid';

type SyncUser = Pick<UserAccount, 'id' | 'offline_hash'>;

interface LocalSnapshot {
	solves: Solve[];
	sessions: Session[];
}

type LocalSnapshotResult = {snapshot: LocalSnapshot} | {snapshot: null; missReason: string};

/**
 * Reads the local copy of the user's solves and sessions, if it is known to match the server. Returns no snapshot,
 * and why, when it can't be trusted (or read in time), in which case data must be fetched from the server.
 *
 * The local copy is current when it was synced at the server's current offline hash, nothing marked it stale since,
 * and no change is still waiting on its hash update.
 */
export async function loadLocalSnapshot(
	user: SyncUser,
	timeoutMs: number,
): Promise<LocalSnapshotResult> {
	const db = getDatabase();
	if (!db) {
		return miss('no local database');
	}
	if (isLocalDataMarkedStale()) {
		return miss('marked stale');
	}

	const read = readValidSnapshot(db, user).catch((error) => {
		console.error('Could not read local data', error);
		if (error?.name === 'OpenFailedError' || error?.name === 'MissingAPIError') {
			// e.g. private browsing modes that block IndexedDB
			disablePersistence('open failed');
		}
		return miss('read failed');
	});

	// A late result is ignored: by then the caller has fetched from the server instead
	return Promise.race([read, delay(timeoutMs).then(() => miss('timed out'))]);
}

async function readValidSnapshot(db: CubedeskDb, user: SyncUser): Promise<LocalSnapshotResult> {
	return db.transaction('r', [db.meta, db.pendingOps, db.solves, db.sessions], async () => {
		const invalidReason = getInvalidReason(await db.meta.get('sync'), user);
		if (invalidReason) {
			return miss(invalidReason);
		}
		if (await db.pendingOps.count()) {
			return miss('pending changes');
		}

		const [solves, sessions] = await Promise.all([db.solves.toArray(), db.sessions.toArray()]);
		return {snapshot: {solves, sessions}};
	});
}

function getInvalidReason(meta: SyncMeta | undefined, user: SyncUser): string | null {
	if (!meta) {
		return 'never synced';
	}
	if (!meta.valid) {
		return 'marked invalid';
	}
	if (meta.userId !== user.id) {
		return 'different user';
	}
	if (meta.dataVersion !== DATA_VERSION) {
		return 'old data version';
	}
	if (meta.hash !== (user.offline_hash ?? null)) {
		return 'offline hash changed';
	}
	return null;
}

function miss(missReason: string): LocalSnapshotResult {
	return {snapshot: null, missReason};
}

/**
 * Loads all solves and sessions from the server into memory, and replaces the local copy with them.
 *
 * The new local copy is marked as synced at `user.offline_hash`, which must have been read before this fetch. Pass
 * `forceNewHash` when that hash may be outdated (e.g. after a server-side bulk change), so a new one is set first.
 */
export async function refetchSolvesAndSessions(
	user: SyncUser,
	options: {forceNewHash?: boolean; trace?: LoadTrace} = {},
) {
	const {trace = noLoadTrace} = options;
	let hash = user.offline_hash ?? null;
	let persist = !!getDatabase();
	let orphanOpIds: string[] = [];

	if (persist) {
		try {
			const pending = await trace.step('find pending ops', findPendingOps);
			orphanOpIds = pending.orphanIds;

			// A change may have reached the server without its hash update (e.g. its tab closed in between), so other
			// devices may not know about it. Set a new hash before fetching to make them resync too.
			if (pending.any || options.forceNewHash) {
				const newHash = uuid();
				hash = newHash;
				await trace.step('update offline hash', () =>
					trpc.user.updateOfflineHash.mutate({hash: newHash}),
				);
			}
		} catch (error) {
			console.error('Could not prepare local data resync', error);
			persist = false;
		}
	}

	let solves: Solve[];
	let sessions: Session[];
	try {
		const [listedSolves, listedSessions] = await Promise.all([
			trace.step('fetch solve.list', () => trpc.solve.list.query()),
			trace.step('fetch session.list', () => trpc.session.list.query()),
		]);
		// The list is a lean subset of solve fields, which the local store has always held as Solve
		solves = listedSolves as unknown as Solve[];
		sessions = listedSessions;
	} catch (error) {
		console.error('Could not fetch solves and sessions', error);
		initSolveDb([]);
		initSessionDb([]);
		enqueueWrite('invalidate', (db) =>
			db.meta.update('sync', {valid: false}).then(() => undefined),
		);
		return;
	}

	trace.set('solves.count', solves.length);
	await trace.step('fill memory', () => {
		initSolveDb(solves);
		initSessionDb(sessions);
	});

	if (persist) {
		writeSnapshot(user.id, hash, orphanOpIds);
	} else {
		enqueueWrite('invalidate', (db) =>
			db.meta.update('sync', {valid: false}).then(() => undefined),
		);
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
			await db.transaction(
				'rw',
				[db.meta, db.pendingOps, db.solves, db.sessions],
				async () => {
					await Promise.all([
						db.meta.clear(),
						db.pendingOps.clear(),
						db.solves.clear(),
						db.sessions.clear(),
					]);
				},
			);
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
