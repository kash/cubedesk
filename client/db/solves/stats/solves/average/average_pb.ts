import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '../caching';
import SortedArray from 'sorted-array';
import {getAverage} from './average';
import {fetchSolves, FilterSolvesOptions} from '../../../query';
import {Solve} from '../../../../../../server/schemas/Solve.schema';

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

	const firstSolves = allSolves.slice(0, count);
	const sortedTimes = new SortedArray(firstSolves.map((solve) => solve.time));

	let bestList: Solve[] = [...firstSolves];
	let best = getAverage(firstSolves);

	for (let i = 1; i < allSolves.length - count; i++) {
		const dropSolve = allSolves[i - 1];
		const addSolve = allSolves[i + count - 1];

		sortedTimes.remove(dropSolve.time);
		sortedTimes.insert(addSolve.time);

		const avg = getAverage(sortedTimes.array);

		if (avg > 0 && (best <= 0 || avg < best)) {
			best = avg;
			bestList = allSolves.slice(i, i + count);
		}
	}

	if (best <= 0) {
		return null;
	}

	const result: SolveStatInput = {
		solves: bestList,
		time: best,
	};

	return cacheSolveStat(cacheKey, result);
}
