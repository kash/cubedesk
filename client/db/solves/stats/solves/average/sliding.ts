import {getAverage} from '@/db/solves/stats/solves/average/get-average';
import SortedArray from '@/util/sorted-array';

const UNITS = 1_000_000;

function toUnits(time: number) {
	return Math.round(time * UNITS);
}

export function getDropCount(count: number) {
	return count < 5 ? 0 : Math.ceil(Math.max(1, count * 0.05));
}

export function forEachWindowAverage(
	times: number[],
	count: number,
	visit: (average: number, start: number) => void,
) {
	if (count <= 0 || times.length < count) {
		return;
	}

	const window = new SortedArray(times.slice(0, count));
	const dropCount = getDropCount(count);
	const keptCount = count - 2 * dropCount;
	let positiveSum = 0;
	let dnfCount = 0;
	let zeroCount = 0;

	function track(time: number, sign: 1 | -1) {
		if (time < 0) {
			dnfCount += sign;
		} else if (time === 0) {
			zeroCount += sign;
		} else {
			positiveSum += sign * toUnits(time);
		}
	}

	function windowAverage() {
		if (dnfCount > dropCount) {
			return -1;
		}
		if (zeroCount > 0 || keptCount <= 0) {
			return getAverage(window.array, true);
		}

		const sorted = window.array;
		let excluded = 0;
		for (let i = dnfCount; i < dnfCount + dropCount; i++) {
			excluded += toUnits(sorted[i]);
		}
		for (let i = count - (dropCount - dnfCount); i < count; i++) {
			excluded += toUnits(sorted[i]);
		}

		return (positiveSum - excluded) / UNITS / keptCount;
	}

	for (let i = 0; i < count; i++) {
		track(times[i], 1);
	}

	for (let start = 0; start + count <= times.length; start++) {
		if (start > 0) {
			const dropped = times[start - 1];
			const added = times[start + count - 1];
			window.remove(dropped);
			window.insert(added);
			track(dropped, -1);
			track(added, 1);
		}

		visit(windowAverage(), start);
	}
}
