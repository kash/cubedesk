import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {forEachWindowAverage} from '@/db/solves/stats/solves/average/sliding';
import {
	cacheSolveStat,
	fetchSolveCache,
	SolveCacheKey,
	SolveStatInput,
} from '@/db/solves/stats/solves/caching';

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

	let worst = 0;
	let worstStart = 0;
	forEachWindowAverage(
		allSolves.map((solve) => solve.time),
		count,
		(avg, start) => {
			if (start === 0 || (avg > 0 && (worst <= 0 || avg > worst))) {
				worst = avg;
				worstStart = start;
			}
		},
	);

	if (worst <= 0) {
		return null;
	}

	const result: SolveStatInput = {
		solves: allSolves.slice(worstStart, worstStart + count),
		time: worst,
	};

	return cacheSolveStat(cacheKey, result);
}
