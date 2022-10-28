import flatten from 'flat';
import {getSolveCacheDb} from '../../init';
import {FilterSolvesOptions} from '../../query';
import jsonStr from 'json-stable-stringify';
import {getNumberToDecimalPoints} from '../../../../util/time';
import {Solve} from '../../../../../server/schemas/Solve.schema';

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

function cleanFilterSolvesOptions(filter: FilterSolvesOptions) {
	for (const key of Object.keys(filter)) {
		if (filter[key] === undefined || filter[key] === null) {
			delete filter[key];
		}
	}

	return flatten(filter);
}

function getCacheKeyString(cacheKey: SolveCacheKey) {
	return jsonStr(cacheKey);
}

export function fetchSolveCache(cacheKey: SolveCacheKey) {
	const keyStr = getCacheKeyString(cacheKey);
	return fetchSolveCacheByCacheStr(keyStr);
}

export function fetchSolveCacheByCacheStr(cacheKey: string) {
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

export function clearSolveStatCache(filter: FilterSolveStats) {
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
