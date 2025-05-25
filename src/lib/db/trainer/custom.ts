import {getTrainerDb} from './init';
import {emitEvent} from '../../util/event_handler';
import { CustomTrainer } from '@/generated/zod';
import { api } from '@/trpc/react';

// Define our own CustomTrainerCreateInput type to match the tRPC input
export interface CustomTrainerCreateInput {
	solution: string;
	colors?: string;
	cube_type: string;
	group_name: string;
	scrambles?: string;
	alt_solutions: string;
	three_d: boolean;
	name: string;
	private: boolean;
	description?: string;
}

export async function updateCustomTrainerDb(id: string, input: CustomTrainerCreateInput) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	const algo = {
		...trainer,
		...input,
	};

	trainerDb.update(algo);
	emitEvent('trainerDbUpdatedEvent', algo);

	// Use tRPC instead of GraphQL
	return await api.customTrainer.update.mutate({
		id,
		data: input,
	});
}

export async function createCustomTrainerDb(trainer: CustomTrainerCreateInput) {
	const trainerDb = getTrainerDb();

	emitEvent('trainerDbUpdatedEvent', trainer);

	// Use tRPC instead of GraphQL
	const result = await api.customTrainer.create.mutate(trainer);

	trainerDb.insert({
		...result,
	});

	emitEvent('trainerDbUpdatedEvent', trainer);
	
	return result;
}

export async function deleteCustomTrainer(id: string) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	trainerDb.remove(trainer);
	emitEvent('trainerDbUpdatedEvent', trainer);

	// Use tRPC instead of GraphQL
	await api.customTrainer.delete.mutate({ id });
}
