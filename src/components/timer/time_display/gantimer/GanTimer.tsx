import {Bluetooth} from '@phosphor-icons/react/dist/ssr';
import {connectGanTimer, GanTimerConnection, GanTimerEvent, GanTimerState} from 'gan-web-bluetooth';
import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SubscriptionLike} from 'rxjs';
import {openModal} from '../../../../lib/actions/general';
import {useSettings} from '../../../../lib/util/hooks/useSettings';
import Emblem from '../../../common/emblem/Emblem';
import BluetoothErrorMessage from '../../common/BluetoothErrorMessage';
import {cancelInspection, endTimer, startInspection, startTimer} from '../../helpers/events';
import {setTimerParams} from '../../helpers/params';
import {ITimerContext, TimerContext} from '../../Timer';

// Since this component is singleton and should never have multiple instances,
// also will never be used in different contexts, we won't pollute context
// with connection status and event subscription. Just use module-scoped variables.
let conn: GanTimerConnection | null = null;
let subs: SubscriptionLike | null = null;

export default function GanTimer() {
	const dispatch = useDispatch();
	const inspectionEnabled = useSettings('inspection');
	const [connected, setConnected] = useState(false);

	const context = useContext(TimerContext);
	const contextRef = useRef<ITimerContext>(context);
	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	const handleTimerEvent = useCallback((event: GanTimerEvent) => {
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
				endTimer(contextRef.current, event.recordedTime.asTimestamp);
				break;
			case GanTimerState.IDLE:
				if (
					!inspectionEnabled ||
					contextRef.current.inInspection ||
					contextRef.current.finalTime > 0
				) {
					cancelInspection();
					setTimerParams({spaceTimerStarted: 0, canStart: false, finalTime: -1});
				} else {
					startInspection();
				}
				break;
			case GanTimerState.DISCONNECT:
				setConnected(false);
				break;
		}
	}, [inspectionEnabled]);

	// Subscribe/unsubscribe to GAN Smart Timer events when component being mounted/unmounted
	useEffect(() => {
		subs = conn?.events$.subscribe(handleTimerEvent);
		setConnected(!!conn);
		return () => subs?.unsubscribe();
	}, [handleTimerEvent]);

	const handleConnectButton = useCallback(async () => {
		if (conn) {
			conn.disconnect();
			conn = null;
			setConnected(false);
		} else {
			const bluetoothAvailable =
				!!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (bluetoothAvailable) {
				conn = await connectGanTimer();
				conn.events$.subscribe(
					(evt) => evt.state == GanTimerState.DISCONNECT && (conn = null),
				);
				subs = conn.events$.subscribe(handleTimerEvent);
				setConnected(true);
			} else {
				dispatch(openModal(<BluetoothErrorMessage />));
			}
		}
	}, [dispatch, handleTimerEvent])

	return (
		<div onClick={handleConnectButton} style={{userSelect: 'none', cursor: 'pointer'}}>
			<Emblem
				icon={<Bluetooth />}
				text={connected ? 'Connected' : 'Connect to Timer'}
				small
				red={!connected}
				green={connected}
			/>
		</div>
	);
}
