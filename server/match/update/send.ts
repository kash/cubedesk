import {getSocketIO} from '@/server/match/init';
import {getMatchPlayersRoomName, getMatchSpectatorsRoomName} from '@/server/match/match';
import {ServerToClientEvents} from '@/shared/match/socketio.types';
import {Match} from '@/types/match';

export function emitMatchUpdate<T extends keyof ServerToClientEvents>(
	socketEvent: T,
	match: Match,
	...data: Parameters<ServerToClientEvents[T]>
) {
	const playersRoom = getMatchPlayersRoomName(match);
	const spectatorsRoom = getMatchSpectatorsRoomName(match);

	// Need to do this because of some data that can't be parsed naturally by socket.io
	const parsedData = data.map((d) => JSON.parse(JSON.stringify(d)));

	getSocketIO()
		.to(playersRoom)
		.emit(socketEvent, ...parsedData as any);
	getSocketIO()
		.to(spectatorsRoom)
		.emit(socketEvent, ...parsedData as any);
}
