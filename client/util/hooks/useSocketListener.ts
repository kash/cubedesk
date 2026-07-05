import {useEffect, useRef} from 'react';
import {ServerToClientEvents} from '../../../shared/match/socketio.types';
import {socketClient} from '../socket/socketio';

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
