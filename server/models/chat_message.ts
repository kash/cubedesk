import {Match} from '@/types/match';
import {PublicUserAccount} from '@/types/user';
import {getPrisma} from '@/server/database';

interface CreateChatMessageInput {
	id: string;
	user: PublicUserAccount;
	match: Match;
	badWords: boolean;
	rawMessage: string;
	message: string;
}

export async function createChatMessage(input: CreateChatMessageInput) {
	const {id, user, message, match, badWords, rawMessage} = input;

	return getPrisma().chatMessage.create({
		data: {
			id,
			user_id: user.id,
			raw_message: rawMessage,
			bad_words: badWords,
			message,
			match_session_id: match.match_session_id,
		},
	});
}
