import {MatchConst} from '@/client/shared/match/consts';
import {PlayerStatus} from '@/client/shared/match/types';
import {GameSolveRow, PlayerStatusInfo} from '@/components/play/game/Game';
import {Match} from '@/types/match';
import {Solve} from '@/types/solve';
import {getTimeString} from '@/util/time';

export function getEliminationPlayerStatus(
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match
): PlayerStatusInfo {
	let status: PlayerStatus = PlayerStatus.Playing;

	const {targetTime} = getTargetTime(timeIndex);

	if (match && match.ended_at && match.winner_id === myId) {
		status = PlayerStatus.Won;
	} else if (match && match.ended_at) {
		status = PlayerStatus.Lost;
	} else {
		for (let i = 0; i < solves.length; i += 1) {
			const info = getEliminationSolveRowInfo(myId, i, solves, match);
			if (info.solveStatus === PlayerStatus.Lost) {
				status = PlayerStatus.Lost;
				break;
			}
		}
	}

	return {
		status,
		points: solves.length,
		statusBody: getTimeString(targetTime),
		statusPrompt: 'Time to beat',
	};
}

export function getEliminationSolveRowInfo(
	myId: string,
	timeIndex: number,
	solves: Solve[],
	match?: Match
): GameSolveRow {
	let lastSolve: Solve | null = null;
	if (solves && solves.length) {
		lastSolve = solves[timeIndex];
	}

	const {percent, targetTime} = getTargetTime(timeIndex);

	const dnf = lastSolve?.dnf;
	const solveTime = lastSolve?.time;
	const solveFailed = solveTime !== undefined && (dnf || solveTime > targetTime);
	const solvePassed = solveTime !== undefined && !dnf && solveTime <= targetTime;

	let solveStatus = PlayerStatus.Playing;
	if (solveFailed) {
		solveStatus = PlayerStatus.Lost;
	} else if (solvePassed) {
		solveStatus = PlayerStatus.Won;
	}

	const info: GameSolveRow = {
		id: `${timeIndex}`,
		index: timeIndex,
		indexText: `${timeIndex + 1}.`,
		solveTime,
		targetTime,
		solveStatus,
		solve: lastSolve as any,
		solveDescription: `${percent.toFixed(1)}%`,
	};

	if (match && solves.length) {
		updateSolveInfoForMatch(info, solves, match);
	}

	return info;
}

function getTargetTime(timeIndex: number) {
	let percent = 100;
	let targetTime = MatchConst.ELIMINATION_START_TIME_SECONDS;
	for (let i = 0; i < timeIndex; i += 1) {
		percent *= 1 - MatchConst.ELIMINATION_CHANGE_RATE_PERCENT / 100;
		targetTime = targetTime * (1 - MatchConst.ELIMINATION_CHANGE_RATE_PERCENT / 100);
	}

	return {
		targetTime,
		percent,
	};
}

function updateSolveInfoForMatch(info: GameSolveRow, solves: Solve[], match: Match) {
	const myId = solves[0].user_id;
	let minSolveCount = Infinity;
	for (const part of match.participants ?? []) {
		if (part.id === myId) {
			continue;
		}

		minSolveCount = Math.min(info.index, Math.min(minSolveCount, part.solves?.length ?? 0));
	}

	if (solves.length <= minSolveCount) {
		info.solveStatus = PlayerStatus.Waiting;
	}
}
