import {FullMatch} from '@/types/match';
import {getMatchTypeByMatch} from '@/server/match/init';
import {getRematchRoomName} from '@/server/match/match';
import {getClientsInRoom} from '@/server/match/util';
import {pairPlayersInRoom} from '@/server/match/pair/start_match';

export async function rematchPlayers(match: FullMatch) {
	const rematchRoom = getRematchRoomName(match);
	const clientsInRoom = await getClientsInRoom(rematchRoom);

	const matchType = getMatchTypeByMatch(match);
	return pairPlayersInRoom(matchType.params().eventName, clientsInRoom, null, match.match_session);
}
