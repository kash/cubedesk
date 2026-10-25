import {userExistsInMatch} from '@/server/match/match';
import {getMatchById} from '@/server/models/match';
import {FullMatch, Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';

export enum MatchPhase {
	Waiting = 'waiting',
	Active = 'active',
	Ended = 'ended',
}

export function getMatchPhase(match: Pick<Match, 'started_at' | 'ended_at'>): MatchPhase {
	if (match.ended_at) {
		return MatchPhase.Ended;
	}

	if (match.started_at) {
		return MatchPhase.Active;
	}

	return MatchPhase.Waiting;
}

export async function getParticipantMatch(
	user: PublicUserAccount,
	matchId: unknown,
	phases: MatchPhase[] = [],
): Promise<FullMatch | null> {
	if (typeof matchId !== 'string' || !matchId) {
		return null;
	}

	const match = await getMatchById(matchId);
	if (!match || !userExistsInMatch(match, user)) {
		return null;
	}

	if (phases.length && !phases.includes(getMatchPhase(match))) {
		return null;
	}

	return match;
}
