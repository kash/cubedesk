/**
 * Minimal drop-in replacement for the deprecated `sorted-array` package.
 * Maintains a numerically-sorted array with binary-search insert/remove.
 */
export default class SortedArray {
	array: number[];

	constructor(values: number[] = []) {
		this.array = [...values].sort((a, b) => a - b);
	}

	private search(value: number): number {
		let low = 0;
		let high = this.array.length - 1;

		while (low <= high) {
			const mid = (low + high) >>> 1;
			const midValue = this.array[mid];

			if (midValue < value) {
				low = mid + 1;
			} else if (midValue > value) {
				high = mid - 1;
			} else {
				return mid;
			}
		}

		// Not found: return bitwise-complement of the insertion point.
		return ~low;
	}

	insert(value: number): void {
		const index = this.search(value);
		const insertAt = index < 0 ? ~index : index;
		this.array.splice(insertAt, 0, value);
	}

	remove(value: number): void {
		const index = this.search(value);
		if (index >= 0) {
			this.array.splice(index, 1);
		}
	}
}
