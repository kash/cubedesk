import {fetchSolves, FilterSolvesOptions} from '../query';

export function getTotalSolveTime(filterOption: FilterSolvesOptions): number {
	const solves = fetchSolves(filterOption);
	let total = 0;

	for (const solve of solves) {
		total += solve.time;
	}

	return total;
}

export function getTotalSolveCount(filterOption: FilterSolvesOptions) {
	const solves = fetchSolves(filterOption);
	return solves.length;
}
