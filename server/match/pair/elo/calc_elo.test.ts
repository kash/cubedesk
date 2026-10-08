import {calculateNewElo, EloConst} from '@/server/match/pair/elo/calc_elo';
import {UserEloForEventType} from '@/server/models/elo_rating';
import {generateId} from '@/shared/code';

const DEFAULT_EVENT_TYPE = '333';

describe('calculate ELO after a match', () => {
	test('update payload basic checks', () => {
		const winner = getEloForEventType();
		const loser = getEloForEventType();
		const updatePayload = calculateNewElo(DEFAULT_EVENT_TYPE, winner, loser);

		expect(updatePayload.eventType).toBe(DEFAULT_EVENT_TYPE);
		expect(updatePayload.winner).toMatchObject(winner);
		expect(updatePayload.loser).toMatchObject(loser);
	});

	test('both players brand new', () => {
		const winner = getEloForEventType(0);
		const loser = getEloForEventType(0);

		const updatePayload = calculateNewElo(DEFAULT_EVENT_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1045);
		expect(updatePayload.winnerEloChange).toBe(45);
		expect(updatePayload.loserNewElo).toBe(955);
		expect(updatePayload.loserEloChange).toBe(-45);
	});

	test('both players lower bound', () => {
		const winner = getEloForEventType(10);
		const loser = getEloForEventType(25);

		const updatePayload = calculateNewElo(DEFAULT_EVENT_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1045);
		expect(updatePayload.winnerEloChange).toBe(45);
		expect(updatePayload.loserNewElo).toBe(983);
		expect(updatePayload.loserEloChange).toBe(-17);
	});

	test('both players in between game bounds', () => {
		const winner = getEloForEventType(30);
		const loser = getEloForEventType(40);

		const updatePayload = calculateNewElo(DEFAULT_EVENT_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1012);
		expect(updatePayload.winnerEloChange).toBe(12);
		expect(updatePayload.loserNewElo).toBe(995);
		expect(updatePayload.loserEloChange).toBe(-5);
	});

	test('both players in beyond game bounds', () => {
		const winner = getEloForEventType(45);
		const loser = getEloForEventType(50);

		const updatePayload = calculateNewElo(DEFAULT_EVENT_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1005);
		expect(updatePayload.winnerEloChange).toBe(5);
		expect(updatePayload.loserNewElo).toBe(995);
		expect(updatePayload.loserEloChange).toBe(-5);
	});

	function getEloForEventType(
		games: number = EloConst.ELO_UPPER_GAME_COUNT_BOUND,
		elo: number = EloConst.ELO_STARTING_VALUE
	): UserEloForEventType {
		return {
			userId: generateId(),
			games,
			elo,
		};
	}
});
