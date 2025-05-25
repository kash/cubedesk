import {Match} from '../../schemas/Match.schema';
import {getMatchPlayersRoomName, getMatchSpectatorsRoomName} from '../match';
import {ServerToClientEvents} from '../../../shared/match/socketio.types';
import {getSocketIO} from '../init';

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
