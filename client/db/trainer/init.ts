import _ from 'lodash';
import {getLokiDb} from '../lokijs';
import {AlgorithmOverride, CustomTrainer, TrainerAlgorithm, TrainerFavorite} from '../../@types/generated/graphql';

export interface TrainerAlgorithmExtended extends TrainerAlgorithm {
	overrides?: AlgorithmOverride;
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
	customAlgos: CustomTrainer[],
	algos: TrainerAlgorithm[],
	overrides: AlgorithmOverride[],
	favorites: TrainerFavorite[]
) {
	if (typeof window === 'undefined') {
		return;
	}

	initTrainerCollection();

	const overrideMap = _.chain(overrides).keyBy('cube_key').value();
	const faves = _.chain(favorites).keyBy('cube_key').value();

	for (const algo of [...algos, ...customAlgos]) {
		const insert = {
			...algo,
			overrides: null,
			favorite: false,
		} as TrainerAlgorithmExtended;

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
