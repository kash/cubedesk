import {MatchConst} from '@/client/shared/match/consts';
import {SocketClient} from '@/server/match/init';
import {userExistsInMatch} from '@/server/match/match';
import {onProtectedSocketEvent, socketIdSchema} from '@/server/match/socket_event';
import {emitMatchUpdate} from '@/server/match/update/send';
import {createChatMessage} from '@/server/models/chat_message';
import {getMatchById} from '@/server/models/match';
import {v4 as uuid} from 'uuid';
import {z} from 'zod';

const chatMessageSchema = z.object({
	matchId: socketIdSchema,
	matchSessionId: z.string(),
	message: z.string().trim().min(1).max(MatchConst.MAX_CHAT_MESSAGE_LENGTH),
	rawMessage: z.string(),
	badWords: z.boolean(),
});

export function listenForChatEvents(client: SocketClient) {
	onProtectedSocketEvent(
		client,
		'playerSentChatMessage',
		z.tuple([chatMessageSchema]),
		async (user, data) => {
			const {matchId, message, rawMessage, badWords} = data;

			const match = await getMatchById(matchId);
			if (!match) {
				return;
			}

			if (!userExistsInMatch(match, user)) {
				return;
			}

			const msgId = uuid();

			await createChatMessage({
				id: msgId,
				user,
				message,
				rawMessage,
				badWords,
				match,
			});

			emitMatchUpdate('newMatchChatMessage', match, {
				user,
				message,
				id: msgId,
			});
		},
	);
}
