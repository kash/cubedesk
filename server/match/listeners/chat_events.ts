import {getDetailedClientInfo} from '../util';
import {emitMatchUpdate} from '../update/send';
import {MatchInputChatMessage} from '../../../client/shared/match/types';
import {v4 as uuid} from 'uuid';
import {createChatMessage} from '../../models/chat_message';
import {getMatchById} from '../../models/match';
import {userExistsInMatch} from '../match';
import {MatchConst} from '../../../client/shared/match/consts';
import {SocketClient} from '../init';

export function listenForChatEvents(client: SocketClient) {
	client.on('playerSentChatMessage', async (data: MatchInputChatMessage) => {
		const {matchId, message, rawMessage, badWords} = data;

		if (typeof message !== 'string' || !message.trim() || message.length > MatchConst.MAX_CHAT_MESSAGE_LENGTH) {
			return;
		}

		const match = await getMatchById(matchId);
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
