import {getTrainerDb, TrainerAlgorithmExtended} from '@/db/trainer/init';
import {CustomTrainerInput} from '@/types/trainer';
import {emitEvent} from '@/util/event_handler';
import {trpc} from '@/util/trpc';

export async function updateCustomTrainerDb(id: string, input: CustomTrainerInput) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb?.get(id);

	const algo = {
		...trainer,
		...input,
	};

	trainerDb?.update(algo as TrainerAlgorithmExtended);
	emitEvent('trainerDbUpdatedEvent', algo);

	return await trpc.customTrainer.update.mutate({
		id,
		data: input,
	});
}

export async function createCustomTrainerDb(trainer: CustomTrainerInput) {
	emitEvent('trainerDbUpdatedEvent', trainer);

	const newTrainer = await trpc.customTrainer.create.mutate(trainer);

	getTrainerDb()?.insert({
		...newTrainer,
	} as unknown as TrainerAlgorithmExtended);

	emitEvent('trainerDbUpdatedEvent', trainer);
}

export async function deleteCustomTrainer(id: string) {
	const trainer = getTrainerDb()?.remove(id);

	if (trainer) {
		emitEvent('trainerDbUpdatedEvent', trainer);
	}

	await trpc.customTrainer.delete.mutate({
		id,
	});
}
