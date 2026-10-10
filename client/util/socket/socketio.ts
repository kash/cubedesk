import {SocketConst} from '@/client/shared/socket_costs';
import {ClientToServerEvents, ServerToClientEvents} from '@/shared/match/socketio.types';
import {toastError} from '@/util/toast';
import {io, Socket} from 'socket.io-client';

// Connected on first use instead of on page load, so visitors who never use live features don't connect
let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;
let initiated = false;
let rooms = [];

export function initSocketIO() {
	if (socket) {
		return;
	}

	socket = io({
		forceNew: true,
	});

	socket.on('myRoomsUpdated', updateRooms);
	socket.on('connect', onReconnect);
	socket.on('disconnect', onDisconnect);
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
	return Boolean(socket?.connected);
}

export function socketClient() {
	initSocketIO();
	return socket!;
}
