import ActionMenu from '@/components/common/inputs/ActionMenu';
import BluetoothErrorMessage from '@/components/timer/common/BluetoothErrorMessage';
import SmartDevicePanel from '@/components/timer/common/SmartDevicePanel';
import {
	cancelInspection,
	endTimer,
	startInspection,
	startTimer,
} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import BluetoothStatus from '@/components/timer/smart-cube/bluetooth-status/BluetoothStatus';
import {smartTimer} from '@/components/timer/smart-timer/connect';
import SmartTimerVisual, {SmartTimerPhase} from '@/components/timer/smart-timer/SmartTimerVisual';
import {ITimerContext, useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {getSetting} from '@/db/settings/query';
import {SMART_TIMER_DRIVERS} from '@/util/smart-timer/drivers';
import {SmartTimerEvent} from '@/util/smart-timer/protocol';
import {getTimerStore} from '@/util/store/getTimer';
import {DotsThree} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';

/** Drop the solve in progress without saving it, keeping the scramble since the cube is still scrambled */
function cancelSolve() {
	cancelInspection();
	setTimerParams({
		solving: false,
		timeStartedAt: null,
		finalTime: -1,
		spaceTimerStarted: 0,
		canStart: false,
	});
}

export default function SmartTimer() {
	const context = useTimerContext();
	// Timer events arrive outside of React, so they read the latest context and store instead of a render's copy
	const contextRef = useRef<ITimerContext>(context);
	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	const [{status}, setConnectorState] = useState(smartTimer.state);
	const [phase, setPhase] = useState<SmartTimerPhase>('idle');
	const [bluetoothUnavailable, setBluetoothUnavailable] = useState(false);
	const connected = status === 'connected';

	useEffect(() => {
		const unsubscribeState = smartTimer.stateChanges.subscribe(setConnectorState);
		const unsubscribeEvents = smartTimer.events.subscribe(handleTimerEvent);
		setConnectorState(smartTimer.state);
		smartTimer.autoReconnect();

		return () => {
			unsubscribeState();
			unsubscribeEvents();
			// The timer stays connected while browsing the site, but switching to another input type is done with it
			if (getSetting('timer_type') !== 'smarttimer') {
				smartTimer.disconnect({forget: false});
			}
		};
	}, []);

	useEffect(() => {
		if (!connected) setPhase('idle');
	}, [connected]);

	function handleTimerEvent(event: SmartTimerEvent) {
		const solving = getTimerStore('solving');

		switch (event.type) {
			case 'HANDS_ON':
				if (solving) return;
				setPhase('hands_on');
				setTimerParams({spaceTimerStarted: Date.now(), canStart: false});
				break;
			case 'HANDS_OFF':
				if (solving) return;
				setPhase('idle');
				setTimerParams({spaceTimerStarted: 0, canStart: false});
				break;
			case 'READY':
				if (solving) return;
				setPhase('ready');
				setTimerParams({spaceTimerStarted: Date.now(), canStart: true});
				break;
			case 'RUNNING':
				setPhase('running');
				// A repeated event would restart the clock
				if (solving) return;
				setTimerParams({spaceTimerStarted: 0, canStart: false});
				startTimer();
				break;
			case 'STOPPED':
				setPhase('stopped');
				setTimerParams({spaceTimerStarted: 0, canStart: false});
				// A quick tap stops the timer before the start has rendered into the context
				endTimer(
					{...contextRef.current, timeStartedAt: getTimerStore('timeStartedAt')},
					event.time,
				);
				break;
			case 'RESET':
				handleReset(solving);
				break;
			case 'DISCONNECT':
				// The time can't be trusted without the timer, so the solve in progress is dropped
				if (solving) cancelSolve();
				else if (getTimerStore('inInspection')) cancelInspection();
				setTimerParams({spaceTimerStarted: 0, canStart: false});
				break;
		}
	}

	/** Reset cancels whatever is in progress or clears the last time, and on an idle timer starts inspection */
	function handleReset(solving: boolean) {
		setPhase('idle');

		const finalTime = getTimerStore('finalTime') ?? 0;
		if (solving) {
			cancelSolve();
		} else if (
			getTimerStore('inInspection') ||
			getTimerStore('spaceTimerStarted') ||
			finalTime > 0
		) {
			cancelInspection();
			setTimerParams({spaceTimerStarted: 0, canStart: false, finalTime: -1});
		} else if (
			getSetting('inspection') &&
			smartTimer.state.brand &&
			SMART_TIMER_DRIVERS[smartTimer.state.brand].resetStartsInspection
		) {
			startInspection();
		}
	}

	async function connect() {
		const bluetoothAvailable =
			!!navigator.bluetooth &&
			(await navigator.bluetooth.getAvailability().catch(() => false));
		if (bluetoothAvailable) {
			smartTimer.connect();
		} else {
			setBluetoothUnavailable(true);
		}
	}

	const solving = !!context.timeStartedAt;

	let action: ReactNode = null;
	if (status === 'connecting') {
		action = (
			<Button variant="secondary" disabled>
				Connecting...
			</Button>
		);
	} else if (!connected) {
		action = (
			<div className="flex flex-col items-center gap-1.5">
				<Button variant="secondary" onClick={connect}>
					Connect
				</Button>
				{status === 'reconnecting' && (
					<span className="text-text/60 text-xs whitespace-nowrap">
						Turn on your timer to reconnect
					</span>
				)}
			</div>
		);
	}

	const controls = (
		<>
			<BluetoothStatus
				status={
					connected
						? 'connected'
						: status === 'connecting'
							? 'connecting'
							: 'disconnected'
				}
			/>
			<ActionMenu
				triggerProps={{variant: 'ghost'}}
				icon={<DotsThree />}
				options={[
					{
						text: 'Disconnect',
						hidden: !connected,
						disabled: solving,
						onClick: () => smartTimer.disconnect({forget: true}),
					},
					{
						text: 'Troubleshoot',
						link: '/guides/bluetooth-troubleshooting#smart-timers',
						newTab: true,
					},
				]}
			/>
		</>
	);

	return (
		<>
			<SmartDevicePanel
				visual={<SmartTimerVisual connected={connected} phase={phase} />}
				controls={controls}
				action={action}
				wide
			/>
			<Dialog open={bluetoothUnavailable} onOpenChange={setBluetoothUnavailable}>
				{bluetoothUnavailable && (
					<DialogContent>
						<BluetoothErrorMessage />
					</DialogContent>
				)}
			</Dialog>
		</>
	);
}
