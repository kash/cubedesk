import {getPrisma} from '@/server/database';
import {CATALOG_ID} from '@/server/models/trainer/catalog';
import {createRedisKey, getValueFromRedis, RedisNamespace} from '@/server/services/redis';
import {trainerAlgorithmSchema} from '@/shared/trainer/catalog';
import {TrainerAlgorithm} from '@/types/trainer';

// Transitional read-only bridge. Never refresh or write the legacy Redis catalog.
export async function fetchTrainerAlgorithms(): Promise<TrainerAlgorithm[]> {
	const db = getPrisma();
	const state = await db.trainerCatalogState.findUnique({where: {id: CATALOG_ID}});
	if (state?.initialized_at) {
		const algorithms = await db.trainerAlgorithm.findMany({
			where: {active: true},
			orderBy: {id: 'asc'},
		});
		return algorithms.map((algorithm) => trainerAlgorithmSchema.parse(algorithm));
	}
	const cached = await getValueFromRedis(createRedisKey(RedisNamespace.TRAINER_DATA));
	if (!cached) return [];
	const parsed: unknown = JSON.parse(cached);
	if (!Array.isArray(parsed))
		throw new Error(
			'The legacy trainer catalog is invalid. An administrator needs to import the CSV.',
		);
	return parsed
		.map((record) => trainerAlgorithmSchema.parse(record))
		.filter((record) => record.active);
}
