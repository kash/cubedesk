import {fetchTrainerAlgorithms} from '@/server/models/trainer/fetch';
import {getPrisma} from '@/server/database';
import {getValueFromRedis} from '@/server/services/redis';

jest.mock('@/server/database', () => ({getPrisma: jest.fn()}));
jest.mock('@/server/services/redis', () => ({
	getValueFromRedis: jest.fn(),
	createRedisKey: jest.fn(() => ({key: 'cd:trainerdata#'})),
	RedisNamespace: {TRAINER_DATA: 'cd:trainerdata'},
}));

const state = jest.fn();
const findMany = jest.fn();
beforeEach(() => {
	jest.clearAllMocks();
	(getPrisma as jest.Mock).mockReturnValue({
		trainerCatalogState: {findUnique: state},
		trainerAlgorithm: {findMany},
	});
});

test('reads legacy Redis before initialization without writing or refreshing', async () => {
	state.mockResolvedValue(null);
	(getValueFromRedis as jest.Mock).mockResolvedValue(
		JSON.stringify([
			{
				id: '333_oll_1',
				name: '1',
				cube_type: '333',
				algo_type: 'OLL',
				active: true,
				pro_only: true,
			},
		]),
	);
	expect(await fetchTrainerAlgorithms()).toEqual([
		expect.objectContaining({id: '333_oll_1', active: true}),
	]);
	expect(findMany).not.toHaveBeenCalled();
});

test('missing Redis produces an empty catalog; Redis failure is surfaced', async () => {
	state.mockResolvedValue(null);
	(getValueFromRedis as jest.Mock).mockResolvedValue(null);
	expect(await fetchTrainerAlgorithms()).toEqual([]);
	(getValueFromRedis as jest.Mock).mockRejectedValue(new Error('Redis unavailable'));
	await expect(fetchTrainerAlgorithms()).rejects.toThrow('Redis unavailable');
});

test('initialized catalogs never fall back, including zero published rows and database errors', async () => {
	state.mockResolvedValue({initialized_at: new Date()});
	findMany.mockResolvedValue([]);
	expect(await fetchTrainerAlgorithms()).toEqual([]);
	expect(findMany).toHaveBeenCalledWith({where: {active: true}, orderBy: {id: 'asc'}});
	findMany.mockRejectedValue(new Error('PostgreSQL unavailable'));
	await expect(fetchTrainerAlgorithms()).rejects.toThrow('PostgreSQL unavailable');
	expect(getValueFromRedis).not.toHaveBeenCalled();
});
