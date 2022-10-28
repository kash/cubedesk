import {getTrainerDb, TrainerAlgorithmExtended} from './init';
import {emitEvent} from '../../util/event_handler';

export function updateTrainerDb(algo: TrainerAlgorithmExtended, input: Partial<TrainerAlgorithmExtended>) {
	const trainerDb = getTrainerDb();

	trainerDb.update({
		...algo,
		...input,
	});

	emitEvent('trainerDbUpdatedEvent', algo);
}
