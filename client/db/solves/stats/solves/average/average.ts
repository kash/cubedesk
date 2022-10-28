// Not providing a count will result in getting the average for all solves for this cube type
import {cacheSolveStat, fetchSolveCache, SolveCacheKey, SolveStatInput} from '../caching';
import {fetchSolves, FilterSolvesOptions} from '../../../query';
import {Solve} from '../../../../../../server/schemas/Solve.schema';

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

function getSolveTime(solve: Solve | number): number {
	if (typeof solve === 'number') {
		return solve;
	} else {
		return solve.time;
	}
}

/**
 * Generic average function for a list of solves
 * @param list - List of Solve objects
 * @param isSorted - If list is already sorted, skip sorting and save on compute
 */
export function getAverage(list: Solve[] | number[], isSorted: boolean = false): number {
	if (!list || !list.length) {
		return 0;
	}

	if (!isSorted) {
		list.sort((a, b) => getSolveTime(a) - getSolveTime(b));
	}

	const count = list.length;
	let dropCount = Math.ceil(Math.max(1, count * 0.05));

	// < 5 is a special case. We don't drop any from either end
	if (count < 5) {
		dropCount = 0;
	}

	let dnfCount = 0;
	for (let i = 0; i < list.length; i++) {
		const time = getSolveTime(list[i]);

		if (time < 0) {
			dnfCount++;
		} else {
			break;
		}
	}

	if (dnfCount > dropCount) {
		return -1;
	}

	let total = 0;
	let totalCount = 0;
	for (let i = dropCount; i < list.length - dropCount; i++) {
		const solve = list[i + dnfCount];
		const time = getSolveTime(solve);

		if (time <= 0) {
			return -1;
		} else {
			total += time;
		}

		totalCount += 1;
	}

	return total / totalCount;
}
