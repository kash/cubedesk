import {SocketClient} from '@/server/match/init';
import {onProtectedSocketEvent, socketIdSchema} from '@/server/match/socket_event';
import {PlayerActivity} from '@/server/match/update/player_activity';
import {acquireRedisLock, createRedisKey, RedisNamespace} from '@/server/services/redis';
import {z} from 'zod';

const MATCH_ACTIVITY_PROCESSING_TTL_MS = 1000;

export function listenForHeartbeatEvent(client: SocketClient) {
	onProtectedSocketEvent(
		client,
		'matchHeartbeat',
		z.tuple([socketIdSchema]),
		async (_user, matchId) => {
			const matchActivityLock = createRedisKey(RedisNamespace.MATCH_ACTIVITY, matchId);
			const lock = await acquireRedisLock(
				matchActivityLock,
				MATCH_ACTIVITY_PROCESSING_TTL_MS,
			);
			if (!lock) {
				return;
			}

			const playerActivity = new PlayerActivity(matchId);
			await playerActivity.processConditionsForMatchForfeit();
		},
	);
}
