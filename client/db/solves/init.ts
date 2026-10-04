import {MemoryTable} from '@/db/memory/table';
import {clearAllSolveStatCache} from '@/db/solves/stats/solves/caching';
import {Solve} from '@/types/solve';
import {emitEvent} from '@/util/event_handler';

// Synchronous mirror of the user's solves. Persisted to IndexedDB by @/db/persist. Only browser entry points write
// to it, so it stays empty on the server.
const solveDb = new MemoryTable<Solve>(['started_at', 'time']);

export function getSolveDb(): MemoryTable<Solve> {
	return solveDb;
}

// Timestamps may arrive as strings. Solves read back from the local DB are already normalized, so they aren't copied.
function normalizeSolve(solve: Solve): Solve {
	if (typeof solve.started_at === 'number' && typeof solve.ended_at === 'number') {
		return solve;
	}

	return {
		...solve,
		started_at: toTimestamp(solve.started_at),
		ended_at: toTimestamp(solve.ended_at),
	};
}

function toTimestamp(value: unknown): number {
	return typeof value === 'number' ? value : parseInt(String(value), 10);
}

/**
 * Replaces all local solves
 */
export function initSolveDb(solveList: Solve[]) {
	if (typeof window === 'undefined') {
		return;
	}

	solveDb.replaceAll(solveList.map(normalizeSolve));
	clearAllSolveStatCache();
	emitEvent('solveDbUpdatedEvent');
}
