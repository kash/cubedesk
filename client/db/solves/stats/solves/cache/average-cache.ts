import {isRangeQuery} from '@/db/memory/query';
import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';
import {getAverage} from '@/db/solves/stats/solves/average/get-average';
import {
	cacheSolveStat,
	clearSingleSolveStatCache,
	fetchAllSolveCaches,
} from '@/db/solves/stats/solves/caching';
import {Solve} from '@/types/solve';
import {getNumberToDecimalPoints} from '@/util/time';

export function checkForAveragePBUpdate(solve: Solve, isNew: boolean) {
	return updateCachedAverages('avg_pb', solve, isNew, (avg, cached) => avg < cached);
}

export function checkForCurrentAverageUpdate(solve: Solve, isNew: boolean) {
	const cached = fetchAllSolveCaches({
		type: 'avg_current',
	});

	for (const cach of cached) {
		if (isNew) {
			clearSingleSolveStatCache(cach.cacheKey);
		} else if (cach.solveIds.has(solve.id)) {
			clearSingleSolveStatCache(cach.cacheKey);
		}
	}
}

export function checkForAverageWorstUpdate(solve: Solve, isNew: boolean) {
	return updateCachedAverages('avg_worst', solve, isNew, (avg, cached) => avg > cached);
}

function updateCachedAverages(
	type: 'avg_pb' | 'avg_worst',
	solve: Solve,
	isNew: boolean,
	beats: (avg: number, cached: number) => boolean,
) {
	const cached = fetchAllSolveCaches({
		type,
		filterOptions: {
			event_type: solve.event_type,
		},
	});

	const updated: typeof cached = [];
	for (const cach of cached) {
		const count = cach.averageCount;
		if (!isNew || count == null) {
			clearSingleSolveStatCache(cach.cacheKey);
			continue;
		}

		const relation = getFilterRelation(solve, cach.filterOptions);
		if (relation === 'excluded') {
			continue;
		}

		const recent =
			relation === 'included' ? fetchSolves(cach.filterOptions, {limit: count}) : [];
		if (recent.length < count || recent[0].id !== solve.id) {
			clearSingleSolveStatCache(cach.cacheKey);
			continue;
		}

		const avg = getNumberToDecimalPoints(getAverage(recent.map((s) => s.time)), 3);
		if (avg <= 0) {
			continue;
		}

		if (beats(avg, cach.time)) {
			updated.push(cach);
		}
		if (avg === cach.time || beats(avg, cach.time)) {
			cacheSolveStat(
				{type, filterOptions: cach.filterOptions, averageCount: count},
				{time: avg, solves: recent},
			);
		}
	}

	return updated;
}

function getFilterRelation(
	solve: Solve,
	filterOptions: FilterSolvesOptions,
): 'included' | 'excluded' | 'unknown' {
	for (const key of Object.keys(filterOptions) as Array<keyof FilterSolvesOptions>) {
		const expected = filterOptions[key];
		if (expected === undefined) {
			continue;
		}
		if (isRangeQuery(expected)) {
			return 'unknown';
		}
		if (solve[key] !== expected) {
			return 'excluded';
		}
	}
	return 'included';
}
