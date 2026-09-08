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
		rotate: algo.rotate ?? 0,
		favorite: algo.favorite,
	};

	// Saved overrides include their own ID and metadata. Only merge editable fields
	// so actions such as favoriting continue to target the original trainer case.
	for (const key of ['name', 'solution', 'rotate', 'scrambles']) {
		if (key in ov) {
			newAlgo[key] = ov[key];
		}
	}

	return newAlgo;
}
