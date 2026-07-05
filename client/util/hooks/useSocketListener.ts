import {ServerToClientEvents} from '@/shared/match/socketio.types';
import {socketClient} from '@/util/socket/socketio';
import {useEffect, useRef} from 'react';

export function useSocketListener<T extends keyof ServerToClientEvents>(
	event: T,
	handler: ServerToClientEvents[T],
	deps: any[] = []
) {
	const savedHandler = useRef<ServerToClientEvents[T] | undefined>(undefined);

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
