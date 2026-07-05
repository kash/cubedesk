import {SocketConst} from '@/client/shared/socket_costs';
import {sendRoomInfoUpdates} from '@/server/match/update/room_info';
import {joinRoom, leaveRoom} from '@/server/match/util';
import {Server} from 'socket.io';

export function genericIoListen(io: Server) {
	// Interval that notifies everyone what is happening

	io.sockets.on('connection', (client) => {
		client.on(SocketConst.REJOIN_ROOMS, async ({rooms}) => {
			for (const room of rooms) {
				joinRoom(client, room);
			}
		});

		client.on(SocketConst.WATCH_ROOM_SIZES, async () => {
			joinRoom(client, SocketConst.WATCHING_LOBBY_INFO);
		});

		client.on(SocketConst.STOP_WATCHING_ROOM_SIZES, async () => {
			leaveRoom(client, SocketConst.WATCHING_LOBBY_INFO);
		});
	});

	sendRoomInfoUpdates();
}
