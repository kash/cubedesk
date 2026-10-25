import {SocketConst} from '@/client/shared/socket_costs';
import {getParticipantMatch, MatchPhase} from '@/server/match/authorization';
import {getMatchPlayersRoomName} from '@/server/match/match';
import {onProtectedSocketEvent, onSocketEvent} from '@/server/match/socket_event';
import {sendRoomInfoUpdates} from '@/server/match/update/room_info';
import {sendMatchUpdate} from '@/server/match/update/standings';
import {joinRoom, leaveRoom, SocketType} from '@/server/match/util';
import {getActiveMatchIdsForUser} from '@/server/models/match_participation';
import {ClientToServerEvents, ServerToClientEvents} from '@/shared/match/socketio.types';
import {PublicUserAccount} from '@/types/user';
import {Server} from 'socket.io';
import {z} from 'zod';

export function genericIoListen(io: Server<ClientToServerEvents, ServerToClientEvents>) {
	// Interval that notifies everyone what is happening

	io.sockets.on('connection', (client) => {
		onProtectedSocketEvent(client, 'rejoinMyRooms', z.tuple([]), (user) =>
			rejoinActiveMatchRooms(client, user),
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

async function rejoinActiveMatchRooms(client: SocketType, user: PublicUserAccount) {
	for (const matchId of await getActiveMatchIdsForUser(user.id)) {
		const match = await getParticipantMatch(user, matchId, [MatchPhase.Active]);
		if (!match) {
			continue;
		}

		joinRoom(client, getMatchPlayersRoomName(match));
		await sendMatchUpdate(match);
	}
}
