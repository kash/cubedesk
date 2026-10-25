import {Prisma} from '@/generated/prisma/client';
import {getPrisma} from '@/server/database';
import {Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';

export async function createMatchParticipant(user: PublicUserAccount, match: Match) {
	return getPrisma().matchParticipant.upsert({
		where: {
			match_id_user_id: {
				match_id: match.id,
				user_id: user.id,
			},
		},
		create: {
			match_id: match.id,
			user_id: user.id,
		},
		update: {},
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

export async function getActiveMatchIdsForUser(userId: string) {
	const participants = await getPrisma().matchParticipant.findMany({
		where: {
			user_id: userId,
			match: {
				ended_at: null,
				started_at: {not: null},
			},
		},
		select: {
			match_id: true,
		},
		orderBy: {
			created_at: 'desc',
		},
		take: 5,
	});

	return participants.map((participant) => participant.match_id);
}
