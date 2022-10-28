import {Solve} from '../../../../../../server/schemas/Solve.schema';
import {clearSingleSolveStatCache, fetchAllSolveCaches} from '../caching';
import {getAveragePB} from '../average/average_pb';
import {getCurrentAverage} from '../average/average';
import {getAverageWorst} from '../average/average_worst';

export function checkForAveragePBUpdate(solve: Solve, isNew: boolean) {
	const cached = fetchAllSolveCaches({
		type: 'avg_pb',
		filterOptions: {
			cube_type: solve.cube_type,
		},
	});

	const updatedPbs: typeof cached = [];
	for (const cach of cached) {
		if (isNew) {
			const best = getAveragePB(cach.filterOptions, cach.averageCount);
			const avg = getCurrentAverage(cach.filterOptions, cach.averageCount);

			if (avg.time < best.time && avg.time >= 0) {
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
		if (isNew) {
			const worst = getAverageWorst(cach.filterOptions, cach.averageCount);
			const avg = getCurrentAverage(cach.filterOptions, cach.averageCount);

			if (avg.time > worst.time && avg.time >= 0) {
				updatedWorsts.push(cach);
			}
		}
		clearSingleSolveStatCache(cach.cacheKey);
	}

	return updatedWorsts;
}
