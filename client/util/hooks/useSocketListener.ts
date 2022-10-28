import {useEffect, useRef} from 'react';
import {socketClient} from '../socket/socketio';
import {ServerToClientEvents} from '../../../shared/match/socketio.types';

export function useSocketListener<T extends keyof ServerToClientEvents>(
	event: T,
	handler: ServerToClientEvents[T],
	deps: any[] = []
) {
	const savedHandler = useRef<ServerToClientEvents[T]>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		socketClient().on(event, handler as any);

		return () => {
			socketClient().off(event, handler as any);
		};
	}, [event, ...deps]);
}
