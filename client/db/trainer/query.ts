import {FetchOptions, RecordQuery} from '@/db/memory/query';
import {getTrainerDb, TrainerAlgorithmExtended} from '@/db/trainer/init';
import {fetchRecords, fetchUniqueValuesByField} from '@/db/util';

export type FilterTrainerOptions = RecordQuery<TrainerAlgorithmExtended>;

export function fetchTrainerAlgorithmCubeTypes() {
	const db = getTrainerDb();
	if (!db) return [];
	return fetchUniqueValuesByField(db, {}, 'cube_type');
}

export function fetchTrainerAlgorithmTypes(options: FilterTrainerOptions = {}) {
	const db = getTrainerDb();
	if (!db) return [];
	return fetchUniqueValuesByField(db, options, 'algo_type');
}

export function fetchTrainerAlgorithmCount() {
	const db = getTrainerDb();
	return db?.size ?? 0;
}

export function fetchTrainerAlgorithmById(id: string) {
	const db = getTrainerDb();
	return db?.get(id) ?? null;
}

export function fetchTrainerAlgorithms(
	options: FilterTrainerOptions = {},
	fetchOptions?: FetchOptions<TrainerAlgorithmExtended>,
) {
	const db = getTrainerDb();
	if (!db) return [];
	return fetchRecords(db, options, fetchOptions);
}
