import {fetchSingleSolve, fetchSolveCount, FilterSolvesOptions} from '@/db/solves/query';
import {Solve} from '@/types/solve';

interface SubStats {
	firstSolve: Solve | null;
	lastSolve: Solve | null;
	totalCount: number;
	dnfCount: number;
	dnfPercent: number;
	plusTwoCount: number;
	plusTwoPercent: number;
}

export function getSubStats(filter: FilterSolvesOptions): SubStats {
	const totalCount = fetchSolveCount(filter);
	const dnfCount = fetchSolveCount({...filter, dnf: true});
	const plusTwoCount = fetchSolveCount({...filter, plus_two: true});

	let dnfPercent = 0;
	let plusTwoPercent = 0;
	if (totalCount) {
		dnfPercent = Math.floor((dnfCount / totalCount) * 100);
		plusTwoPercent = Math.floor((plusTwoCount / totalCount) * 100);
	}

	return {
		firstSolve: fetchSingleSolve(filter, {sortBy: 'started_at'}),
		lastSolve: fetchSingleSolve(filter, {sortBy: 'started_at', sortInverse: true}),
		totalCount,
		dnfCount,
		dnfPercent,
		plusTwoCount,
		plusTwoPercent,
	};
}
