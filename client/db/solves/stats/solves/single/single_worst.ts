import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '../caching';
import {fetchSingleSolve, FilterSolvesOptions} from '../../../query';

export function getWorstTime(filterOptions: FilterSolvesOptions) {
	const cacheKey: SolveCacheKey = {
		type: 'single_worst',
		filterOptions,
	};

	const cachedValue = fetchSolveCache(cacheKey);
	if (cachedValue) {
		return cachedValue;
	}

	const solve = fetchSingleSolve(
		{
			...filterOptions,
			dnf: false,
			time: {$gt: 0},
		},
		{
			sortBy: 'time',
			sortInverse: true,
			limit: 1,
		}
	);

	if (!solve) {
		return null;
	}

	const result: SolveStatInput = {
		time: solve.time,
		solve,
	};

	return cacheSolveStat(cacheKey, result);
}
