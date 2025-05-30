import {IGameContext} from '../../game/Game';
import {reactState} from '../../../../../client/@types/react';
import {Match} from '@/generated/zod';
import {Solve} from '@/generated/zod';
import {MatchSession} from '@/generated/zod';

interface ExistingMatch {
	match: Match;
	solves: Solve[];
	timeIndex: number;
	opponentSolves: Record<string, Solve[]>;
}

export function updateMatchState(
	match: Match,
	matchOver: boolean,
	userId: string,
	gameContext: IGameContext,
	setMatch: reactState<Match>,
	setMatchSession: reactState<MatchSession>,
	setMatchOver: reactState<boolean>,
	skipSettingSession?: boolean
) {
	const {setSolves, setTimeIndex} = gameContext;
	const matchState = getMatchState(match, userId);

	setMatch(match);
	setSolves(matchState.solves as any);
	setTimeIndex(matchState.timeIndex);

	if (!skipSettingSession) {
		setMatchSession(match.match_session);
	}

	if (match?.ended_at && !matchOver) {
		setMatchOver(true);
	}
}

function getMatchState(match: Match, userId: string): ExistingMatch {
	let solves = [];

	const opponentSolves: Record<string, Solve[]> = {};

	const players = match.participants || [];
	const firstUserId = players.length ? players[0].user_id : null;
	const pickedUserId = userId || firstUserId;

	for (const part of match.participants) {
		if (part.user_id === pickedUserId) {
			solves = [...(part.solves || [])];
		} else {
			opponentSolves[part.user_id] = part.solves;
		}
	}

	let timeIndex = solves.length;
	if (solves.length && match.ended_at) {
		timeIndex -= 1;
	}

	return {
		match,
		solves,
		opponentSolves,
		timeIndex,
	};
}
