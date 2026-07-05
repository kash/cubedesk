import {MatchSession, MatchSessionInput} from '@/types/match';
import {getPrisma} from '../database';

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
