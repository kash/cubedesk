import {MemoryTable} from '@/db/memory/table';
import {Serialized} from '@/types/serialized';
import {
	AlgorithmOverrideInput,
	CustomTrainerWithUser,
	TrainerAlgorithm,
	TrainerAlgorithmRecord,
	TrainerFavorite,
} from '@/types/trainer';
import _ from 'lodash';

export interface TrainerAlgorithmExtended extends TrainerAlgorithmRecord {
	overrides?: AlgorithmOverrideInput | null;
	favorite?: boolean;
}

// Refetched on every load, so it is never persisted. Null until trainer data has loaded.
let trainerDb: MemoryTable<TrainerAlgorithmExtended> | null = null;

export function getTrainerDb(): MemoryTable<TrainerAlgorithmExtended> | null {
	return trainerDb;
}

export function initTrainerDb(
	customAlgos: Array<Serialized<CustomTrainerWithUser>>,
	algos: TrainerAlgorithm[],
	overrides: AlgorithmOverrideInput[],
	favorites: Array<Serialized<TrainerFavorite>>
) {
	if (typeof window === 'undefined') {
		return;
	}

	const table = resetTrainerDb();

	const overrideMap = _.chain(overrides).keyBy('cube_key').value();
	const faves = _.chain(favorites).keyBy('cube_key').value();

	for (const algo of [...algos, ...customAlgos]) {
		const insert: TrainerAlgorithmExtended = {
			...algo,
			overrides: null,
			favorite: false,
		};

		const overrides = overrideMap[algo.id];
		if (overrides) {
			insert.overrides = overrides;
		}

		if (faves[algo.id]) {
			insert.favorite = true;
		}

		try {
			table.insert(insert);
		} catch (e) {
			console.error(e);
		}
	}
}

export function resetTrainerDb() {
	trainerDb = new MemoryTable<TrainerAlgorithmExtended>();
	return trainerDb;
}
