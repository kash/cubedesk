import {FetchOptions, RecordQuery} from '@/db/memory/query';
import {getSolveDb} from '@/db/solves/init';
import {Solve} from '@/types/solve';
import {getEventTypeInfoById} from '@/util/cubes/util';

export type FilterSolvesOptions = RecordQuery<Solve>;
export type SolveFetchOptions = FetchOptions<Solve>;

export function fetchLastSolve(options: FilterSolvesOptions = {}) {
	return fetchSingleSolve(options);
}

export function fetchSolve(solve: string | Pick<Solve, 'id'>): Solve | null {
	return getSolveDb().get(typeof solve === 'string' ? solve : solve.id);
}

export function fetchLastEventTypeForSession(sessionId: string): string | null {
	return fetchLastSolve({session_id: sessionId})?.event_type ?? null;
}

// Same as fetchSolves but returns the first in array (if any)
export function fetchSingleSolve(options: FilterSolvesOptions = {}, fetchOptions?: SolveFetchOptions) {
	const solves = fetchSolves(options, {...fetchOptions, limit: 1});

	if (!solves.length) {
		return null;
	}

	return solves[0];
}

export function fetchAllEventTypesSolved(defaultsOnly: boolean = false) {
	type EventTypeCount = {
		event_type: string;
		count: number;
	};

	const typeListMap: Record<string, number> = {};
	const list: EventTypeCount[] = [];
	const solves = fetchSolves({
		dnf: false,
		from_timer: true,
		time: {$gt: 0},
	});

	for (const solve of solves) {
		const eventType = solve.event_type;
		const ct = getEventTypeInfoById(eventType);
		if (!ct || (defaultsOnly && !ct.default)) {
			continue;
		}

		if (eventType in typeListMap) {
			const index = typeListMap[eventType];
			list[index].count++;
		} else {
			typeListMap[eventType] = list.length;
			list.push({
				event_type: eventType,
				count: 1,
			});
		}
	}

	list.sort((a, b) => b.count - a.count);

	return list;
}

export function fetchSolveCount(options: FilterSolvesOptions = {}) {
	return getSolveDb().count(options);
}

/**
 * Returns matching solves, newest first unless another sort is given
 */
export function fetchSolves(options: FilterSolvesOptions = {}, fetchOptions: SolveFetchOptions = {}) {
	const {sortBy, sortInverse, offset, limit} = fetchOptions;

	return getSolveDb().find(options, {
		...(sortBy ? {sortBy, sortInverse: !!sortInverse} : {sortBy: 'started_at', sortInverse: true}),
		offset,
		limit,
	});
}
