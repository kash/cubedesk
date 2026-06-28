import {PlayerStatus} from '../match/types';
import {GameSolveRow, PlayerStatusInfo} from '../../components/play/game/Game';
import {getTimeString} from '../../util/time';
import {MatchConst} from '../match/consts';
import {Solve} from '../../../server/schemas/Solve.schema';
import {MatchParticipant} from '../../../server/schemas/MatchParticipant.schema';
import {Match} from '../../../server/schemas/Match.schema';

interface RoundStatus {
	playerStatus: PlayerStatus;
	fastestSolve?: Solve;
	fastestPlayer?: MatchParticipant;
}

export function getHeadToHeadPlayerStatusInfo(
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match
): PlayerStatusInfo {
	let status = PlayerStatus.Playing;

	const info: PlayerStatusInfo = {
		status: PlayerStatus.Playing,
		statusPrompt: `First to ${MatchConst.HEAD_TO_HEAD_FIRST_TO_COUNT} wins`,
		statusBody: '0',
		points: 0,
	};

	// Getting player status
	const lastStatus = getHeadToHeadSolveRowInfo(myId, solves.length - 1, solves, match);

	if (!solves || !solves.length) {
		status = lastStatus.solveStatus;
	}

	if (!match || !solves || !solves.length) {
		return info;
	}

	let winCount = 0;
	for (let i = 0; i < solves.length; i += 1) {
		const status = getHeadToHeadSolveRowInfo(myId, i, solves, match).solveStatus;

		if (status === PlayerStatus.Won) {
			winCount += 1;
		}
	}

	if (winCount >= MatchConst.HEAD_TO_HEAD_FIRST_TO_COUNT) {
		status = PlayerStatus.Won;
	} else if (lastStatus.solveStatus === PlayerStatus.Waiting) {
		status = PlayerStatus.Waiting;
	}

	// Getting player points
	let points = 0;
	for (let i = 0; i < solves.length; i += 1) {
		const rowStatus = getStatusForSolveIndex(i, solves, match);

		if (rowStatus.playerStatus === PlayerStatus.Won) {
			points += 1;
		}
	}

	info.statusBody = points.toString();
	info.points = points;
	info.status = status;

	return info;
}

export function getHeadToHeadSolveRowInfo(
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match
): GameSolveRow {
	const mySolve = solves[timeIndex];

	const info: GameSolveRow = {
		id: `${timeIndex}`,
		index: timeIndex,
		indexText: `${timeIndex + 1}.`,
		solveStatus: PlayerStatus.Playing,
		solve: mySolve as any,
	};

	if (match && match.participants.length === 2) {
		const other = match.participants[0].user_id === myId ? match.participants[1] : match.participants[0];
		const otherSolve = other.solves[timeIndex];

		if (otherSolve) {
			info.targetTime = otherSolve.time;
		}
	}

	// Match is required for Head to Head
	if (!match || !solves || !solves.length) {
		info.indexText = '';
		info.solveDescription = `Round ${timeIndex + 1}`;
		return info;
	}

	// Get standings for all (my) solves
	const currentRoundStatus = getStatusForSolveIndex(timeIndex, solves, match);
	if (currentRoundStatus.fastestPlayer) {
		const fastestTime = getTimeString(currentRoundStatus.fastestSolve.time, 2);

		if (currentRoundStatus.playerStatus === PlayerStatus.Tie) {
			info.solveDescription = 'Tie';
		} else if (currentRoundStatus.fastestPlayer.user.id === mySolve.user_id) {
			info.solveDescription = 'You won!';
		} else {
			info.solveDescription = `${currentRoundStatus.fastestPlayer.user.username} won`;
			if (match.participants.length > 2) {
				info.solveDescription += ` (${fastestTime})`;
			}
		}
	} else if (
		currentRoundStatus.playerStatus === PlayerStatus.Waiting ||
		currentRoundStatus.playerStatus === PlayerStatus.Playing
	) {
		info.indexText = '';
		info.solveDescription = `Round ${timeIndex + 1}`;
	}

	info.solveStatus = currentRoundStatus.playerStatus;

	return info;
}

function getStatusForSolveIndex(timeIndex: number, solves: Solve[], match: Match): RoundStatus {
	let fastestPlayer: MatchParticipant = null;
	let playersDoneCount = 0;
	const players = match.participants;

	let dnfCount = 0;
	for (const player of players) {
		const playerSolves = player.solves;

		if (playerSolves.length <= timeIndex) {
			break;
		}

		playersDoneCount++;

		if (!fastestPlayer) {
			fastestPlayer = player;
		}

		const playerSolve = playerSolves[timeIndex];
		const fastestSolve = fastestPlayer.solves[timeIndex];
		if (!playerSolve.dnf && (fastestSolve.time > playerSolve.time || fastestSolve.dnf)) {
			fastestPlayer = player;
		}
		if (playerSolve.dnf) {
			dnfCount++;
		}
	}

	if (dnfCount === players.length) {
		return {
			playerStatus: PlayerStatus.Tie,
		};
	}

	if (!fastestPlayer || playersDoneCount !== match.participants.length) {
		if (solves[timeIndex]) {
			return {
				playerStatus: PlayerStatus.Waiting,
			};
		}

		return {
			playerStatus: PlayerStatus.Playing,
		};
	}

	const myUserId = solves[0].user_id;
	const fastestSolve = fastestPlayer.solves[timeIndex];
	let playerStatus: PlayerStatus;

	if (fastestPlayer.user_id === myUserId) {
		playerStatus = PlayerStatus.Won;
	} else {
		playerStatus = PlayerStatus.Lost;
	}

	return {
		playerStatus,
		fastestPlayer,
		fastestSolve,
	};
}
