import {AlgorithmOverride} from '../../../../client/@types/generated/graphql';
import {updateTrainerDb} from './update';
import {TrainerAlgorithmExtended} from './init';
import {fetchTrainerAlgorithmById} from './query';
import { api } from '@/trpc/react';

export async function deleteTrainerAlgoOverrides(algo: TrainerAlgorithmExtended) {
  if (!algo) {
    return;
  }

  try {
    // Using tRPC to delete algorithm override
    await api.algorithmOverride.delete.mutate({
      algoKey: algo.id
    });

    updateTrainerDb(algo, {
      overrides: null,
    });
  } catch (error) {
    console.error("Error deleting algorithm override:", error);
  }
}

export async function updateTrainerAlgoOverrides(algo: TrainerAlgorithmExtended, overrides: AlgorithmOverride = {}) {
  if (!algo) {
    return;
  }

  algo.overrides = {
    ...(algo.overrides || {}),
    ...(overrides || {}),
  };

  try {
    // Using tRPC to update algorithm override
    await api.algorithmOverride.update.mutate({
      algoKey: algo.id,
      input: overrides as any
    });

    updateTrainerDb(algo, {
      overrides: algo.overrides,
    });
  } catch (error) {
    console.error("Error updating algorithm override:", error);
  }
}

export async function toggleTrainerAlgoFavorite(algo: TrainerAlgorithmExtended) {
  if (!algo) {
    return;
  }

  try {
    if (algo.favorite) {
      // Delete if already exists
      await api.trainerFavorite.delete.mutate({
        cubeKey: algo.id,
      });
    } else {
      // Create if doesn't exist
      await api.trainerFavorite.create.mutate({
        cubeKey: algo.id,
      });
    }

    const dbAlgo = fetchTrainerAlgorithmById(algo.id);

    updateTrainerDb(dbAlgo, {
      favorite: !algo.favorite,
    });
  } catch (error) {
    console.error("Error toggling trainer favorite:", error);
  }
}