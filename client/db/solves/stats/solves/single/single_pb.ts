import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '../caching';
import {fetchSingleSolve, FilterSolvesOptions} from '../../../query';

export function getSinglePB(filterOptions: FilterSolvesOptions) {
	const cacheKey: SolveCacheKey = {
		type: 'single_pb',
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
