import {openModal} from '@/actions/general';
import Emblem from '@/components/common/Emblem';
import BluetoothErrorMessage from '@/components/timer/common/BluetoothErrorMessage';
import GanTimerErrorMessage from '@/components/timer/common/GanTimerErrorMessage';
import {
	cancelInspection,
	endTimer,
	startInspection,
	startTimer,
} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import {
	connectGanTimer,
	GanTimerConnection,
	GanTimerConnectionError,
} from '@/components/timer/time-display/gan-timer/connect';
import {GanTimerEvent, GanTimerState} from '@/components/timer/time-display/gan-timer/protocol';
import {ITimerContext, useTimerContext} from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {Bluetooth} from 'phosphor-react';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SubscriptionLike} from 'rxjs';

// Since this component is singleton and should never have multiple instances,
// also will never be used in different contexts, we won't pollute context
// with connection status and event subscription. Just use module-scoped variables.
let conn: GanTimerConnection | null = null;
let subs: SubscriptionLike | null = null;

export default function GanTimer() {
	const dispatch = useDispatch();
	const inspectionEnabled = useSettings('inspection');
	const [connected, setConnected] = useState(!!conn);
	const [connecting, setConnecting] = useState(false);

	const context = useTimerContext();
	const contextRef = useRef<ITimerContext>(context);
	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	function handleTimerEvent(event: GanTimerEvent) {
		switch (event.state) {
			case GanTimerState.HANDS_ON:
				setTimerParams({canStart: false, spaceTimerStarted: 1});
				break;
			case GanTimerState.HANDS_OFF:
				setTimerParams({canStart: false, spaceTimerStarted: 0});
				break;
			case GanTimerState.GET_SET:
				setTimerParams({canStart: true, spaceTimerStarted: 0});
				break;
			case GanTimerState.RUNNING:
				setTimerParams({canStart: false, spaceTimerStarted: 0});
				startTimer();
				break;
			case GanTimerState.STOPPED:
				if (event.recordedTime) {
					endTimer(contextRef.current, event.recordedTime.asTimestamp);
				}
				break;
			case GanTimerState.FINISHED:
				// Emitted immediately after STOPPED, which already recorded the solve.
				break;
			case GanTimerState.IDLE:
				if (
					!inspectionEnabled ||
					contextRef.current.inInspection ||
					(contextRef.current.finalTime ?? 0) > 0
				) {
					cancelInspection();
					setTimerParams({spaceTimerStarted: 0, canStart: false, finalTime: -1});
				} else {
					startInspection();
				}
				break;
			case GanTimerState.DISCONNECT:
				conn = null;
				setConnected(false);
				break;
		}
	}

	// The subscription outlives individual renders, so route events through a ref.
	// Reading the handler off the ref keeps settings like inspection up to date
	// instead of freezing whatever they were when the timer was connected.
	const handlerRef = useRef(handleTimerEvent);
	handlerRef.current = handleTimerEvent;

	const subscribe = useCallback((connection: GanTimerConnection): SubscriptionLike => {
		return connection.events$.subscribe({
			next: (event: GanTimerEvent) => handlerRef.current(event),
			// The driver drops bad packets rather than erroring, but never let an
			// unexpected stream error escape as an unhandled rejection.
			error: (err: unknown) => {
				console.error('[GanTimer] event stream error', err);
				conn = null;
				setConnected(false);
			},
		});
	}, []);

	// Re-attach to an existing connection when this component is remounted
	useEffect(() => {
		subs?.unsubscribe();
		subs = conn ? subscribe(conn) : null;
		setConnected(!!conn);
		return () => subs?.unsubscribe();
	}, [subscribe]);

	async function handleConnectButton() {
		if (connecting) {
			return;
		}

		if (conn) {
			const closing = conn;
			conn = null;
			subs?.unsubscribe();
			subs = null;
			setConnected(false);
			await closing.disconnect().catch(() => undefined);
			return;
		}

		setConnecting(true);
		try {
			const bluetoothAvailable =
				!!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (!bluetoothAvailable) {
				dispatch(openModal(<BluetoothErrorMessage />));
				return;
			}

			const connection = await connectGanTimer();
			conn = connection;
			subs?.unsubscribe();
			subs = subscribe(connection);
			setConnected(true);
		} catch (err) {
			conn = null;
			setConnected(false);

			// The user just closed the browser's device chooser; nothing to report.
			if (err instanceof GanTimerConnectionError && err.cancelled) {
				return;
			}

			console.error('[GanTimer] connection failed', err);
			const message =
				err instanceof Error ? err.message : 'An unknown error occurred while connecting.';
			dispatch(openModal(<GanTimerErrorMessage message={message} />));
		} finally {
			setConnecting(false);
		}
	}

	let text = 'Connect to Timer';
	if (connecting) {
		text = 'Connecting...';
	} else if (connected) {
		text = 'Connected';
	}

	return (
		<div onClick={handleConnectButton} style={{userSelect: 'none', cursor: 'pointer'}}>
			<Emblem
				icon={<Bluetooth />}
				text={text}
				small
				red={!connected && !connecting}
				green={connected}
			/>
		</div>
	);
}
