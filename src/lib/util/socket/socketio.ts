import {io, Socket} from 'socket.io-client';
import {toastError} from '../toast';
import {SocketConst} from '../../shared/socket_costs';
import {ClientToServerEvents, ServerToClientEvents} from '../../../shared/match/socketio.types';

let socket: Socket<ServerToClientEvents, ClientToServerEvents> = io();
let initiated = false;
let rooms = [];

export function initSocketIO() {
	if (socket) {
		return;
	}

	socket = io(null, {
		forceNew: true,
	});

	socketClient().on('myRoomsUpdated', updateRooms);
	socketClient().on('connect', onReconnect);
	socketClient().on('disconnect', onDisconnect);
}

function onDisconnect() {
	if (isSocketConnected()) {
		return;
	}

	setTimeout(() => {
		// TODO FUTURE investigate this
		if (socket && !socket.connected) {
			toastError('Lost connection to server. Please check your connection to the Internet.');
		}
	}, SocketConst.CLIENT_RECONNECT_BEFORE_ALERT_TIMEOUT_MS);
}

function updateRooms(r) {
	rooms = r;
}

function onReconnect() {
	if (!initiated) {
		initiated = true;
		return;
	}

	socketClient().emit('rejoinMyRooms', rooms);
}

export function isSocketConnected() {
	return socket.connected;
}

export function socketClient() {
	return socket;
}
