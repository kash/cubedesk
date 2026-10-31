import {compareValues} from '@/db/memory/compare';

export interface IndexEntry<T> {
	// Snapshot of the sorted field. Records are live references that callers sometimes mutate before calling
	// update, so the entry's position must be located by the value it was indexed with, not the current one.
	value: unknown;
	seq: number;
	record: T;
}

export interface IndexRange {
	gt?: {value: unknown};
	lt?: {value: unknown};
}

/**
 * Keeps records ordered ascending by one field. Ties are ordered by insertion sequence, which an update keeps.
 */
export class SortedIndex<T> {
	private entries: IndexEntry<T>[] = [];

	get size() {
		return this.entries.length;
	}

	add(entry: IndexEntry<T>) {
		const last = this.entries[this.entries.length - 1];
		if (!last || compareEntries(last, entry) < 0) {
			// The common case: new solves are the newest
			this.entries.push(entry);
		} else {
			this.entries.splice(this.lowerBound(entry), 0, entry);
		}
	}

	remove(entry: IndexEntry<T>) {
		const position = this.lowerBound(entry);
		if (this.entries[position] === entry) {
			this.entries.splice(position, 1);
		}
	}

	setSorted(entries: IndexEntry<T>[]) {
		this.entries = entries;
	}

	/**
	 * Visits records in order until the visitor returns false
	 */
	scan(desc: boolean, visit: (record: T) => boolean, range: IndexRange = {}) {
		const entries = this.entries;
		const start = range.gt ? this.firstAbove(range.gt.value) : 0;
		const end = range.lt ? this.firstAtOrAbove(range.lt.value) : entries.length;

		if (desc) {
			for (let i = end - 1; i >= start; i--) {
				if (!visit(entries[i].record)) return;
			}
		} else {
			for (let i = start; i < end; i++) {
				if (!visit(entries[i].record)) return;
			}
		}
	}

	private firstAbove(value: unknown): number {
		return this.search((entry) => compareValues(entry.value, value) <= 0);
	}

	private firstAtOrAbove(value: unknown): number {
		return this.search((entry) => compareValues(entry.value, value) < 0);
	}

	private lowerBound(target: IndexEntry<T>): number {
		return this.search((entry) => compareEntries(entry, target) < 0);
	}

	private search(isBefore: (entry: IndexEntry<T>) => boolean): number {
		let low = 0;
		let high = this.entries.length;
		while (low < high) {
			const mid = (low + high) >>> 1;
			if (isBefore(this.entries[mid])) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
		return low;
	}
}

export function compareEntries<T>(a: IndexEntry<T>, b: IndexEntry<T>): number {
	return compareValues(a.value, b.value) || a.seq - b.seq;
}
