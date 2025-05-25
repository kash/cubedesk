import {getPrisma} from '../database';
import {Prisma} from '@prisma/client';
import {PublicUserAccount} from '../schemas/UserAccount.schema';
import {Match} from '../schemas/Match.schema';

export async function createMatchParticipant(user: PublicUserAccount, match: Match) {
	const inMatch = await getPrisma().matchParticipant.findFirst({
		where: {
			user_id: user.id,
			match_id: match.id,
		},
	});

	if (inMatch) {
		return inMatch;
	}

	return getPrisma().matchParticipant.create({
		data: {
			match_id: match.id,
			user_id: user.id,
		},
	});
}

export function updateMatchParticipant(match: Match, user: PublicUserAccount, data, where?: Prisma.MatchParticipantWhereInput) {
	return getPrisma().matchParticipant.updateMany({
		where: {
			user_id: user.id,
			match_id: match.id,
			...where
		},
		data,
	});
}
