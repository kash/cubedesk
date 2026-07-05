import {Match} from '@/types/match';
import {createAdapter} from '@socket.io/redis-adapter';
import {Server, Socket} from 'socket.io';
import {GameType} from '../../shared/match/consts';
import {ClientToServerEvents, ServerToClientEvents} from '../../shared/match/socketio.types';
import {getRedisPubClient, getRedisSubClient} from '../services/redis';
import {listenForChatEvents} from './listeners/chat_events';
import {listenForHeartbeatEvent} from './listeners/heartbeat';
import {listenForJoinEvents} from './listeners/join_events';
import {listenForLeaveEvents} from './listeners/leave_events';
import {listenForSolveEvents} from './listeners/solve_events';
import Elimination from './match_types/elimination';
import {genericIoListen} from './match_types/generic';
import HeadToHead from './match_types/head_to_head';
import MatchTypeLogic from './match_types/match_type_interface';

export type SocketClient = Socket<ClientToServerEvents, ServerToClientEvents>;
let io: Server<ClientToServerEvents, ServerToClientEvents>;

export const MatchTypes: Record<GameType, MatchTypeLogic> = {
	[GameType.HEAD_TO_HEAD]: new HeadToHead(),
	[GameType.ELIMINATION]: new Elimination(),
};

export function getMatchTypeByMatch(match: Match) {
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
