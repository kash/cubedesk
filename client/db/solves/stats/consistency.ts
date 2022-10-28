import {fetchSolves, FilterSolvesOptions} from '../query';
import {BarGraphData} from '../../../components/modules/bar_graph/BarGraph';
import dayjs from 'dayjs';

export function getSolveCountByDateData(filter: FilterSolvesOptions): BarGraphData[] {
	const start = new Date(filter.started_at as number);
	const end = new Date(filter.ended_at as number);

	start.setHours(0, 0, 0, 0);
	end.setHours(23, 59, 59, 999);

	const solves = fetchSolves(
		{
			...filter,
			started_at: {
				$gt: start.getTime(),
			},
			ended_at: {
				$lt: end.getTime(),
			},
		},
		{
			sortBy: 'started_at',
		}
	);

	let solveIndex = 0;
	const data: BarGraphData[] = [];
	const tempStart = new Date(start);

	while (tempStart.getTime() < end.getTime()) {
		const tempEnd = new Date(tempStart);
		tempEnd.setHours(23, 59, 59, 999);

		let solveCount = 0;
		while (solveIndex < solves.length) {
			const solve = solves[solveIndex];
			if (solve.started_at > tempStart.getTime() && solve.ended_at < tempEnd.getTime()) {
				solveCount++;
				solveIndex++;
			} else {
				break;
			}
		}

		data.push({
			x: dayjs(tempStart).format('M/D'),
			y: solveCount,
		});
		tempStart.setDate(tempStart.getDate() + 1);
	}

	return data;
}
