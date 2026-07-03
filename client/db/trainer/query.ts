import {LokiFetchOptions} from '../lokijs';
import {fetchRecords, fetchUniqueValuesByField} from '../util';
import {getTrainerDb, TrainerAlgorithmExtended} from './init';

export type FilterTrainerOptions = LokiQuery<TrainerAlgorithmExtended>;

export function fetchTrainerAlgorithmCubeTypes() {
	const db = getTrainerDb();
	return fetchUniqueValuesByField(db, null, 'cube_type');
}

export function fetchTrainerAlgorithmTypes(options: FilterTrainerOptions = {}) {
	const db = getTrainerDb();
	return fetchUniqueValuesByField(db, options, 'algo_type');
}

export function fetchTrainerAlgorithmCount() {
	const db = getTrainerDb();
	return db.count();
}

export function fetchTrainerAlgorithmById(id: string) {
	const db = getTrainerDb();
	return db.findOne({id});
}

export function fetchTrainerAlgorithms(options: FilterTrainerOptions = {}, fetchOptions?: LokiFetchOptions) {
	const db = getTrainerDb();
	return fetchRecords(db, options, fetchOptions);
}
