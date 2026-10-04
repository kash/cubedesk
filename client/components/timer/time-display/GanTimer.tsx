import Emblem from '@/components/common/Emblem';
import BluetoothErrorMessage from '@/components/timer/common/BluetoothErrorMessage';
import {
	cancelInspection,
	endTimer,
	startInspection,
	startTimer,
} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import {ITimerContext, useTimerContext} from '@/components/timer/Timer';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {connectGanTimer, GanTimerConnection, GanTimerEvent, GanTimerState} from '@/util/gan/timer';
import {useSettings} from '@/util/hooks/useSettings';
import {Bluetooth} from 'phosphor-react';
import React, {useEffect, useRef, useState} from 'react';

// Since this component is singleton and should never have multiple instances,
// also will never be used in different contexts, we won't pollute context
// with connection status and event subscription. Just use module-scoped variables.
let conn: GanTimerConnection | null = null;
let unsubscribe: (() => void) | null = null;

export default function GanTimer() {
	const [bluetoothErrorMessageDialog, setBluetoothErrorMessageDialog] = React.useState<{
		props: Record<string, never>;
	} | null>(null);

	const inspectionEnabled = useSettings('inspection');
	const [connected, setConnected] = useState(false);

	const context = useTimerContext();
	const contextRef = useRef<ITimerContext>(context);
	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	// Subscribe/unsubscribe to GAN Smart Timer events when component being mounted/unmounted
	useEffect(() => {
		unsubscribe = conn?.events.subscribe(handleTimerEvent) ?? null;
		setConnected(!!conn);
		return () => unsubscribe?.();
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
				if (event.recordedTime) {
					endTimer(contextRef.current, event.recordedTime);
				}
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
			const bluetoothAvailable =
				!!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (bluetoothAvailable) {
				conn = await connectGanTimer();
				conn.events.subscribe((evt) => {
					if (evt.state === GanTimerState.DISCONNECT) conn = null;
				});
				unsubscribe = conn.events.subscribe(handleTimerEvent);
				setConnected(true);
			} else {
				setBluetoothErrorMessageDialog({props: {}});
			}
		}
	}

	return (
		<>
			<div onClick={handleConnectButton} style={{userSelect: 'none', cursor: 'pointer'}}>
				<Emblem
					icon={<Bluetooth />}
					text={connected ? 'Connected' : 'Connect to Timer'}
					small
					red={!connected}
					green={connected}
				/>
			</div>
			<Dialog
				open={bluetoothErrorMessageDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setBluetoothErrorMessageDialog(null);
					}
				}}
			>
				{bluetoothErrorMessageDialog && (
					<DialogContent>
						<BluetoothErrorMessage {...bluetoothErrorMessageDialog.props} />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
