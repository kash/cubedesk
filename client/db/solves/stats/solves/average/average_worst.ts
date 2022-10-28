import {fetchSolves, FilterSolvesOptions} from '../../../query';
import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '../caching';
import SortedArray from 'sorted-array';
import {getAverage} from './average';
import {Solve} from '../../../../../../server/schemas/Solve.schema';

export function getAverageWorst(filterOptions: FilterSolvesOptions, count: number) {
	const cacheKey: SolveCacheKey = {
		type: 'avg_worst',
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

	const firstSolves = allSolves.slice(0, count);
	const sortedTimes = new SortedArray(firstSolves.map((solve) => solve.time));

	let worst = getAverage(firstSolves);
	let bestList: Solve[] = [...firstSolves];

	for (let i = 1; i < allSolves.length - count; i++) {
		const dropSolve = allSolves[i - 1];
		const addSolve = allSolves[i + count - 1];

		sortedTimes.remove(dropSolve.time);
		sortedTimes.insert(addSolve.time);

		const avg = getAverage(sortedTimes.array);
		if (avg > 0 && (worst <= 0 || avg > worst)) {
			worst = avg;
			bestList = allSolves.slice(i, i + count);
		}
	}

	if (worst <= 0) {
		return null;
	}

	const result: SolveStatInput = {
		solves: bestList,
		time: worst,
	};

	return cacheSolveStat(cacheKey, result);
}
