import {Solve} from '../../../../../../server/schemas/Solve.schema';
import {clearSingleSolveStatCache, fetchAllSolveCaches} from '../caching';

export function checkForSinglePB(solve: Solve) {
	const cached = fetchAllSolveCaches({
		type: 'single_pb',
		filterOptions: {
			cube_type: solve.cube_type,
		},
	});

	const updatedPbs: typeof cached = [];
	cacheLoop: for (const cach of cached) {
		const filter = cach.filterOptions;
		const filterKeys = Object.keys(filter);

		// Checking if solve meets filterOptions criteria
		for (const key of filterKeys) {
			if (solve[key] !== filter[key]) {
				continue cacheLoop;
			}
		}

		if (solve.time <= 0 || (solve.time > 0 && cach.time < solve.time)) {
			continue;
		}

		clearSingleSolveStatCache(cach.cacheKey);
		updatedPbs.push(cach);
	}

	return updatedPbs;
}

export function checkForSingleWorstUpdate(solve: Solve) {
	const cached = fetchAllSolveCaches({
		type: 'single_worst',
		filterOptions: {
			cube_type: solve.cube_type,
		},
	});

	const updatedWorsts: typeof cached = [];
	cacheLoop: for (const cach of cached) {
		const filter = cach.filterOptions;
		const filterKeys = Object.keys(filter);

		// Checking if solve meets filterOptions criteria
		for (const key of filterKeys) {
			if (solve[key] !== filter[key]) {
				continue cacheLoop;
			}
		}

		if (cach.time > solve.time) {
			continue;
		}

		clearSingleSolveStatCache(cach.cacheKey);
		updatedWorsts.push(cach);
	}

	return updatedWorsts;
}
