import {getCurrentAverage} from '@/db/solves/stats/solves/average/average';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {getAverageWorst} from '@/db/solves/stats/solves/average/average-worst';
import {clearSingleSolveStatCache, fetchAllSolveCaches} from '@/db/solves/stats/solves/caching';
import {Solve} from '@/types/solve';

export function checkForAveragePBUpdate(solve: Solve, isNew: boolean) {
	const cached = fetchAllSolveCaches({
		type: 'avg_pb',
		filterOptions: {
			cube_type: solve.cube_type,
		},
	});

	const updatedPbs: typeof cached = [];
	for (const cach of cached) {
		if (isNew && cach.averageCount != null) {
			const best = getAveragePB(cach.filterOptions, cach.averageCount);
			const avg = getCurrentAverage(cach.filterOptions, cach.averageCount);

			if (avg && best && avg.time < best.time && avg.time >= 0) {
				updatedPbs.push(cach);
			}
		}
		clearSingleSolveStatCache(cach.cacheKey);
	}

	return updatedPbs;
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
	const cached = fetchAllSolveCaches({
		type: 'avg_worst',
		filterOptions: {
			cube_type: solve.cube_type,
		},
	});

	const updatedWorsts: typeof cached = [];
	for (const cach of cached) {
		if (isNew && cach.averageCount != null) {
			const worst = getAverageWorst(cach.filterOptions, cach.averageCount);
			const avg = getCurrentAverage(cach.filterOptions, cach.averageCount);

			if (avg && worst && avg.time > worst.time && avg.time >= 0) {
				updatedWorsts.push(cach);
			}
		}
		clearSingleSolveStatCache(cach.cacheKey);
	}

	return updatedWorsts;
}
