// We can just use TrainerAlgorithm because it can get messed up between the ones that have the overrides and the ones that do not
import {TrainerAlgorithmExtended} from '@/lib/db/trainer/init';
import {TrainerAlgorithm} from '@/lib/types/stats';

export interface TrainerAlgorithmClean extends TrainerAlgorithm {
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
			newAlgo[key as keyof typeof newAlgo] = ov[key as keyof typeof ov];
		}
	}

	return newAlgo;
}
