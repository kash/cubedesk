import {UserEloForCubeType} from '../../../models/elo_rating';
import {generateId} from '../../../../shared/code';
import {calculateNewElo, EloConst} from './calc_elo';

const DEFAULT_CUBE_TYPE = '333';

describe('calculate ELO after a match', () => {
	test('update payload basic checks', () => {
		const winner = getEloForCubeType();
		const loser = getEloForCubeType();
		const updatePayload = calculateNewElo(DEFAULT_CUBE_TYPE, winner, loser);

		expect(updatePayload.cubeType).toBe(DEFAULT_CUBE_TYPE);
		expect(updatePayload.winner).toMatchObject(winner);
		expect(updatePayload.loser).toMatchObject(loser);
	});

	test('both players brand new', () => {
		const winner = getEloForCubeType(0);
		const loser = getEloForCubeType(0);

		const updatePayload = calculateNewElo(DEFAULT_CUBE_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1045);
		expect(updatePayload.winnerEloChange).toBe(45);
		expect(updatePayload.loserNewElo).toBe(955);
		expect(updatePayload.loserEloChange).toBe(-45);
	});

	test('both players lower bound', () => {
		const winner = getEloForCubeType(10);
		const loser = getEloForCubeType(25);

		const updatePayload = calculateNewElo(DEFAULT_CUBE_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1045);
		expect(updatePayload.winnerEloChange).toBe(45);
		expect(updatePayload.loserNewElo).toBe(983);
		expect(updatePayload.loserEloChange).toBe(-17);
	});

	test('both players in between game bounds', () => {
		const winner = getEloForCubeType(30);
		const loser = getEloForCubeType(40);

		const updatePayload = calculateNewElo(DEFAULT_CUBE_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1012);
		expect(updatePayload.winnerEloChange).toBe(12);
		expect(updatePayload.loserNewElo).toBe(995);
		expect(updatePayload.loserEloChange).toBe(-5);
	});

	test('both players in beyond game bounds', () => {
		const winner = getEloForCubeType(45);
		const loser = getEloForCubeType(50);

		const updatePayload = calculateNewElo(DEFAULT_CUBE_TYPE, winner, loser);

		expect(updatePayload.winnerNewElo).toBe(1005);
		expect(updatePayload.winnerEloChange).toBe(5);
		expect(updatePayload.loserNewElo).toBe(995);
		expect(updatePayload.loserEloChange).toBe(-5);
	});

	function getEloForCubeType(
		games: number = EloConst.ELO_UPPER_GAME_COUNT_BOUND,
		elo: number = EloConst.ELO_STARTING_VALUE
	): UserEloForCubeType {
		return {
			userId: generateId(),
			games,
			elo,
		};
	}
});
