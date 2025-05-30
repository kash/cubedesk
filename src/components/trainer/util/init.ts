import {initTrainerDb} from '@/lib/db/trainer/init';
import {api} from '@/trpc/react';

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
	// TODO: Migrate to tRPC - need customTrainer.getAll endpoint
	return [];
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
		console.error('Error fetching algorithm overrides:', error);
		return [];
	}
}

async function fetchTrainerFavorites() {
	return api.trainerFavorite.getAll.query();
}
