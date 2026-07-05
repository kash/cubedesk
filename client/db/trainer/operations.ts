import {AlgorithmOverrideInput} from '@/types/trainer';
import {trpc} from '../../util/trpc';
import {TrainerAlgorithmExtended} from './init';
import {fetchTrainerAlgorithmById} from './query';
import {updateTrainerDb} from './update';

export async function deleteTrainerAlgoOverrides(algo: TrainerAlgorithmExtended) {
	if (!algo) {
		return;
	}

	await trpc.trainer.deleteAlgorithmOverride.mutate({
		algoKey: algo.id!,
	});

	updateTrainerDb(algo, {
		overrides: null,
	});
}

export async function updateTrainerAlgoOverrides(algo: TrainerAlgorithmExtended, overrides: AlgorithmOverrideInput = {}) {
	if (!algo) {
		return;
	}

	algo.overrides = {
		...(algo.overrides || {}),
		...(overrides || {}),
	};

	await trpc.trainer.updateAlgorithmOverride.mutate({
		algoKey: algo.id!,
		input: overrides,
	});

	updateTrainerDb(algo, {
		overrides: algo.overrides,
	});
}

export function toggleTrainerAlgoFavorite(algo: TrainerAlgorithmExtended) {
	if (!algo) {
		return;
	}

	if (algo.favorite) {
		// Delete if already exists
		trpc.trainer.deleteFavorite.mutate({
			cubeKey: algo.id!,
		});
	} else {
		// Create if doesn't exist
		trpc.trainer.createFavorite.mutate({
			cubeKey: algo.id!,
		});
	}

	const dbAlgo = fetchTrainerAlgorithmById(algo.id);
	if (!dbAlgo) {
		return;
	}

	updateTrainerDb(dbAlgo, {
		favorite: !algo.favorite,
	});
}
