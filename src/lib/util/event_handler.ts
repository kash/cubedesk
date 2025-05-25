import {EventEmitter} from 'events';
import {useEffect, useRef} from 'react';
import {TrainerAlgorithmExtended} from '../db/trainer/init';
import {SettingValue} from '../db/settings/init';
import {Session} from '../../server/schemas/Session.schema';
import {Solve} from '../../server/schemas/Solve.schema';

const ee = new EventEmitter();

export interface ClientEvent {
	startTimerEvent: {
		timeStartedAt: Date;
	};
	solveSavedEvent: Solve;
	sessionsDbUpdatedEvent: Session;
	solveDbUpdatedEvent: Solve;
	settingsDbUpdatedEvent: SettingValue;
	trainerDbUpdatedEvent: TrainerAlgorithmExtended;
	trainerDbDeletedEvent: TrainerAlgorithmExtended;
	singlePbEvent: string; // Cube type
	avgPbEvent: string; // Cube type
	singleAndAvgPbEvent: string; // Cube type
}

export function addEventListener<T extends keyof ClientEvent>(
	name: T,
	func: (data: ClientEvent[T]) => void,
	removeOtherListeners?: boolean
) {
	if (removeOtherListeners && ee.listenerCount(name) > 0) {
		ee.removeAllListeners(name);
	}
	ee.on(name, func);
}

export function removeAllEventListeners(name: keyof ClientEvent) {
	ee.removeAllListeners(name);
}

export function removeEventListener(name: keyof ClientEvent, func: any) {
	ee.removeListener(name, func);
}

export function emitEvent<T extends keyof ClientEvent>(name: T, payload?: ClientEvent[T]) {
	ee.emit(name, payload);
}

export function useEventListener<T extends keyof ClientEvent>(
	eventName: T,
	handler: (data: ClientEvent[T]) => void,
	deps: any[] = []
) {
	const savedHandler = useRef<(data: ClientEvent[T]) => void>();

	useEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const eventListener = (event) => savedHandler.current(event);

		addEventListener(eventName, eventListener);

		return () => {
			removeEventListener(eventName, eventListener);
		};
	}, [eventName, ...deps]);
}
