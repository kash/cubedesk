import React, {useContext, useEffect, useRef, useState} from 'react';
import {ITimerContext, TimerContext} from '../../Timer';
import {Bluetooth} from 'phosphor-react';
import Emblem from '../../../common/emblem/Emblem';
import {startTimer, endTimer, startInspection, cancelInspection} from '../../helpers/events';
import {setTimerParams} from '../../helpers/params';
import {useSettings} from '../../../../util/hooks/useSettings';
import {useDispatch} from 'react-redux';
import {openModal} from '../../../../actions/general';
import BluetoothErrorMessage from '../../common/BluetoothErrorMessage';

import {SubscriptionLike} from 'rxjs';
import {GanTimerConnection, GanTimerEvent, GanTimerState, connectGanTimer} from 'gan-web-bluetooth';

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

	// Subscribe/unsubscribe to GAN Smart Timer events when component being mounted/unmounted
	useEffect(() => {
		subs = conn?.events$.subscribe(handleTimerEvent);
		setConnected(!!conn);
		return () => subs?.unsubscribe();
	}, []);

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
				endTimer(contextRef.current, event.recordedTime.asTimestamp);
				break;
			case GanTimerState.IDLE:
				if (!inspectionEnabled || contextRef.current.inInspection || contextRef.current.finalTime > 0) {
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
	}

	async function handleConnectButton() {
		if (conn) {
			conn.disconnect();
			conn = null;
			setConnected(false);
		} else {
			let bluetoothAvailable = !!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (bluetoothAvailable) {
				conn = await connectGanTimer();
				conn.events$.subscribe((evt) => evt.state == GanTimerState.DISCONNECT && (conn = null));
				subs = conn.events$.subscribe(handleTimerEvent);
				setConnected(true);
			} else {
				dispatch(openModal(<BluetoothErrorMessage />));
			}
		}
	}

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
