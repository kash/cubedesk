import {AlgorithmOverride} from '../../@types/generated/graphql';
import {updateTrainerDb} from './update';
import {TrainerAlgorithmExtended} from './init';
import {gql} from '@apollo/client/core';
import {gqlMutate} from '../../components/api';
import {fetchTrainerAlgorithmById} from './query';

export async function deleteTrainerAlgoOverrides(algo: TrainerAlgorithmExtended) {
	if (!algo) {
		return;
	}

	const query = gql`
		mutation Mutate($algoKey: String) {
			deleteAlgorithmOverride(algoKey: $algoKey) {
				id
			}
		}
	`;

	await gqlMutate(query, {
		algoKey: algo.id,
	});

	updateTrainerDb(algo, {
		overrides: null,
	});
}

export async function updateTrainerAlgoOverrides(algo: TrainerAlgorithmExtended, overrides: AlgorithmOverride = {}) {
	if (!algo) {
		return;
	}

	algo.overrides = {
		...(algo.overrides || {}),
		...(overrides || {}),
	};

	const query = gql`
		mutation Mutate($algoKey: String, $input: AlgorithmOverrideInput) {
			updateAlgorithmOverride(algoKey: $algoKey, input: $input) {
				id
			}
		}
	`;

	await gqlMutate(query, {
		algoKey: algo.id,
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
		const query = gql`
			mutation Mutate($cubeKey: String) {
				deleteTrainerFavorite(cubeKey: $cubeKey) {
					id
				}
			}
		`;

		gqlMutate(query, {
			cubeKey: algo.id,
		});
	} else {
		// Create if doesn't exist
		const query = gql`
			mutation Mutate($cubeKey: String) {
				createTrainerFavorite(cubeKey: $cubeKey) {
					id
				}
			}
		`;

		gqlMutate(query, {
			cubeKey: algo.id,
		});
	}

	const dbAlgo = fetchTrainerAlgorithmById(algo.id);

	updateTrainerDb(dbAlgo, {
		favorite: !algo.favorite,
	});
}
