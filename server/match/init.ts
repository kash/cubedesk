import {listenForChatEvents} from '@/server/match/listeners/chat_events';
import {listenForHeartbeatEvent} from '@/server/match/listeners/heartbeat';
import {listenForJoinEvents} from '@/server/match/listeners/join_events';
import {listenForLeaveEvents} from '@/server/match/listeners/leave_events';
import {listenForSolveEvents} from '@/server/match/listeners/solve_events';
import Elimination from '@/server/match/match_types/elimination';
import {genericIoListen} from '@/server/match/match_types/generic';
import HeadToHead from '@/server/match/match_types/head_to_head';
import MatchTypeLogic from '@/server/match/match_types/match_type_interface';
import {getRedisPubClient, getRedisSubClient} from '@/server/services/redis';
import {GameType} from '@/shared/match/consts';
import {ClientToServerEvents, ServerToClientEvents} from '@/shared/match/socketio.types';
import {FullMatch} from '@/types/match';
import {createAdapter} from '@socket.io/redis-adapter';
import {Server, Socket} from 'socket.io';

export type SocketClient = Socket<ClientToServerEvents, ServerToClientEvents>;
let io: Server<ClientToServerEvents, ServerToClientEvents>;

const MatchTypes: Record<GameType, MatchTypeLogic> = {
	[GameType.HEAD_TO_HEAD]: new HeadToHead(),
	[GameType.ELIMINATION]: new Elimination(),
};

export function getMatchTypeByMatch(match: FullMatch) {
	const mt = match.match_session.match_type;
	return MatchTypes[mt];
}

export function initSocket(server) {
	io = new Server(server, {
		cors: {
			origin: '*',
		},
	});

	const socketAdaptor = createAdapter(getRedisPubClient(), getRedisSubClient());
	io.adapter(socketAdaptor as any);

	// Generic
	genericIoListen(io);

	io.sockets.on('connection', (client) => {
		listenForHeartbeatEvent(client);
		listenForSolveEvents(client);
		listenForJoinEvents(client);
		listenForLeaveEvents(client);
		listenForChatEvents(client);
	});
}

export function getSocketIO() {
	return io;
}
