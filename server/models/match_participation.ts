import {Prisma} from '@/generated/prisma/client';
import {Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {getPrisma} from '@/server/database';

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
