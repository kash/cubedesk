import {getMatchTypeByMatch} from '@/server/match/init';
import {getRematchRoomName} from '@/server/match/match';
import {pairPlayersInRoom} from '@/server/match/pair/start_match';
import {getClientsInRoom} from '@/server/match/util';
import {FullMatch} from '@/types/match';

export async function rematchPlayers(match: FullMatch) {
	const rematchRoom = getRematchRoomName(match);
	const clientsInRoom = await getClientsInRoom(rematchRoom);

	const matchType = getMatchTypeByMatch(match);
	return pairPlayersInRoom(matchType.params().eventName, clientsInRoom, null, match.match_session);
}
