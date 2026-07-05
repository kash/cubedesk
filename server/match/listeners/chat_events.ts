import {v4 as uuid} from 'uuid';
import {MatchConst} from '@/client/shared/match/consts';
import {MatchInputChatMessage} from '@/client/shared/match/types';
import {createChatMessage} from '@/server/models/chat_message';
import {getMatchById} from '@/server/models/match';
import {SocketClient} from '@/server/match/init';
import {userExistsInMatch} from '@/server/match/match';
import {emitMatchUpdate} from '@/server/match/update/send';
import {getDetailedClientInfo} from '@/server/match/util';

export function listenForChatEvents(client: SocketClient) {
	client.on('playerSentChatMessage', async (data: MatchInputChatMessage) => {
		const {matchId, message, rawMessage, badWords} = data;

		if (typeof message !== 'string' || !message.trim() || message.length > MatchConst.MAX_CHAT_MESSAGE_LENGTH) {
			return;
		}

		const match = await getMatchById(matchId);
		if (!match) {
			return;
		}

		const {user} = await getDetailedClientInfo(client);

		if (!userExistsInMatch(match, user)) {
			return;
		}

		const msgId = uuid();

		await createChatMessage({
			id: msgId,
			user,
			message: message.trim(),
			rawMessage,
			badWords,
			match,
		});

		emitMatchUpdate('newMatchChatMessage', match, {
			user,
			message: message.trim(),
			id: msgId,
		});
	});
}
