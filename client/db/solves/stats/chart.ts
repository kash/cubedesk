import {fetchSolves, FilterSolvesOptions} from '@/db/solves/query';

const CHART_BUCKET_SIZE = 50;

export function getChartData(filter: FilterSolvesOptions) {
	const solves = fetchSolves(
		{
			...filter,
			dnf: false,
			time: {
				$gt: 0,
			},
		},
		{
			sortBy: 'started_at',
		},
	);

	const data: {index: number; value: number; timestamp: number | null}[] = [];
	let index = 0;

	const buckets = Math.floor(solves.length / CHART_BUCKET_SIZE);
	let runningTotal = 0;
	let bucketSize = 0;

	for (const [solveIndex, solve] of solves.entries()) {
		const time = solve.time;

		bucketSize += 1;
		runningTotal += time;

		if (bucketSize < buckets && solveIndex < solves.length - 1) {
			continue;
		}

		data.push({
			index,
			value: runningTotal / bucketSize,
			timestamp: solve.started_at,
		});

		runningTotal = 0;
		bucketSize = 0;
		index += 1;
	}

	return data;
}
