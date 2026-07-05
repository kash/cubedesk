import {Match} from '@/types/match';
import {getMatchTypeByMatch} from '../init';
import {getRematchRoomName} from '../match';
import {getClientsInRoom} from '../util';
import {pairPlayersInRoom} from './start_match';

export async function rematchPlayers(match: Match) {
	const rematchRoom = getRematchRoomName(match);
	const clientsInRoom = await getClientsInRoom(rematchRoom);

	const matchType = getMatchTypeByMatch(match);
	return pairPlayersInRoom(matchType.params().eventName, clientsInRoom, null, match.match_session);
}
