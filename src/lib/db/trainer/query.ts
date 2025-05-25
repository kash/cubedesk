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

export function fetchGroupTypes(options: FilterTrainerOptions = {}) {
	const db = getTrainerDb();
	return fetchUniqueValuesByField(db, options, 'group_name');
}

export function fetchTrainerAlgorithmById(id: string) {
	const db = getTrainerDb();
	return db.findOne({id});
}

export function fetchTrainerAlgorithmsGroupedByGroupName(options: FilterTrainerOptions = {}) {
	const algs = fetchTrainerAlgorithms(options, {
		sortBy: 'group_name',
	});

	type AlgGroup = {
		group_name: string;
		algs: TrainerAlgorithmExtended[];
	};

	const out: AlgGroup[] = [];
	let lastGroup = '';
	let tempGroup: TrainerAlgorithmExtended[] = [];

	// Group algs by group_name
	function updateOutputGroup() {
		if (tempGroup.length) {
			out.push({
				group_name: lastGroup,
				algs: tempGroup,
			});
		}
	}

	for (const alg of algs) {
		if (lastGroup !== alg.group_name) {
			updateOutputGroup();

			lastGroup = alg.group_name || '';
			tempGroup = [];
		}

		tempGroup.push(alg);
	}

	updateOutputGroup();

	return out;
}

export function fetchTrainerAlgorithms(options: FilterTrainerOptions = {}, fetchOptions?: LokiFetchOptions) {
	const db = getTrainerDb();
	return fetchRecords(db, options, fetchOptions);
}
