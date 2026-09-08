import {getAdminMetrics} from '@/server/services/admin_metrics';
import {getRedisPubClient} from '@/server/services/redis';

jest.mock('@/server/services/redis', () => ({
	RedisNamespace: {ADMIN_METRICS: 'cd:admin:metrics'},
	createRedisKey: (namespace: string, version: string) => ({key: `${namespace}#${version}`}),
	getRedisPubClient: jest.fn(),
}));
jest.mock('@/server/services/logger', () => ({logger: {error: jest.fn(), info: jest.fn()}}));
jest.mock('@/server/models/admin_metrics', () => ({buildAdminMetrics: jest.fn()}));

it('rejects a version 1 snapshot and uses the version 2 cache namespace', async () => {
	const get = jest
		.fn()
		.mockResolvedValue(
			JSON.stringify({version: 1, cutoff: new Date().toISOString(), days: []}),
		);
	(getRedisPubClient as jest.Mock).mockReturnValue({
		status: 'ready',
		get,
		exists: jest.fn().mockResolvedValue(1),
	});
	expect(await getAdminMetrics()).toEqual({status: 'unavailable'});
	expect(get).toHaveBeenCalledWith('cd:admin:metrics#v2');
});

it('returns a current version 2 snapshot', async () => {
	const snapshot = {version: 2, cutoff: new Date().toISOString(), days: []};
	(getRedisPubClient as jest.Mock).mockReturnValue({
		status: 'ready',
		get: jest.fn().mockResolvedValue(JSON.stringify(snapshot)),
	});
	expect(await getAdminMetrics()).toEqual({status: 'ready', snapshot, stale: false});
});
