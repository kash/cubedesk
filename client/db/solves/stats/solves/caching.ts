import {getSolveCacheDb} from '@/db/solves/init';
import {FilterSolvesOptions} from '@/db/solves/query';
import {Solve} from '@/types/solve';
import {getNumberToDecimalPoints} from '@/util/time';
import flatten from 'flat';
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

type FilterSolveStats = LokiQuery<SolveStat>;

// Filters get flattened into dotted-key queries, so nested objects (e.g. solve) may be partial
type SolveStatCacheFilter = FilterSolveStats | {solve: Partial<Solve>};

function cleanFilterSolvesOptions(filter: SolveStatCacheFilter) {
	for (const key of Object.keys(filter)) {
		if (filter[key] === undefined || filter[key] === null) {
			delete filter[key];
		}
	}

	return flatten(filter);
}

function getCacheKeyString(cacheKey: SolveCacheKey): string {
	return jsonStr(cacheKey) ?? '';
}

export function fetchSolveCache(cacheKey: SolveCacheKey) {
	const keyStr = getCacheKeyString(cacheKey);
	return fetchSolveCacheByCacheStr(keyStr);
}

function fetchSolveCacheByCacheStr(cacheKey: string) {
	const out = fetchAllSolveCaches({
		cacheKey: cacheKey,
	});

	if (out && out.length) {
		return out[0];
	}

	return null;
}

// Used for invalidating cache
export function fetchAllSolveCaches(filter: FilterSolveStats) {
	const solveCacheDb = getSolveCacheDb();
	return solveCacheDb.find(cleanFilterSolvesOptions(filter));
}

export function clearSingleSolveStatCache(cacheStr: string) {
	const solveCacheDb = getSolveCacheDb();
	const cached = fetchSolveCacheByCacheStr(cacheStr);
	if (cached) {
		solveCacheDb.remove(cached);
	}
}

export function clearSolveStatCache(filter: SolveStatCacheFilter) {
	const solveCacheDb = getSolveCacheDb();

	solveCacheDb
		.chain()
		.where((stat) => !!stat.solve)
		.find(cleanFilterSolvesOptions(filter))
		.data()
		.forEach((stat) => {
			solveCacheDb.remove(stat);
		});
}

// Caches a result given a key
export function cacheSolveStat(cacheKey: SolveCacheKey, result: SolveStatInput): SolveStat {
	const solveCacheDb = getSolveCacheDb();
	const resultSolves = result.solve ? [result.solve] : result.solves || [];


	const cacheVal: SolveStat = {
		...cacheKey,
		cacheKey: getCacheKeyString(cacheKey),
		time: getNumberToDecimalPoints(result.time, 3),
		solveIds: new Set(resultSolves.map((s) => s.id)),
		solve: result.solve,
		solves: resultSolves,
	};

	solveCacheDb.insert(cacheVal);

	return cacheVal;
}
