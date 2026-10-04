import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {getAverage} from '@/db/solves/stats/solves/average/get-average';
import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '@/db/solves/stats/solves/caching';
import {Solve} from '@/types/solve';

// Not providing a count will result in getting the average for all solves for this cube type
export function getCurrentAverage(filterOptions: FilterSolvesOptions, count: number = -1) {
	const cacheKey: SolveCacheKey = {
		type: 'avg_current',
		averageCount: count,
		filterOptions,
	};

	const cachedValue = fetchSolveCache(cacheKey);
	if (cachedValue) {
		return cachedValue;
	}

	const limit = count <= 0 ? undefined : count;

	let solves: Solve[];
	if (limit) {
		solves = fetchSolves(filterOptions, {
			limit,
		});
	} else {
		solves = fetchSolves(filterOptions, {
			sortBy: 'time',
		});
	}

	// No solves, less than 3 solves, or fewer than `count` solves
	if (!solves.length || solves.length < 3 || (count > 0 && solves.length < count)) {
		return null;
	}

	const avg = getAverage(solves, !limit);
	const result: SolveStatInput = {
		time: avg,
		solves,
	};

	return cacheSolveStat(cacheKey, result);
}
