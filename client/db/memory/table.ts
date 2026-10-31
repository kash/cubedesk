import {compareValues} from '@/db/memory/compare';
import {
	compileQuery,
	FetchOptions,
	isRangeQuery,
	paginate,
	RecordQuery,
	sortRecords,
} from '@/db/memory/query';
import {compareEntries, IndexEntry, IndexRange, SortedIndex} from '@/db/memory/sorted-index';

interface RecordMeta<T> {
	seq: number;
	entries: IndexEntry<T>[];
	parts: unknown[];
}

interface Partition<T> {
	indexes: SortedIndex<T>[];
}

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
	private meta = new Map<string, RecordMeta<T>>();
	private nextSeq = 0;
	private changes = 0;
	private readonly fieldPositions = new Map<keyof T, number>();
	private globalIndexes: SortedIndex<T>[];
	private partitions: Array<Map<unknown, Partition<T>>>;
	private readonly partitionFields: Array<keyof T>;

	constructor(
		private readonly sortedFields: Array<keyof T> = [],
		partitionFields: Array<keyof T> = [],
	) {
		sortedFields.forEach((field, position) => this.fieldPositions.set(field, position));
		this.globalIndexes = sortedFields.map(() => new SortedIndex<T>());
		this.partitionFields = sortedFields.length ? partitionFields : [];
		this.partitions = this.partitionFields.map(() => new Map());
	}

	get size() {
		return this.records.size;
	}

	get revision() {
		return this.changes;
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
			return paginate(this.matching(query, match), options);
		}

		const position = this.fieldPositions.get(sortBy);
		if (position !== undefined) {
			const index = this.pickIndex(query, position);
			if (!index) {
				return [];
			}
			return this.scanIndex(index, match, desc, options, this.rangeFor(query, sortBy));
		}

		const records = this.matching(query, match);
		if (options.limit === 1 && !options.offset) {
			const found = findExtreme(records, sortBy, desc);
			return found ? [found] : [];
		}

		return paginate(sortRecords(records, sortBy, desc), options);
	}

	findOne(query: RecordQuery<T>): T | null {
		const keys = Object.keys(query);
		if (keys.length === 1 && keys[0] === 'id' && typeof query.id === 'string') {
			return this.get(query.id);
		}

		const match = compileQuery(query);
		if (this.pickPartition(query) !== undefined) {
			return this.matching(query, match)[0] ?? null;
		}

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
		const scan = this.narrowestScan(query);
		if (scan) {
			if (!scan.index) {
				return 0;
			}

			let count = 0;
			scan.index.scan(
				false,
				(record) => {
					if (match(record)) {
						count++;
					}
					return true;
				},
				scan.range,
			);
			return count;
		}

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

		this.changes++;
		this.records.delete(id);
		const meta = this.meta.get(id);
		if (meta) {
			this.unindex(meta);
			this.meta.delete(id);
		}
		return record;
	}

	removeWhere(query: RecordQuery<T>): T[] {
		const removed = this.matching(query, compileQuery(query));
		for (const record of removed) {
			this.remove(record.id);
		}
		return removed;
	}

	updateWhere(query: RecordQuery<T>, change: (record: T) => T): T[] {
		const updated = this.matching(query, compileQuery(query)).map(change);
		for (const record of updated) {
			this.replace(record);
		}
		return updated;
	}

	replaceAll(records: T[]) {
		this.changes++;
		this.records = new Map();
		this.meta = new Map();
		const order: string[] = [];

		for (const record of records) {
			// Later duplicates win, keeping the first one's position
			if (!this.records.has(record.id)) {
				order.push(record.id);
			}
			this.records.set(record.id, record);
		}

		const metas: RecordMeta<T>[] = order.map((id, seq) =>
			this.createMeta(this.records.get(id)!, seq),
		);
		this.nextSeq = order.length;
		this.partitions = this.partitionFields.map(() => new Map());

		const partitionEntries = this.partitionFields.map(
			() => new Map<unknown, IndexEntry<T>[][]>(),
		);
		this.sortedFields.forEach((_, position) => {
			const sorted = metas.map((meta) => meta.entries[position]).sort(compareEntries);
			this.globalIndexes[position] = new SortedIndex<T>();
			this.globalIndexes[position].setSorted(sorted);

			for (const entry of sorted) {
				const meta = this.meta.get(entry.record.id)!;
				meta.parts.forEach((part, p) => {
					let lists = partitionEntries[p].get(part);
					if (!lists) {
						lists = this.sortedFields.map(() => []);
						partitionEntries[p].set(part, lists);
					}
					lists[position].push(entry);
				});
			}
		});

		partitionEntries.forEach((byValue, p) => {
			for (const [part, lists] of byValue) {
				const indexes = lists.map((list) => {
					const index = new SortedIndex<T>();
					index.setSorted(list);
					return index;
				});
				this.partitions[p].set(part, {indexes});
			}
		});
	}

	clear() {
		this.replaceAll([]);
	}

	private createMeta(record: T, seq: number): RecordMeta<T> {
		const meta: RecordMeta<T> = {
			seq,
			entries: this.sortedFields.map((field) => ({value: record[field], seq, record})),
			parts: this.partitionFields.map((field) => record[field]),
		};
		this.meta.set(record.id, meta);
		return meta;
	}

	private add(record: T) {
		this.changes++;
		this.records.set(record.id, record);
		this.index(this.createMeta(record, this.nextSeq++));
	}

	private replace(record: T) {
		this.changes++;
		// Map.set on an existing key keeps its insertion position
		this.records.set(record.id, record);

		const meta = this.meta.get(record.id);
		if (!meta) {
			return;
		}

		const moved =
			this.partitionFields.some((field, p) => record[field] !== meta.parts[p]) ||
			this.sortedFields.some(
				(field, position) =>
					compareValues(meta.entries[position].value, record[field]) !== 0,
			);

		if (!moved) {
			this.sortedFields.forEach((field, position) => {
				meta.entries[position].record = record;
				meta.entries[position].value = record[field];
			});
			return;
		}

		this.unindex(meta);
		this.index(this.createMeta(record, meta.seq));
	}

	private index(meta: RecordMeta<T>) {
		meta.entries.forEach((entry, position) => this.globalIndexes[position].add(entry));
		meta.parts.forEach((part, p) => {
			let partition = this.partitions[p].get(part);
			if (!partition) {
				partition = {indexes: this.sortedFields.map(() => new SortedIndex<T>())};
				this.partitions[p].set(part, partition);
			}
			meta.entries.forEach((entry, position) => partition.indexes[position].add(entry));
		});
	}

	private unindex(meta: RecordMeta<T>) {
		meta.entries.forEach((entry, position) => this.globalIndexes[position].remove(entry));
		meta.parts.forEach((part, p) => {
			const partition = this.partitions[p].get(part);
			if (!partition) {
				return;
			}
			meta.entries.forEach((entry, position) => partition.indexes[position].remove(entry));
			if (!partition.indexes[0].size) {
				this.partitions[p].delete(part);
			}
		});
	}

	private pickPartition(query: RecordQuery<T>): Partition<T> | null | undefined {
		let best: Partition<T> | undefined;
		for (let p = 0; p < this.partitionFields.length; p++) {
			const expected = query[this.partitionFields[p]];
			if (expected === undefined || isRangeQuery(expected)) {
				continue;
			}

			const partition = this.partitions[p].get(expected);
			if (!partition) {
				return null;
			}
			if (!best || partition.indexes[0].size < best.indexes[0].size) {
				best = partition;
			}
		}
		return best;
	}

	private pickIndex(query: RecordQuery<T>, position: number): SortedIndex<T> | null {
		const partition = this.pickPartition(query);
		if (partition === undefined) {
			return this.globalIndexes[position];
		}
		return partition ? partition.indexes[position] : null;
	}

	private rangeFor(query: RecordQuery<T>, field: keyof T): IndexRange {
		const expected = query[field];
		if (!isRangeQuery(expected)) {
			return {};
		}

		const range: IndexRange = {};
		if ('$gt' in expected) {
			range.gt = {value: expected.$gt};
		}
		if ('$lt' in expected) {
			range.lt = {value: expected.$lt};
		}
		return range;
	}

	private narrowestScan(
		query: RecordQuery<T>,
	): {index: SortedIndex<T> | null; range: IndexRange} | null {
		const partition = this.pickPartition(query);
		const rangedPosition = this.sortedFields.findIndex((field) => isRangeQuery(query[field]));

		if (partition === undefined && rangedPosition < 0) {
			return null;
		}

		const position = Math.max(rangedPosition, 0);
		const range = rangedPosition < 0 ? {} : this.rangeFor(query, this.sortedFields[position]);
		return {index: this.pickIndex(query, position), range};
	}

	private matching(query: RecordQuery<T>, match: (record: T) => boolean): T[] {
		const scan = this.narrowestScan(query);
		if (!scan) {
			const out: T[] = [];
			for (const record of this.records.values()) {
				if (match(record)) {
					out.push(record);
				}
			}
			return out;
		}

		if (!scan.index) {
			return [];
		}

		const found: T[] = [];
		scan.index.scan(
			false,
			(record) => {
				if (match(record)) {
					found.push(record);
				}
				return true;
			},
			scan.range,
		);
		return found.sort((a, b) => this.meta.get(a.id)!.seq - this.meta.get(b.id)!.seq);
	}

	private scanIndex(
		index: SortedIndex<T>,
		match: (record: T) => boolean,
		desc: boolean,
		options: FetchOptions<T>,
		range: IndexRange,
	) {
		const out: T[] = [];
		let toSkip = options.offset || 0;
		const limit = options.limit || Infinity;

		index.scan(
			desc,
			(record) => {
				if (!match(record)) {
					return true;
				}
				if (toSkip > 0) {
					toSkip--;
					return true;
				}

				out.push(record);
				return out.length < limit;
			},
			range,
		);

		return out;
	}
}

// Equivalent to a stable sort followed by taking the first record
function findExtreme<T>(records: T[], key: keyof T, desc: boolean): T | null {
	let best: T | null = null;
	for (const record of records) {
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
