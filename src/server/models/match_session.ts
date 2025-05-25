import {getPrisma} from '../database';
import {MatchSession, MatchSessionInput} from '../schemas/MatchSession.schema';

export async function getMatchSessionById(id: string): Promise<MatchSession> {
	return getPrisma().matchSession.findUnique({
		where: {
			id,
		},
		include: {
			chat_messages: {
				orderBy: {
					created_at: 'asc',
				},
				include: {
					user: {
						include: {
							profile: {
								include: {
									pfp_image: true,
								},
							},
						},
					},
				},
			},
			game_options: true,
			matches: {
				orderBy: {
					created_at: 'desc',
				},
				include: {
					participants: {
						orderBy: {
							created_at: 'asc',
						},
						include: {
							solves: {
								orderBy: {
									created_at: 'desc',
								},
							},
						},
					},
				},
			},
		},
	});
}

export async function createMatchSession(
	input: MatchSessionInput,
	createdBy,
	customMatch: boolean = false,
	rated: boolean = false
): Promise<MatchSession> {
	return getPrisma().matchSession.create({
		data: {
			created_by_id: createdBy?.id || null,
			match_type: input.match_type,
			min_players: input.min_players,
			max_players: input.max_players,
			custom_match: customMatch,
			rated,
		},
	});
}
