import Redis from 'ioredis';
import {logger} from './logger';
import Redlock, {Lock} from 'redlock';

let redlock: Redlock;
let redisPubClient: Redis;
let redisSubClient: Redis;

export enum RedisNamespace {
	PRO_DATA = 'cd:pro',
	PLAY = 'cd:play',
	SITEMAP = 'cd:site:sitemap_lock',
	MATCH_CACHE = 'cd:match:cache',
	MATCH_ACTIVITY = 'cd:match:activity',
	SOCKET_IO_CLIENT_USER = 'cd:socketio:client:user',
	TRAINER_DATA = 'cd:trainerdata',
	TRAINER_DATA_DATE = 'cd:trainerdata:date',
}

export type generatedRedisKey = {
	key: string;
};

export function createRedisKey(redisKey: RedisNamespace, hash: string = ''): generatedRedisKey {
	return {
		key: `${redisKey}#${hash}`,
	};
}

export async function fetchDataFromCache<T>(
	redisKey: generatedRedisKey,
	callback: () => Promise<T>,
	expireSeconds: number
): Promise<T> {
	const processStart = Date.now();
	const redisData = await getValueFromRedis(redisKey);

	let output: T;
	let cacheHit = false;

	if (redisData) {
		cacheHit = true;

		output = JSON.parse(redisData);
	} else {
		output = await callback();
		await setKeyInRedis(redisKey, JSON.stringify(output), expireSeconds);
	}

	logger.debug(`Redis cache ${cacheHit ? 'HIT' : 'MISS'}`, {
		redisKey: redisKey.key,
		processTime: Date.now() - processStart,
	});

	return output;
}

export async function initRedisClient() {
	redisPubClient = new Redis(process.env.REDIS_URL);
	redisSubClient = redisPubClient.duplicate();

	const clientConnectionPromise = [
		new Promise((resolve, reject) => {
			redisPubClient.on('connect', resolve);
			redisPubClient.on('error', (err) => reject(err));
		}),
		new Promise((resolve, reject) => {
			redisSubClient.on('connect', resolve);
			redisSubClient.on('error', (err) => reject(err));
		}),
	];

	logger.debug('Attempting to connect Redis client');
	await Promise.all(clientConnectionPromise);
	connectRedisLock();
	logger.debug('Redis client connected successfully.');
}

function connectRedisLock() {
	redlock = new Redlock([redisPubClient], {
		driftFactor: 0.01,
		retryCount: 0,
		retryJitter: 200,
		automaticExtensionThreshold: 500,
	});
}

export async function acquireRedisLock(redisKey: generatedRedisKey, durationMs: number): Promise<Lock> {
	try {
		return await redlock.acquire([redisKey.key], durationMs);
	} catch (e) {
		return null;
	}
}

export function getRedisPubClient() {
	return redisPubClient;
}

export function getRedisSubClient() {
	return redisSubClient;
}

export async function keyExistsInRedis({key}: generatedRedisKey): Promise<number> {
	const client = getRedisPubClient();
	return client.exists(key);
}

export async function getValueFromRedis({key}: generatedRedisKey): Promise<string> {
	const client = getRedisPubClient();
	return client.get(key);
}

export async function getKeyTTLFromRedis({key}: generatedRedisKey): Promise<number> {
	const client = getRedisPubClient();
	return client.ttl(key);
}

export async function setKeyInRedis({key}: generatedRedisKey, value: string, expireSeconds?: number): Promise<string> {
	const client = getRedisPubClient();
	const res = await client.set(key, value);
	if (expireSeconds) {
		await client.expire(key, expireSeconds);
	}
	return res;
}

export async function deleteKeyInRedis({key}: generatedRedisKey): Promise<number> {
	const client = getRedisPubClient();
	return client.del(key);
}
