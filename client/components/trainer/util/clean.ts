// We can just use TrainerAlgorithm because it can get messed up between the ones that have the overrides and the ones
// that do not
import {TrainerAlgorithm} from '../../../@types/generated/graphql';
import {TrainerAlgorithmExtended} from '../../../db/trainer/init';

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
			newAlgo[key] = ov[key];
		}
	}

	return newAlgo;
}
