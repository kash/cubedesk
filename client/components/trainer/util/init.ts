import {AlgorithmOverride, CustomTrainer, TrainerAlgorithm, TrainerFavorite} from '../../../@types/generated/graphql';
import {gql} from '@apollo/client';
import {
	ALGORITHM_OVERRIDE_FRAGMENT,
	CUSTOM_TRAINER_FRAGMENT,
	TRAINER_ALGORITHM_FRAGMENT,
	TRAINER_FAVORITE_FRAGMENT,
} from '../../../util/graphql/fragments';
import {gqlQuery} from '../../api';
import {initTrainerDb} from '../../../db/trainer/init';

export async function initTrainerData() {
	const data = await Promise.all([
		fetchCustomAlgos(),
		fetchAlgos(),
		fetchAlgorithmOverrides(),
		fetchTrainerFavorites(),
	]);

	const customAlgos = data[0];
	const algos = data[1];
	const overrides = data[2];
	const favorites = data[3];

	initTrainerDb(customAlgos, algos, overrides, favorites);
}

async function fetchCustomAlgos() {
	const query = gql`
		${CUSTOM_TRAINER_FRAGMENT}

		query Query {
			customTrainers {
				...CustomTrainerFragment
			}
		}
	`;

	const res = await gqlQuery<{customTrainers: CustomTrainer[]}>(query);
	return res.data.customTrainers;
}

async function fetchAlgos() {
	const query = gql`
		${TRAINER_ALGORITHM_FRAGMENT}

		query Query {
			trainerAlgorithms {
				...TrainerAlgorithmFragment
			}
		}
	`;

	const res = await gqlQuery<{trainerAlgorithms: TrainerAlgorithm[]}>(query);
	return res.data.trainerAlgorithms;
}

async function fetchAlgorithmOverrides() {
	const query = gql`
		${ALGORITHM_OVERRIDE_FRAGMENT}

		query Query {
			algorithmOverrides {
				...AlgorithmOverrideFragment
			}
		}
	`;

	const res = await gqlQuery<{algorithmOverrides: AlgorithmOverride[]}>(query);
	return res.data.algorithmOverrides;
}

async function fetchTrainerFavorites() {
	const query = gql`
		${TRAINER_FAVORITE_FRAGMENT}

		query Query {
			trainerFavorites {
				...TrainerFavoriteFragment
			}
		}
	`;

	const res = await gqlQuery<{trainerFavorites: TrainerFavorite[]}>(query);
	return res.data.trainerFavorites;
}
