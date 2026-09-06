import {initTrainerDb} from '@/db/trainer/init';
import {Serialized} from '@/types/serialized';
import {AlgorithmOverrideInput, CustomTrainerWithUser, TrainerFavorite} from '@/types/trainer';
import {trpc} from '@/util/trpc';
import {emitEvent} from '@/util/event_handler';

let pending: Promise<void> | null = null;

export function initTrainerData(): Promise<void> {
	if (!pending)
		pending = loadTrainerData().finally(() => {
			pending = null;
		});
	return pending;
}

async function loadTrainerData() {
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
		favorites as Array<Serialized<TrainerFavorite>>,
	);
	emitEvent('trainerDbUpdatedEvent');
}
