import {Match} from '../../schemas/Match.schema';
import {getMatchPlayersRoomName, userExistsInMatch} from '../match';
import {getClientsInRoom, getDetailedClientInfo, isClientInRoom, joinRoom} from '../util';
import MatchTypeLogic from '../match_types/match_type_interface';
import {Socket} from 'socket.io';
import {sendMatchUpdate} from '../update/standings';
import {pairPlayersInRoom} from './start_match';
import {getMatchTypeByMatch} from '../init';

export async function matchPlayersInCustomMatch(client: Socket, match: Match) {
	const matchRoomName = getMatchPlayersRoomName(match);

	// Making sure that user is not already in match room
	if (isClientInRoom(client, matchRoomName)) {
		return;
	}

	// User probably joined through the lobby
	const clientToAddToMatch = await getDetailedClientInfo(client);
	if (userExistsInMatch(match, clientToAddToMatch.user)) {
		joinRoom(client, matchRoomName);
		await sendMatchUpdate(match);
		return;
	}

	joinRoom(client, matchRoomName);

	const clients = await getClientsInRoom(matchRoomName);
	const matchType = getMatchTypeByMatch(match);

	return pairPlayersInRoom(matchType.params().eventName, clients, null, match.match_session, match);
}
