import {compareValues} from '@/db/memory/compare';

interface IndexEntry<T> {
	// Snapshot of the sorted field. Records are live references that callers sometimes mutate before calling
	// update, so the entry's position must be located by the value it was indexed with, not the current one.
	value: unknown;
	seq: number;
	record: T;
}

/**
 * Keeps records ordered ascending by one field. Ties are ordered by insertion sequence, which an update keeps.
 */
export class SortedIndex<T extends {id: string}> {
	private entries: IndexEntry<T>[] = [];
	private entriesById = new Map<string, IndexEntry<T>>();

	constructor(readonly field: keyof T) {}

	add(record: T, seq: number) {
		const entry: IndexEntry<T> = {value: record[this.field], seq, record};
		this.entriesById.set(record.id, entry);

		const last = this.entries[this.entries.length - 1];
		if (!last || compareEntries(last, entry) < 0) {
			// The common case: new solves are the newest
			this.entries.push(entry);
		} else {
			this.entries.splice(this.lowerBound(entry), 0, entry);
		}
	}

	remove(id: string) {
		const entry = this.entriesById.get(id);
		if (!entry) {
			return;
		}

		this.entries.splice(this.lowerBound(entry), 1);
		this.entriesById.delete(id);
	}

	update(record: T) {
		const entry = this.entriesById.get(record.id);
		if (!entry) {
			return;
		}

		const value = record[this.field];
		if (compareValues(entry.value, value) === 0) {
			entry.record = record;
			entry.value = value;
			return;
		}

		this.remove(record.id);
		this.add(record, entry.seq);
	}

	rebuild(records: Array<{record: T; seq: number}>) {
		this.entries = records.map(({record, seq}) => ({value: record[this.field], seq, record}));
		this.entries.sort(compareEntries);
		this.entriesById = new Map(this.entries.map((entry) => [entry.record.id, entry]));
	}

	/**
	 * Visits records in order until the visitor returns false
	 */
	scan(desc: boolean, visit: (record: T) => boolean) {
		const entries = this.entries;
		if (desc) {
			for (let i = entries.length - 1; i >= 0; i--) {
				if (!visit(entries[i].record)) return;
			}
		} else {
			for (let i = 0; i < entries.length; i++) {
				if (!visit(entries[i].record)) return;
			}
		}
	}

	private lowerBound(target: IndexEntry<T>): number {
		let low = 0;
		let high = this.entries.length;
		while (low < high) {
			const mid = (low + high) >>> 1;
			if (compareEntries(this.entries[mid], target) < 0) {
				low = mid + 1;
			} else {
				high = mid;
			}
		}
		return low;
	}
}

function compareEntries<T>(a: IndexEntry<T>, b: IndexEntry<T>): number {
	return compareValues(a.value, b.value) || a.seq - b.seq;
}
