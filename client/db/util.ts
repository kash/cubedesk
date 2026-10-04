import {FetchOptions, RecordQuery} from '@/db/memory/query';
import {MemoryTable} from '@/db/memory/table';

/**
 * Returns all the records in a table that match the query
 */
export function fetchRecords<G extends {id: string}>(
	db: MemoryTable<G>,
	options: RecordQuery<G>,
	fetchOptions?: FetchOptions<G>
): G[] {
	return db.find(options, fetchOptions);
}

type DistinctColumnCount = {
	value: string;
	count: number;
};

/**
 * Returns all the distinct values for a given column among records that match the query, most common first
 */
export function fetchUniqueValuesByField<G extends {id: string}>(
	db: MemoryTable<G>,
	options: RecordQuery<G>,
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
