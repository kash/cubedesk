import {CustomTrainerInput} from '@/types/trainer';
import {emitEvent} from '../../util/event_handler';
import {trpc} from '../../util/trpc';
import {getTrainerDb, TrainerAlgorithmExtended} from './init';

export async function updateCustomTrainerDb(id: string, input: CustomTrainerInput) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	const algo = {
		...trainer,
		...input,
	};

	trainerDb.update(algo as TrainerAlgorithmExtended);
	emitEvent('trainerDbUpdatedEvent', algo);

	return await trpc.customTrainer.update.mutate({
		id,
		data: input,
	});
}

export async function createCustomTrainerDb(trainer: CustomTrainerInput) {
	const trainerDb = getTrainerDb();

	emitEvent('trainerDbUpdatedEvent', trainer);

	const newTrainer = await trpc.customTrainer.create.mutate(trainer);

	trainerDb.insert({
		...newTrainer,
	} as unknown as TrainerAlgorithmExtended);

	emitEvent('trainerDbUpdatedEvent', trainer);
}

export async function deleteCustomTrainer(id: string) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	trainerDb.remove(trainer);
	emitEvent('trainerDbUpdatedEvent', trainer);

	await trpc.customTrainer.delete.mutate({
		id,
	});
}
