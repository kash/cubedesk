import {reactState} from '@/@types/react';
import {IGameContext} from '@/components/play/game/Game';
import {Match} from '@/types/match';
import {MatchSession} from '@/types/match';
import {Solve} from '@/types/solve';

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
	setMatch: reactState<Match | null>,
	setMatchSession: reactState<MatchSession | null>,
	setMatchOver: reactState<boolean>,
	skipSettingSession?: boolean
) {
	const {setSolves, setTimeIndex} = gameContext;
	const matchState = getMatchState(match, userId);

	setMatch(match);
	setSolves(matchState.solves as any);
	setTimeIndex(matchState.timeIndex);

	if (!skipSettingSession && match.match_session) {
		setMatchSession(match.match_session);
	}

	if (match?.ended_at && !matchOver) {
		setMatchOver(true);
	}
}

function getMatchState(match: Match, userId: string): ExistingMatch {
	let solves: Solve[] = [];

	const opponentSolves: Record<string, Solve[]> = {};

	const players = match.participants || [];
	const firstUserId = players.length ? players[0].user_id : null;
	const pickedUserId = userId || firstUserId;

	for (const part of players) {
		if (part.user_id === pickedUserId) {
			solves = [...(part.solves || [])];
		} else {
			opponentSolves[part.user_id] = part.solves ?? [];
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
