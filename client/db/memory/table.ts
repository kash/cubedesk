import {compareValues} from '@/db/memory/compare';
import {compileQuery, FetchOptions, paginate, RecordQuery, sortRecords} from '@/db/memory/query';
import {SortedIndex} from '@/db/memory/sorted-index';

/**
 * Synchronous in-memory record store keyed by id.
 *
 * Records are stored and returned by reference (callers copy before inserting). Unsorted queries return records in
 * insertion order. Sorted queries are stable: ties keep insertion order ascending, and descending is the exact
 * reverse of ascending. Fields listed in `sortedFields` keep a sorted index so sorted queries on them scan instead
 * of sorting, and stop early once `limit` is reached.
 */
export class MemoryTable<T extends {id: string}> {
	private records = new Map<string, T>();
	private nextSeq = 0;
	private indexes = new Map<keyof T, SortedIndex<T>>();

	constructor(sortedFields: Array<keyof T> = []) {
		for (const field of sortedFields) {
			this.indexes.set(field, new SortedIndex(field));
		}
	}

	get size() {
		return this.records.size;
	}

	get(id: string): T | null {
		return this.records.get(id) ?? null;
	}

	all(): T[] {
		return Array.from(this.records.values());
	}

	find(query: RecordQuery<T> = {}, options: FetchOptions<T> = {}): T[] {
		const match = compileQuery(query);
		const {sortBy, sortInverse} = options;
		const desc = !!sortInverse;

		if (!sortBy) {
			return paginate(this.filter(match), options);
		}

		const index = this.indexes.get(sortBy);
		if (index) {
			return this.scanIndex(index, match, desc, options);
		}

		if (options.limit === 1 && !options.offset) {
			const found = this.findExtreme(match, sortBy, desc);
			return found ? [found] : [];
		}

		return paginate(sortRecords(this.filter(match), sortBy, desc), options);
	}

	findOne(query: RecordQuery<T>): T | null {
		const keys = Object.keys(query);
		if (keys.length === 1 && keys[0] === 'id' && typeof query.id === 'string') {
			return this.get(query.id);
		}

		const match = compileQuery(query);
		for (const record of this.records.values()) {
			if (match(record)) {
				return record;
			}
		}
		return null;
	}

	count(query: RecordQuery<T> = {}): number {
		if (!Object.keys(query).length) {
			return this.records.size;
		}

		const match = compileQuery(query);
		let count = 0;
		for (const record of this.records.values()) {
			if (match(record)) {
				count++;
			}
		}
		return count;
	}

	/**
	 * Adds a new record. Throws if a record with the same id already exists.
	 */
	insert(record: T): T {
		if (this.records.has(record.id)) {
			throw new Error(`Duplicate record id: ${record.id}`);
		}

		this.add(record);
		return record;
	}

	/**
	 * Inserts or replaces a record by id
	 */
	put(record: T): T {
		if (this.records.has(record.id)) {
			this.replace(record);
		} else {
			this.add(record);
		}
		return record;
	}

	/**
	 * Replaces an existing record with the same id. Returns null if no such record exists.
	 */
	update(record: T): T | null {
		if (!this.records.has(record.id)) {
			return null;
		}

		this.replace(record);
		return record;
	}

	remove(id: string): T | null {
		const record = this.records.get(id);
		if (!record) {
			return null;
		}

		this.records.delete(id);
		for (const index of this.indexes.values()) {
			index.remove(id);
		}
		return record;
	}

	removeWhere(query: RecordQuery<T>): T[] {
		const removed = this.filter(compileQuery(query));
		for (const record of removed) {
			this.remove(record.id);
		}
		return removed;
	}

	updateWhere(query: RecordQuery<T>, change: (record: T) => T): T[] {
		const updated = this.filter(compileQuery(query)).map(change);
		for (const record of updated) {
			this.replace(record);
		}
		return updated;
	}

	replaceAll(records: T[]) {
		this.records = new Map();
		const sequenced: Array<{record: T; seq: number}> = [];

		for (const record of records) {
			// Later duplicates win, keeping the first one's position
			if (!this.records.has(record.id)) {
				sequenced.push({record, seq: sequenced.length});
			}
			this.records.set(record.id, record);
		}

		for (const entry of sequenced) {
			entry.record = this.records.get(entry.record.id)!;
		}

		this.nextSeq = sequenced.length;
		for (const index of this.indexes.values()) {
			index.rebuild(sequenced);
		}
	}

	clear() {
		this.replaceAll([]);
	}

	private add(record: T) {
		this.records.set(record.id, record);
		const seq = this.nextSeq++;
		for (const index of this.indexes.values()) {
			index.add(record, seq);
		}
	}

	private replace(record: T) {
		// Map.set on an existing key keeps its insertion position
		this.records.set(record.id, record);
		for (const index of this.indexes.values()) {
			index.update(record);
		}
	}

	private filter(match: (record: T) => boolean): T[] {
		const out: T[] = [];
		for (const record of this.records.values()) {
			if (match(record)) {
				out.push(record);
			}
		}
		return out;
	}

	private scanIndex(index: SortedIndex<T>, match: (record: T) => boolean, desc: boolean, options: FetchOptions<T>) {
		const out: T[] = [];
		let toSkip = options.offset || 0;
		const limit = options.limit || Infinity;

		index.scan(desc, (record) => {
			if (!match(record)) {
				return true;
			}
			if (toSkip > 0) {
				toSkip--;
				return true;
			}

			out.push(record);
			return out.length < limit;
		});

		return out;
	}

	// Equivalent to a stable sort followed by taking the first record
	private findExtreme(match: (record: T) => boolean, key: keyof T, desc: boolean): T | null {
		let best: T | null = null;
		for (const record of this.records.values()) {
			if (!match(record)) {
				continue;
			}

			if (!best) {
				best = record;
				continue;
			}

			const comparison = compareValues(record[key], best[key]);
			// Ascending keeps the first of equal records; descending (the reverse order) keeps the last
			if (desc ? comparison >= 0 : comparison < 0) {
				best = record;
			}
		}
		return best;
	}
}
