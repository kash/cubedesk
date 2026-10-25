import {getParticipantMatch, MatchPhase} from '@/server/match/authorization';
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
		async (user, matchId) => {
			const match = await getParticipantMatch(user, matchId, [MatchPhase.Active]);
			if (!match) {
				return;
			}

			const matchActivityLock = createRedisKey(RedisNamespace.MATCH_ACTIVITY, match.id);
			const lock = await acquireRedisLock(
				matchActivityLock,
				MATCH_ACTIVITY_PROCESSING_TTL_MS,
			);
			if (!lock) {
				return;
			}

			const playerActivity = new PlayerActivity(match.id);
			await playerActivity.processConditionsForMatchForfeit();
		},
	);
}
