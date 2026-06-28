import {fetchSolves, FilterSolvesOptions} from '../query';
import {Solve} from '../../../../server/schemas/Solve.schema';

interface SubStats {
	firstSolve: Solve;
	lastSolve: Solve;
	totalCount: number;
	dnfCount: number;
	dnfPercent: number;
	plusTwoCount: number;
	plusTwoPercent: number;
}

export function getSubStats(filter: FilterSolvesOptions): SubStats {
	const solves = fetchSolves(
		{
			...filter,
		},
		{
			sortBy: 'started_at',
		}
	);

	const dnfs = fetchSolves({
		...filter,
		dnf: true,
	});

	const plusTwos = fetchSolves({
		...filter,
		plus_two: true,
	});

	let dnfPercent = 0;
	let plusTwoPercent = 0;
	if (solves.length) {
		dnfPercent = Math.floor((dnfs.length / solves.length) * 100);
		plusTwoPercent = Math.floor((dnfs.length / solves.length) * 100);
	}

	return {
		firstSolve: solves[0],
		lastSolve: solves[solves.length - 1],
		totalCount: solves.length,
		dnfCount: dnfs.length,
		dnfPercent,
		plusTwoCount: plusTwos.length,
		plusTwoPercent,
	};
}
