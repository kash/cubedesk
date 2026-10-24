import {SocketConst} from '@/client/shared/socket_costs';
import {onProtectedSocketEvent, onSocketEvent} from '@/server/match/socket_event';
import {sendRoomInfoUpdates} from '@/server/match/update/room_info';
import {joinRoom, leaveRoom} from '@/server/match/util';
import {ClientToServerEvents, ServerToClientEvents} from '@/shared/match/socketio.types';
import {Server} from 'socket.io';
import {z} from 'zod';

export function genericIoListen(io: Server<ClientToServerEvents, ServerToClientEvents>) {
	// Interval that notifies everyone what is happening

	io.sockets.on('connection', (client) => {
		onProtectedSocketEvent(
			client,
			SocketConst.REJOIN_ROOMS,
			z.tuple([z.object({rooms: z.array(z.string())})]),
			(_user, {rooms}) => {
				for (const room of rooms) {
					joinRoom(client, room);
				}
			},
		);

		onSocketEvent(client, SocketConst.WATCH_ROOM_SIZES, z.tuple([]), () => {
			joinRoom(client, SocketConst.WATCHING_LOBBY_INFO);
		});

		onSocketEvent(client, SocketConst.STOP_WATCHING_ROOM_SIZES, z.tuple([]), () => {
			leaveRoom(client, SocketConst.WATCHING_LOBBY_INFO);
		});
	});

	sendRoomInfoUpdates();
}
