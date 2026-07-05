import {initTrainerDb} from '@/db/trainer/init';
import {Serialized} from '@/types/serialized';
import {AlgorithmOverrideInput, CustomTrainerWithUser, TrainerFavorite} from '@/types/trainer';
import {trpc} from '@/util/trpc';

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
