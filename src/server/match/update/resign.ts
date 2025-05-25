import {Match} from '../../schemas/Match.schema';
import {PublicUserAccount} from '../../schemas/UserAccount.schema';
import {updateMatchParticipant} from '../../models/match_participation';
import {emitMatchUpdate} from './send';
import {sendMatchUpdateById} from './standings';
import {updateMatch} from '../../models/match';

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

export async function abortMatch(match: Match, user: PublicUserAccount) {
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
