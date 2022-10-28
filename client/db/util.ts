import {LokiFetchOptions} from './lokijs';

export function cleanFilterOptions<G extends object, T extends LokiQuery<G>>(options: T): T {
	const keys = Object.keys(options || {});

	const out: Partial<T> = {};
	for (const key of keys) {
		if (options[key] !== undefined) {
			out[key as keyof T] = options[key];
		}
	}

	return out as T;
}

/**
 * Takes in a query for (LokiJS) db and returns all the records that match the query
 */
export function fetchRecords<G extends object, T extends LokiQuery<G>>(
	db: Collection<G>,
	options: T,
	fetchOptions?: LokiFetchOptions
): G[] {
	let out = db.chain().find(cleanFilterOptions(options));

	if (fetchOptions?.sortBy) {
		out = out.simplesort(fetchOptions.sortBy as any, {
			desc: !!fetchOptions.sortInverse || false,
		});
	}

	if (fetchOptions?.offset) {
		out = out.offset(fetchOptions.offset);
	}

	if (fetchOptions?.limit) {
		out = out.limit(fetchOptions.limit);
	}

	return out.data();
}

type DistinctColumnCount = {
	value: string;
	count: number;
};

/**
 * Takes in a query for (LokiJS) db and returns all the distinct values for a given column
 */
export function fetchUniqueValuesByField<G extends object, T extends LokiQuery<G>>(
	db: Collection<G>,
	options: T,
	column: keyof G
): DistinctColumnCount[] {
	const typeListMap: Record<string, number> = {};
	const list: DistinctColumnCount[] = [];

	const records = fetchRecords(db, options);

	for (const rec of records) {
		const col = rec[column];
		const colStr = String(col);
		if (colStr in typeListMap) {
			const index = typeListMap[colStr];
			list[index].count++;
		} else {
			typeListMap[colStr] = list.length;
			list.push({
				value: colStr,
				count: 1,
			});
		}
	}

	list.sort((a, b) => b.count - a.count);

	return list;
}
