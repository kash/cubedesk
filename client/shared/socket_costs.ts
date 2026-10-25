export enum SocketConst {
	// Default
	DISCONNECT = 'disconnect',
	CONNECT = 'connect',

	// Custom
	CLIENT_RECONNECT_BEFORE_ALERT_TIMEOUT_MS = 4000,
	UPDATE_ROOM_INFO = 'UpdateRooms',
	WATCH_ROOM_SIZES = 'WatchRoomSizes',
	STOP_WATCHING_ROOM_SIZES = 'StopWatchingRoomSizes',

	WATCHING_LOBBY_INFO = 'WatchingLobbyInfo',
}
