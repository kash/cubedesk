import {getTimeString} from '../../../util/time';
import {fetchSolves, FilterSolvesOptions} from '../query';

export function getTimeDistro(filter: FilterSolvesOptions, buckets: number) {
	const solves = fetchSolves(
		{
			...filter,
			dnf: false,
			time: {
				$gt: 0,
			},
		},
		{
			sortBy: 'time',
		}
	);

	function roundNumber(num) {
		return Math.floor(num * 100) / 100;
	}

	if (!solves || !solves.length) {
		return [];
	}

	const min = Math.floor(solves[0].time);
	const max = Math.ceil(solves[solves.length - 1].time);

	const bucketSize = roundNumber((max - min) / buckets);

	let solveStart = 0;
	const data = [];

	function getRangeStr(range: number) {
		let dec = range < 10 ? 1 : 0;
		if (Math.floor(range) === range) {
			dec = 0;
		}

		return `${getTimeString(range, dec)}`;
	}

	for (let i = 0; i < buckets; i += 1) {
		const bucketMin = min + i * bucketSize;
		const bucketMax = bucketMin + bucketSize;

		let freq = 0;
		for (let k = solveStart; k < solves.length; k += 1) {
			if (solves[k].time < bucketMax) {
				freq += 1;
			} else {
				solveStart = k;
				break;
			}
		}

		const lowRange = getRangeStr(bucketMin);
		const highRange = getRangeStr(bucketMax);

		data.push({
			x: `${lowRange}-${highRange}`,
			y: freq,
		});
	}

	return data;
}
