import {FullMatch, Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {updateMatch} from '@/server/models/match';
import {updateMatchParticipant} from '@/server/models/match_participation';
import {emitMatchUpdate} from '@/server/match/update/send';
import {sendMatchUpdateById} from '@/server/match/update/standings';

export async function resignMatch(match: Match, user: PublicUserAccount, forfeit: boolean = false) {
	const data = {
		lost: true,
		won: false,
		abandoned: false,
		forfeited: false,
		resigned: false,
	};

	if (forfeit) {
		data.forfeited = true;
	} else {
		data.resigned = true;
	}

	await updateMatchParticipant(match, user, data, {
		lost: false,
		won: false,
	});

	if (forfeit) {
		emitMatchUpdate('opponentForfeitedMatch', match, user);
	} else {
		emitMatchUpdate('opponentResignedMatch', match, user);
	}

	await sendMatchUpdateById(match.id);
}

export async function abortMatch(match: FullMatch, user: PublicUserAccount) {
	const anySolves = match.participants.some((p) => p.solves && p.solves.length);

	if (anySolves) {
		throw new Error('Cannot abort match with solves');
	}

	const data = {
		forfeited: false,
		resigned: false,
		aborted: true,
	};

	await updateMatch(match, {
		ended_at: new Date(),
		aborted: true,
	});
	await updateMatchParticipant(match, user, data, {
		won: false,
		lost: false,
	});
	emitMatchUpdate('opponentAbortedMatch', match, user);

	await sendMatchUpdateById(match.id);
}
