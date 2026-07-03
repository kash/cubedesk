import {AlgorithmOverrideInput, CustomTrainerWithUser, TrainerAlgorithm, TrainerFavorite} from '@/types/trainer';
import {Serialized} from '@/types/serialized';
import {trpc} from '@/util/trpc';
import {initTrainerDb} from '@/db/trainer/init';

export async function initTrainerData() {
	const [customAlgos, algos, overrides, favorites] = await Promise.all([
		trpc.customTrainer.list.query(),
		trpc.trainer.algorithms.query(),
		trpc.trainer.listAlgorithmOverrides.query(),
		trpc.trainer.listFavorites.query(),
	]);

	initTrainerDb(
		customAlgos as Array<Serialized<CustomTrainerWithUser>>,
		algos,
		overrides as AlgorithmOverrideInput[],
		favorites as Array<Serialized<TrainerFavorite>>
	);
}
