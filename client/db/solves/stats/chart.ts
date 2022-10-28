import {fetchSolves, FilterSolvesOptions} from '../query';

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
		}
	);

	const data = [];
	let index = 0;

	const buckets = Math.floor(solves.length / CHART_BUCKET_SIZE);
	let runningTotal = 0;
	let bucketSize = 0;

	for (const solve of solves) {
		const time = solve.time;

		bucketSize += 1;
		runningTotal += time;

		if (bucketSize < buckets) {
			continue;
		}

		data.push({
			index,
			value: runningTotal / bucketSize,
		});

		runningTotal = 0;
		bucketSize = 0;
		index += 1;
	}

	return data;
}
