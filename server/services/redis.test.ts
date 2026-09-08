import {getRedisPubClient, getRedisSubClient, initRedisClient} from '@/server/services/redis';
import Redlock from 'redlock';

jest.mock('@/server/services/logger', () => ({logger: {debug: jest.fn()}}));
jest.mock('redlock', () => ({__esModule: true, default: jest.fn()}));
jest.mock('ioredis', () => {
	const {EventEmitter} = jest.requireActual('node:events');
	class MockRedis extends EventEmitter {
		duplicate() {
			return new MockRedis();
		}
	}
	return {__esModule: true, default: MockRedis};
});

const originalRedisUrl = process.env.REDIS_URL;

beforeEach(() => {
	process.env.REDIS_URL = 'redis://localhost:6379';
	jest.clearAllMocks();
});

afterEach(() => {
	if (originalRedisUrl === undefined) delete process.env.REDIS_URL;
	else process.env.REDIS_URL = originalRedisUrl;
});

it('waits for both clients to be ready before initializing dependent services', async () => {
	let initialized = false;
	const initialization = initRedisClient().then(() => {
		initialized = true;
	});
	const publisher = getRedisPubClient();
	const subscriber = getRedisSubClient();

	publisher.emit('connect');
	subscriber.emit('connect');
	await new Promise<void>((resolve) => setImmediate(resolve));
	expect(initialized).toBe(false);
	expect(Redlock).not.toHaveBeenCalled();

	publisher.emit('ready');
	await new Promise<void>((resolve) => setImmediate(resolve));
	expect(initialized).toBe(false);

	subscriber.emit('ready');
	await initialization;
	expect(initialized).toBe(true);
	expect(Redlock).toHaveBeenCalledTimes(1);
});

it('rejects startup when a client fails before becoming ready', async () => {
	const initialization = initRedisClient();
	const rejection = expect(initialization).rejects.toThrow('Redis authentication failed');
	getRedisPubClient().emit('error', new Error('Redis authentication failed'));
	await rejection;
	expect(Redlock).not.toHaveBeenCalled();
});
