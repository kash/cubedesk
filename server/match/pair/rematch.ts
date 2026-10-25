import {MatchConst} from '@/client/shared/match/consts';
import {getMatchTypeByMatch} from '@/server/match/init';
import {getRematchRoomName} from '@/server/match/match';
import {pairPlayersInRoom} from '@/server/match/pair/start_match';
import {getClientsInRoom, getUserFromClient, SocketType} from '@/server/match/util';
import {acquireRedisLock, createRedisKey, RedisNamespace} from '@/server/services/redis';
import {FullMatch} from '@/types/match';

export async function rematchPlayers(match: FullMatch) {
	const playerIds = new Set(match.participants.map((participant) => participant.user_id));
	const clientsInRoom = await getClientsInRoom(getRematchRoomName(match));

	const clientsByUserId = new Map<string, SocketType>();
	for (const client of clientsInRoom) {
		const user = await getUserFromClient(client);
		if (user && playerIds.has(user.id) && !clientsByUserId.has(user.id)) {
			clientsByUserId.set(user.id, client);
		}
	}

	if (playerIds.size < 2 || clientsByUserId.size !== playerIds.size) {
		return false;
	}

	const rematchKey = createRedisKey(RedisNamespace.PLAY, `rematch_${match.id}`);
	if (!(await acquireRedisLock(rematchKey, MatchConst.REMATCH_TIMEOUT_SEC * 1000))) {
		return false;
	}

	const matchType = getMatchTypeByMatch(match);
	return pairPlayersInRoom(
		matchType.params().eventName,
		Array.from(clientsByUserId.values()),
		null,
		match.match_session,
	);
}
