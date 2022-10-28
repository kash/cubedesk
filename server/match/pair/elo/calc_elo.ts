import EloRank from 'elo-rank';
import {UserEloForCubeType} from '../../../models/elo_rating';

export enum EloConst {
	// ELO
	ELO_STARTING_VALUE = 1000,
	ELO_MAX_STARTING_K_FACTOR = 180,
	ELO_LOWER_GAME_COUNT_BOUND = 20,
	ELO_UPPER_GAME_COUNT_BOUND = 40,
	ELO_MIN_K_FACTOR = 10,
	ELO_MAX_K_FACTOR = 85,
	ELO_MAX_SPREAD_FOR_K_FACTOR = 1000,
}

interface EloWinLoseChange {
	win: number;
	lose: number;
}

export interface EloUpdatePayload {
	winner: UserEloForCubeType;
	loser: UserEloForCubeType;
	cubeType: string;
	winnerEloChange: number;
	loserEloChange: number;
	winnerNewElo: number;
	loserNewElo: number;
}

export function calculateNewElo(
	cubeType: string,
	winner: UserEloForCubeType,
	loser: UserEloForCubeType
): EloUpdatePayload {
	const winnerEloInfo = getEloGainLoss(winner.elo, winner.games, loser.elo);
	const loserEloInfo = getEloGainLoss(loser.elo, loser.games, winner.elo);

	const winnerNewElo = winner.elo + winnerEloInfo.win;
	const loserNewElo = Math.max(0, loser.elo - loserEloInfo.lose);
	const loserEloChange = loserNewElo - loser.elo;

	return {
		winner,
		loser,
		cubeType,
		winnerNewElo,
		loserNewElo,
		winnerEloChange: winnerEloInfo.win,
		loserEloChange: loserEloChange,
	};
}

function getEloGainLoss(playerElo: number, playerMatchCount: number, opponentElo: number): EloWinLoseChange {
	const {min: minKFactor, max: maxKFactor} = getMinMaxKFactor(playerMatchCount);

	const ratingDiff = Math.abs(playerElo - opponentElo);
	const minMaxRange = Math.abs(maxKFactor - minKFactor);

	const ratingRatio = 1 - (EloConst.ELO_MAX_SPREAD_FOR_K_FACTOR - ratingDiff) / EloConst.ELO_MAX_SPREAD_FOR_K_FACTOR;
	let kFactor = minKFactor + ratingRatio * minMaxRange;

	kFactor = Math.min(kFactor, maxKFactor);
	kFactor = Math.max(kFactor, minKFactor);
	kFactor = roundToNearestEvenNumber(kFactor);

	const elo = new EloRank(kFactor);
	const expectedScoreA = elo.getExpected(playerElo, opponentElo);
	const potentialGain = Math.abs(playerElo - elo.updateRating(expectedScoreA, 1, playerElo));
	const potentialLoss = Math.abs(playerElo - elo.updateRating(expectedScoreA, 0, playerElo));

	return {
		win: potentialGain,
		lose: potentialLoss,
	};
}

function getMinMaxKFactor(playerMatchCount: number) {
	const gamesUpperBound = EloConst.ELO_UPPER_GAME_COUNT_BOUND;
	const gamesLowerBound = EloConst.ELO_LOWER_GAME_COUNT_BOUND;

	let minKFactor;
	let maxKFactor;
	if (playerMatchCount <= gamesLowerBound) {
		maxKFactor = EloConst.ELO_MAX_STARTING_K_FACTOR;
		minKFactor = maxKFactor / 2;
	} else if (playerMatchCount > gamesUpperBound) {
		maxKFactor = EloConst.ELO_MAX_K_FACTOR;
		minKFactor = EloConst.ELO_MIN_K_FACTOR;
	} else {
		const gameRatio = 100 - ((playerMatchCount - gamesLowerBound) * 100) / (gamesUpperBound - gamesLowerBound);
		maxKFactor =
			(gameRatio * (EloConst.ELO_MAX_K_FACTOR - EloConst.ELO_MIN_K_FACTOR)) / 100 +
			EloConst.ELO_MIN_K_FACTOR;
		minKFactor = Math.max(EloConst.ELO_MIN_K_FACTOR, maxKFactor / 2);
	}

	return {
		min: roundToNearestEvenNumber(minKFactor),
		max: roundToNearestEvenNumber(maxKFactor),
	};
}

function roundToNearestEvenNumber(num: number) {
	return Math.round(num / 2) * 2;
}
