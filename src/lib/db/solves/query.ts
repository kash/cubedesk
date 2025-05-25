import {getSolveDb} from './init';
import {LokiFetchOptions} from '../lokijs';
import {cleanFilterOptions} from '../util';
import {getCubeTypeInfoById} from '../../util/cubes/util';
import {Solve} from '../../../server/schemas/Solve.schema';

export type FilterSolvesOptions = LokiQuery<Solve>;

export function fetchLastSolve(options: FilterSolvesOptions = {}) {
	const solveDb = getSolveDb();
	const data = solveDb.chain().find(cleanFilterOptions(options)).simplesort('started_at', true).limit(1).data();

	if (data && data.length) {
		return data[0];
	}

	return null;
}

export function fetchSolve(solve: string | Solve): Solve {
	const solveDb = getSolveDb();

	if (typeof solve === 'string') {
		return solveDb.findOne({
			id: solve,
		});
	}

	return solveDb.findObject(solve);
}

export function fetchLastCubeTypeForSession(sessionId: string): string {
	const solveDb = getSolveDb();

	const last = solveDb
		.chain()
		.find({
			session_id: sessionId,
		})
		.simplesort('started_at', true)
		.limit(1)
		.data();

	if (last && last.length) {
		return last[0].cube_type;
	}

	return null;
}

// Same as fetchSolves but returns the first in array (if any)
export function fetchSingleSolve(options: FilterSolvesOptions = {}, fetchOptions?: LokiFetchOptions) {
	const solves = fetchSolves(options, fetchOptions);

	if (!solves || !solves.length) {
		return null;
	}

	return solves[0];
}

export function fetchAllCubeTypesSolved(defaultsOnly: boolean = false) {
	type CubeTypeCount = {
		cube_type: string;
		count: number;
	};

	const typeListMap: Record<string, number> = {};
	const list: CubeTypeCount[] = [];
	const solves = fetchSolves({
		dnf: false,
		from_timer: true,
		time: {$gt: 0},
	});

	for (const solve of solves) {
		const cubeType = solve.cube_type;
		const ct = getCubeTypeInfoById(cubeType);
		if (!ct || (defaultsOnly && !ct.default)) {
			continue;
		}

		if (cubeType in typeListMap) {
			const index = typeListMap[cubeType];
			list[index].count++;
		} else {
			typeListMap[cubeType] = list.length;
			list.push({
				cube_type: cubeType,
				count: 1,
			});
		}
	}

	list.sort((a, b) => b.count - a.count);

	return list;
}

export function fetchSolveCount(options: FilterSolvesOptions = {}) {
	const solveDb = getSolveDb();
	return solveDb.find(cleanFilterOptions(options)).length;
}

export function fetchSolves(options: FilterSolvesOptions = {}, fetchOptions?: LokiFetchOptions) {
	const solveDb = getSolveDb();

	let out = solveDb.chain().find(cleanFilterOptions(options));

	if (fetchOptions?.sortBy) {
		out = out.simplesort(fetchOptions.sortBy as any, {
			desc: !!fetchOptions.sortInverse || false,
		});
	} else {
		out = out.simplesort('started_at', true);
	}

	if (fetchOptions?.offset) {
		out = out.offset(fetchOptions.offset);
	}

	if (fetchOptions?.limit) {
		out = out.limit(fetchOptions.limit);
	}

	return out.data();
}
