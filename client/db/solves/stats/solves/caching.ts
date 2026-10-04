import {FilterSolvesOptions} from '@/db/solves/query';
import {Solve} from '@/types/solve';
import {getNumberToDecimalPoints} from '@/util/time';
import jsonStr from 'json-stable-stringify';

type CacheType = 'avg_current' | 'avg_pb' | 'avg_worst' | 'single_pb' | 'single_worst';

export interface SolveCacheKey {
	type: CacheType;
	filterOptions: FilterSolvesOptions;
	averageCount?: number;
}

export type SolveStatInput = {
	time: number;
	solve?: Solve;
	solves?: Solve[];
};

export type SolveStat = SolveCacheKey & {
	cacheKey: string;
	solveIds: Set<string>;
	solve?: Solve;
	solves?: Solve[];
	time: number;
};

// Every given field must match. For filterOptions, each given key must equal the stat's filter value for that key.
interface SolveStatCacheFilter {
	type?: CacheType;
	cacheKey?: string;
	filterOptions?: FilterSolvesOptions;
	solve?: Pick<Solve, 'id'>;
}

// In memory only: rebuilt lazily after every load, and invalidated as solves change
const solveStatCache = new Map<string, SolveStat>();

function matchesFilter(stat: SolveStat, filter: SolveStatCacheFilter): boolean {
	if (filter.type != null && stat.type !== filter.type) {
		return false;
	}
	if (filter.cacheKey != null && stat.cacheKey !== filter.cacheKey) {
		return false;
	}
	if (filter.solve != null && stat.solve?.id !== filter.solve.id) {
		return false;
	}

	if (filter.filterOptions != null) {
		const options = filter.filterOptions;
		for (const key of Object.keys(options) as Array<keyof FilterSolvesOptions>) {
			if (stat.filterOptions?.[key] !== options[key]) {
				return false;
			}
		}
	}

	return true;
}

function getCacheKeyString(cacheKey: SolveCacheKey): string {
	return jsonStr(cacheKey) ?? '';
}

export function fetchSolveCache(cacheKey: SolveCacheKey) {
	return solveStatCache.get(getCacheKeyString(cacheKey)) ?? null;
}

// Used for invalidating cache. Returns a snapshot, so callers may clear entries while iterating.
export function fetchAllSolveCaches(filter: SolveStatCacheFilter) {
	const out: SolveStat[] = [];
	for (const stat of solveStatCache.values()) {
		if (matchesFilter(stat, filter)) {
			out.push(stat);
		}
	}
	return out;
}

export function clearSingleSolveStatCache(cacheStr: string) {
	solveStatCache.delete(cacheStr);
}

// Only clears stats made of a single solve (PB and worst singles)
export function clearSolveStatCache(filter: SolveStatCacheFilter) {
	for (const stat of fetchAllSolveCaches(filter)) {
		if (stat.solve) {
			solveStatCache.delete(stat.cacheKey);
		}
	}
}

export function clearAllSolveStatCache() {
	solveStatCache.clear();
}

// Caches a result given a key
export function cacheSolveStat(cacheKey: SolveCacheKey, result: SolveStatInput): SolveStat {
	const resultSolves = result.solve ? [result.solve] : result.solves || [];

	const cacheVal: SolveStat = {
		...cacheKey,
		cacheKey: getCacheKeyString(cacheKey),
		time: getNumberToDecimalPoints(result.time, 3),
		solveIds: new Set(resultSolves.map((s) => s.id)),
		solve: result.solve,
		solves: resultSolves,
	};

	// The server never has local solves, and must not share cached state between requests
	if (typeof window !== 'undefined') {
		solveStatCache.set(cacheVal.cacheKey, cacheVal);
	}

	return cacheVal;
}
