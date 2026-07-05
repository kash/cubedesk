import {TrainerAlgorithmExtended} from '@/db/trainer/init';
import {TrainerAlgorithmRecord} from '@/types/trainer';

// Overrides flattened back into the record; no `overrides` key
export interface TrainerAlgorithmClean extends TrainerAlgorithmRecord {
	favorite?: boolean;
}

export function cleanTrainerAlgorithm(algo: TrainerAlgorithmExtended): TrainerAlgorithmClean {
	const ov = algo.overrides || {};

	const newAlgo: TrainerAlgorithmClean = {
		...algo,
		rotate: 0,
		favorite: algo.favorite,
	};

	for (const key of Object.keys(newAlgo)) {
		if (key in ov) {
			newAlgo[key] = ov[key];
		}
	}

	return newAlgo;
}
