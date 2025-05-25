import {AlgorithmOverride, CustomTrainer} from '../../../../client/@types/generated/graphql';
import {gql} from '@apollo/client';
import {
  CUSTOM_TRAINER_FRAGMENT,
} from '../../../lib/util/graphql/fragments';
import {gqlQuery} from '../../api';
import {initTrainerDb} from '../../../lib/db/trainer/init';
import { api } from '@/trpc/react';

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
  return api.trainerAlgorithm.getAll.query();
}

async function fetchAlgorithmOverrides() {
  // Using tRPC to fetch algorithm overrides
  try {
    const result = await api.algorithmOverride.getAll.query();
    return result;
  } catch (error) {
    console.error("Error fetching algorithm overrides:", error);
    return [];
  }
}

async function fetchTrainerFavorites() {
  return api.trainerFavorite.getAll.query();
}