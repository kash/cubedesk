import {Match} from '../../schemas/Match.schema';
import {getRematchRoomName} from '../match';
import {pairPlayersInRoom} from './start_match';
import MatchTypeLogic from '../match_types/match_type_interface';
import {getClientsInRoom} from '../util';
import {getMatchTypeByMatch} from '../init';

export async function rematchPlayers(match: Match) {
	const rematchRoom = getRematchRoomName(match);
	const clientsInRoom = await getClientsInRoom(rematchRoom);

	const matchType = getMatchTypeByMatch(match);
	return pairPlayersInRoom(matchType.params().eventName, clientsInRoom, null, match.match_session);
}
