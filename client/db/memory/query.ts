import {compareValues} from '@/db/memory/compare';

export interface RangeQuery<V> {
	$gt?: V;
	$lt?: V;
}

/**
 * A field matches when it is strictly equal (===) to the given value, so `{bulk: false}` does not match records
 * where `bulk` is missing or null. Range operators use the ordering in compareValues. Undefined values are ignored.
 */
export type RecordQuery<T> = {
	[K in keyof T]?: T[K] | RangeQuery<NonNullable<T[K]>>;
};

export interface FetchOptions<T> {
	sortBy?: keyof T & string;
	sortInverse?: boolean;
	// Falsy values (including 0) mean no limit/offset
	limit?: number;
	offset?: number;
}

type Predicate<T> = (record: T) => boolean;

function isRangeQuery(value: unknown): value is RangeQuery<unknown> {
	return (
		typeof value === 'object' &&
		value !== null &&
		!(value instanceof Date) &&
		('$gt' in value || '$lt' in value)
	);
}

export function compileQuery<T>(query: RecordQuery<T> = {}): Predicate<T> {
	const tests: Predicate<T>[] = [];

	for (const key of Object.keys(query) as Array<keyof T>) {
		const expected = query[key];
		if (expected === undefined) {
			continue;
		}

		if (isRangeQuery(expected)) {
			const {$gt, $lt} = expected;
			if ('$gt' in expected) {
				tests.push((record) => compareValues(record[key], $gt) > 0);
			}
			if ('$lt' in expected) {
				tests.push((record) => compareValues(record[key], $lt) < 0);
			}
		} else {
			tests.push((record) => record[key] === expected);
		}
	}

	if (!tests.length) {
		return () => true;
	}
	if (tests.length === 1) {
		return tests[0];
	}

	return (record) => {
		for (const test of tests) {
			if (!test(record)) {
				return false;
			}
		}
		return true;
	};
}

/**
 * Stable sort: ties keep their incoming order when ascending. Descending is the exact reverse of ascending.
 */
export function sortRecords<T>(records: T[], key: keyof T, desc: boolean): T[] {
	const sorted = [...records].sort((a, b) => compareValues(a[key], b[key]));
	if (desc) {
		sorted.reverse();
	}
	return sorted;
}

export function paginate<T>(records: T[], options: FetchOptions<T>): T[] {
	let out = records;
	if (options.offset) {
		out = out.slice(options.offset);
	}
	if (options.limit) {
		out = out.slice(0, options.limit);
	}
	return out;
}
