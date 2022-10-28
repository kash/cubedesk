import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
	createRedisKey,
	deleteKeyInRedis,
	getValueFromRedis,
	keyExistsInRedis,
	RedisNamespace,
	setKeyInRedis,
} from '../../services/redis';
import {getAllAirtableResults} from '../../services/airtable';
import {TrainerAlgorithm} from '../../schemas/TrainerAlgorithm.schema';

dayjs.extend(utc);

const redisKey = createRedisKey(RedisNamespace.TRAINER_DATA);
const redisKeyDate = createRedisKey(RedisNamespace.TRAINER_DATA_DATE);

const AIRTABLE_TRAINER_TABLE = 'Trainer';

export async function fetchTrainerAlgorithms() {
	const exists = await keyExistsInRedis(redisKey);

	let trainerVal: TrainerAlgorithm[];
	if (exists) {
		const cachedResult = await getValueFromRedis(redisKey);
		trainerVal = JSON.parse(cachedResult);

		const shouldUpdate = await shouldUpdateCache();
		if (shouldUpdate) {
			await deleteKeyInRedis(redisKeyDate);
			// Leave async and then return
			fetchAndCacheAirtableResults();
		}
	} else {
		trainerVal = await fetchAndCacheAirtableResults();
	}

	return trainerVal;
}

async function fetchAndCacheAirtableResults() {
	const trainerVal = await getAllAirtableResults<TrainerAlgorithm>(AIRTABLE_TRAINER_TABLE);
	await cacheTrainerData(JSON.stringify(trainerVal));

	return trainerVal;
}

async function cacheTrainerData(data: string) {
	const date = dayjs().utc().unix();
	await setKeyInRedis(redisKeyDate, String(date));
	return setKeyInRedis(redisKey, data);
}

async function shouldUpdateCache() {
	const redisVal = await getValueFromRedis(redisKeyDate);
	if (!redisVal) {
		return false;
	}
	const createUnix = parseInt(redisVal);

	const nowDate = dayjs().utc().toDate();

	// Trainer data should only be updated once a day
	const targetDate = dayjs.unix(createUnix).add(1, 'day').toDate();

	return targetDate < nowDate;
}
