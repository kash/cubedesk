import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {forEachWindowAverage} from '@/db/solves/stats/solves/average/sliding';
import {
	cacheSolveStat,
	fetchSolveCache,
	SolveCacheKey,
	SolveStatInput,
} from '@/db/solves/stats/solves/caching';

export function getAveragePB(filterOptions: FilterSolvesOptions, count: number) {
	const cacheKey: SolveCacheKey = {
		type: 'avg_pb',
		filterOptions,
		averageCount: count,
	};

	const cachedValue = fetchSolveCache(cacheKey);
	if (cachedValue) {
		return cachedValue;
	}

	const allSolves = fetchSolves(filterOptions);

	// Return null when solve count is less than desired length. Should be displayed as "-"
	if (!allSolves || !allSolves.length || allSolves.length < count || count < 3) {
		return null;
	}

	let best = 0;
	let bestStart = 0;
	forEachWindowAverage(
		allSolves.map((solve) => solve.time),
		count,
		(avg, start) => {
			if (start === 0 || (avg > 0 && (best <= 0 || avg < best))) {
				best = avg;
				bestStart = start;
			}
		},
	);

	if (best <= 0) {
		return null;
	}

	const result: SolveStatInput = {
		solves: allSolves.slice(bestStart, bestStart + count),
		time: best,
	};

	return cacheSolveStat(cacheKey, result);
}
