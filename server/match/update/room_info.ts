import {getAllRooms} from '../util';
import {MatchConst} from '../../../client/shared/match/consts';
import {SocketConst} from '../../../client/shared/socket_costs';
import {getSocketIO} from '../init';
import {UpdateRoomInfo} from '../../../client/shared/match/types';

export function sendRoomInfoUpdates() {
	setInterval(() => {
		const rooms = Object.fromEntries(getAllRooms());

		let totalPlaying = 0;
		let totalSpectating = 0;
		let totalInLobby = 0;

		for (const room of Object.keys(rooms)) {
			if (room.startsWith(MatchConst.PLAYERS_ROOM_PREFIX)) {
				totalPlaying += 1;
			} else if (room.startsWith(MatchConst.SPECTATORS_ROOM_PREFIX)) {
				totalSpectating += 1;
			} else if (room.startsWith(MatchConst.LOBBY_ROOM_PREFIX)) {
				totalInLobby += 1;
			}
		}

		const updateInfo: UpdateRoomInfo = {
			totalPlaying,
			totalSpectating,
			totalInLobby,
		};

		getSocketIO().to(SocketConst.WATCHING_LOBBY_INFO).emit('lobbyInfoUpdated', updateInfo);
	}, MatchConst.SEND_ROOM_UPDATE_INTERVAL_MS);
}
