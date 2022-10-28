import {getTrainerDb} from './init';
import {emitEvent} from '../../util/event_handler';
import {CustomTrainer, CustomTrainerCreateInput} from '../../@types/generated/graphql';
import {gql} from '@apollo/client/core';
import {gqlMutate} from '../../components/api';
import {CUSTOM_TRAINER_FRAGMENT} from '../../util/graphql/fragments';

export async function updateCustomTrainerDb(id: string, input: CustomTrainerCreateInput) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	const query = gql`
		mutation Mutate($id: String, $input: CustomTrainerCreateInput) {
			updateCustomTrainer(id: $id, data: $input) {
				id
			}
		}
	`;

	const algo = {
		...trainer,
		...input,
	};

	trainerDb.update(algo);
	emitEvent('trainerDbUpdatedEvent', algo);

	return await gqlMutate(query, {
		id,
		input,
	});
}

export async function createCustomTrainerDb(trainer: CustomTrainerCreateInput) {
	const trainerDb = getTrainerDb();

	const query = gql`
		${CUSTOM_TRAINER_FRAGMENT}

		mutation Mutate($input: CustomTrainerCreateInput!) {
			createCustomTrainer(data: $input) {
				...CustomTrainerFragment
			}
		}
	`;

	emitEvent('trainerDbUpdatedEvent', trainer);

	const res = await gqlMutate<{createCustomTrainer: CustomTrainer}>(query, {
		input: trainer,
	});

	trainerDb.insert({
		...(res.data.createCustomTrainer as CustomTrainerCreateInput),
	});

	emitEvent('trainerDbUpdatedEvent', trainer);
}

export async function deleteCustomTrainer(id: string) {
	const trainerDb = getTrainerDb();
	const trainer = trainerDb.findOne({
		id,
	});

	const query = gql`
		mutation Mutate($id: String) {
			deleteCustomTrainer(id: $id) {
				id
			}
		}
	`;

	trainerDb.remove(trainer);
	emitEvent('trainerDbUpdatedEvent', trainer);

	await gqlMutate(query, {
		id,
	});
}
