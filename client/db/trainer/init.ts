import {Serialized} from '@/types/serialized';
import {
	AlgorithmOverrideInput,
	CustomTrainerWithUser,
	TrainerAlgorithm,
	TrainerAlgorithmRecord,
	TrainerFavorite,
} from '@/types/trainer';
import _ from 'lodash';
import {getLokiDb} from '@/db/lokijs';

export interface TrainerAlgorithmExtended extends TrainerAlgorithmRecord {
	overrides?: AlgorithmOverrideInput | null;
	favorite?: boolean;
}

export function getTrainerDb(): Collection<TrainerAlgorithmExtended> {
	const db = getLokiDb();
	return db.getCollection('trainer');
}

function initTrainerCollection() {
	const db = getLokiDb();

	db.removeCollection('trainer');
	db.addCollection<TrainerAlgorithmExtended>('trainer', {
		unique: ['id'],
		indices: ['name', 'cube_type', 'algo_type', 'group_name'],
	});
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

	initTrainerCollection();

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
			getTrainerDb().insert(insert);
		} catch (e) {
			console.error(e);
		}
	}
}
