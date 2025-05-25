import {getPrisma} from '../database';
import {PublicUserAccount} from '../schemas/UserAccount.schema';
import {Match} from '../schemas/Match.schema';

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
