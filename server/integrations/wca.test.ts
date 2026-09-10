import axios from 'axios';
import {getWcaStats, normalizeWcaPerson} from './wca';

jest.mock('axios', () => ({
	__esModule: true,
	default: {...jest.requireActual('axios'), get: jest.fn()},
}));
const get = jest.mocked(axios.get);
const wcaId = '2000TEST01';
const person = {
	id: wcaId,
	numberOfCompetitions: 2,
	competitionIds: ['ZOlder2025', 'ANewer2026'],
	rank: {
		singles: [
			{eventId: '222', best: 300, rank: {world: 400, country: 20}},
			{eventId: '333', best: 800, rank: {world: 1000, country: 50}},
			{eventId: '333bf', best: -1},
		],
		averages: [{eventId: '333', best: 1200, rank: {world: 0, country: null}}],
	},
};
beforeEach(() => jest.resetAllMocks());
afterEach(() => jest.restoreAllMocks());

it('joins singles and averages, sorts events, and normalizes absent rankings', () => {
	expect(normalizeWcaPerson({...person, email: 'private'}, wcaId)).toEqual({
		competitionCount: 2,
		competitionIds: person.competitionIds,
		records: [
			{
				eventId: '333',
				single: {value: 800, nationalRank: 50, worldRank: 1000},
				average: {value: 1200, nationalRank: null, worldRank: null},
			},
			{eventId: '222', single: {value: 300, nationalRank: 20, worldRank: 400}, average: null},
		],
	});
});

it('rejects a mismatched identity or malformed response', () => {
	expect(() => normalizeWcaPerson(person, '2001TEST01')).toThrow();
	expect(() => normalizeWcaPerson({id: wcaId}, wcaId)).toThrow();
});

it('selects the latest competition by date and never sends OAuth headers', async () => {
	get.mockImplementation(async (url) => ({
		data: String(url).includes('/persons/')
			? person
			: {
					id: String(url).includes('ZOlder') ? 'ZOlder2025' : 'ANewer2026',
					name: 'Competition',
					date: {from: String(url).includes('ZOlder') ? '2025-09-01' : '2026-08-01'},
				},
	}));
	const result = await getWcaStats(wcaId);
	expect(result.status).toBe('ready');
	expect(result.stats?.latestCompetition).toEqual({
		id: 'ANewer2026',
		name: 'Competition',
		date: '2026-08-01',
		url: 'https://www.worldcubeassociation.org/competitions/ANewer2026',
	});
	for (const [, options] of get.mock.calls) {
		expect(options?.timeout).toBeLessThanOrEqual(5000);
		expect(options).not.toHaveProperty('headers');
	}
});

it('retains PBs if any competition details fail instead of showing a potentially wrong latest competition', async () => {
	get.mockResolvedValueOnce({data: person});
	get.mockRejectedValue(new Error('timeout'));
	const result = await getWcaStats(wcaId);
	expect(result).toMatchObject({
		status: 'ready',
		stats: {
			competitionCount: 2,
			latestCompetition: null,
			competitionDetailsUnavailable: true,
		},
	});
	expect(result.stats?.records).toHaveLength(2);
});

it('runs at most four competition requests concurrently and stops scheduling after failure', async () => {
	const ids = Array.from({length: 12}, (_, i) => `Comp${i}`);
	get.mockResolvedValueOnce({data: {...person, competitionIds: ids}});
	let active = 0;
	let maximum = 0;
	get.mockImplementation(async () => {
		active++;
		maximum = Math.max(maximum, active);
		await Promise.resolve();
		active--;
		throw new Error('Unavailable');
	});
	await getWcaStats(wcaId);
	expect(maximum).toBe(4);
	expect(get).toHaveBeenCalledTimes(5);
});

it('bounds the total competition lookup duration', async () => {
	let now = 0;
	jest.spyOn(Date, 'now').mockImplementation(() => now);
	get.mockResolvedValueOnce({
		data: {...person, competitionIds: Array.from({length: 12}, (_, i) => `Comp${i}`)},
	});
	get.mockImplementation(async (url) => {
		now += 3000;
		const id = String(url).split('/').pop()!.replace('.json', '');
		return {data: {id, name: id, date: {from: '2026-01-01'}}};
	});
	const result = await getWcaStats(wcaId);
	expect(get.mock.calls.length).toBeLessThanOrEqual(5);
	expect(result.stats?.competitionDetailsUnavailable).toBe(true);
});

it.each([
	[404, 'no_results'],
	[429, 'unavailable'],
	[500, 'unavailable'],
])('handles HTTP %s as %s without retrying', async (status, expected) => {
	get.mockRejectedValue({isAxiosError: true, response: {status}});
	await expect(getWcaStats(wcaId)).resolves.toEqual({status: expected, stats: null});
	expect(get).toHaveBeenCalledTimes(1);
});

it('handles an empty competition history', async () => {
	get.mockResolvedValue({
		data: {
			...person,
			numberOfCompetitions: 0,
			competitionIds: [],
			rank: {singles: [], averages: []},
		},
	});
	await expect(getWcaStats(wcaId)).resolves.toEqual({
		status: 'ready',
		stats: {
			competitionCount: 0,
			records: [],
			latestCompetition: null,
			competitionDetailsUnavailable: false,
		},
	});
	expect(get).toHaveBeenCalledTimes(1);
});

it('does not make requests for malformed WCA IDs', async () => {
	await expect(getWcaStats('../secret')).resolves.toEqual({status: 'unavailable', stats: null});
	expect(get).not.toHaveBeenCalled();
});

it('returns an unavailable state for invalid upstream data', async () => {
	get.mockResolvedValue({data: {id: wcaId}});
	await expect(getWcaStats(wcaId)).resolves.toEqual({status: 'unavailable', stats: null});
});
