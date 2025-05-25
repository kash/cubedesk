import {SocketClient} from '../init';
import {acquireRedisLock, createRedisKey, RedisNamespace} from '../../services/redis';
import {PlayerActivity} from '../update/player_activity';

const MATCH_ACTIVITY_PROCESSING_TTL_MS = 1000;

export function listenForHeartbeatEvent(client: SocketClient) {
	client.on('matchHeartbeat', async (matchId) => {
		const matchActivityLock = createRedisKey(RedisNamespace.MATCH_ACTIVITY, matchId);
		const lock = await acquireRedisLock(matchActivityLock, MATCH_ACTIVITY_PROCESSING_TTL_MS);
		if (!lock) {
			return null;
		}

		const playerActivity = new PlayerActivity(matchId);
		await playerActivity.processConditionsForMatchForfeit();
	});
}
