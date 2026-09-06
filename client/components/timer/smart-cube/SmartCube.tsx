import Emblem from '@/components/common/Emblem';
import ActionMenu from '@/components/common/inputs/ActionMenu';
import BluetoothErrorMessage from '@/components/timer/common/BluetoothErrorMessage';
import {endTimer, startTimer} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import Battery from '@/components/timer/smart-cube/battery/Battery';
import Connect from '@/components/timer/smart-cube/bluetooth/connect';
import {PendingSmartDevice} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import ManageSmartCubes from '@/components/timer/smart-cube/manage-smart-cubes/ManageSmartCubes';
import {preflightChecks} from '@/components/timer/smart-cube/preflight';
import SolveCheck from '@/components/timer/smart-cube/solve-check/SolveCheck';
import {RubiksCube} from '@/components/timer/smart-cube/visual/core/RubiksCube';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {useSettings} from '@/util/hooks/useSettings';
import {toastError} from '@/util/toast';
import Cube from 'cubejs';
import {Bluetooth, DotsThree} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';

export default function SmartCube() {
	const [bluetoothErrorMessageDialog, setBluetoothErrorMessageDialog] = React.useState<{
		props: Record<string, never>;
	} | null>(null);
	const [manageSmartCubesDialog, setManageSmartCubesDialog] = React.useState<{
		props: Record<string, never>;
		title: React.ReactNode;
	} | null>(null);

	const context = useTimerContext();

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const cube = useRef<RubiksCube | null>(null);
	const turnIndex = useRef(0);
	const turnInterval = useRef<ReturnType<typeof setInterval> | null>(null);
	const cubejs = useRef(new Cube());
	const [pendingDevice, setPendingDevice] = useState<PendingSmartDevice | null>(null);
	const confirmationRef = useRef<((confirmed: boolean) => void) | null>(null);
	const mountedRef = useRef(true);
	const [connection] = useState(
		() =>
			new Connect({
				isActive: () => mountedRef.current,
				confirmSolved: (device) =>
					new Promise<boolean>((resolve) => {
						confirmationRef.current?.(false);
						confirmationRef.current = resolve;
						setPendingDevice(device);
					}),
				onDisconnected: () => {
					confirmationRef.current?.(false);
					confirmationRef.current = null;
					if (mountedRef.current) setPendingDevice(null);
					setTimerParams({smartCubeConnecting: false, smartCubeConnected: false});
				},
			}),
	);

	// Turn queue that an interval picks up every 50ms or so
	const turns = useRef<string[]>([]);

	const [scrambleCompletedAt, setScrambleCompletedAt] = useState<Date | null>(null);
	const [inspectionTime, setInspectionTime] = useState(0);

	const useSpaceWithSmartCube = useSettings('use_space_with_smart_cube');
	const {
		scramble,
		smartTurns,
		smartDeviceId,
		smartCubeConnecting,
		smartCubeBatteryLevel,
		smartCurrentState,
		smartSolvedState,
		smartCubeConnected,
		timeStartedAt,
	} = context;

	useEffect(() => {
		mountedRef.current = true;
		initVisualCube();

		return () => {
			mountedRef.current = false;
			confirmationRef.current?.(false);
			confirmationRef.current = null;
			if (turnInterval.current) {
				clearInterval(turnInterval.current);
				turnInterval.current = null;
			}

			connection.disconnect();
		};
	}, []);

	useEffect(() => {
		if (!smartCubeConnecting && smartTurns.length) {
			const turn = smartTurns[smartTurns.length - 1].turn;
			cubejs.current.move(turn);

			addTurn(turn);
		}

		const isSolved = cubejs.current.asString() === smartSolvedState;

		if (!useSpaceWithSmartCube && isSolved && smartTurns.length) {
			resetMoves();
		}
	}, [smartTurns, smartCubeConnecting, smartSolvedState]);

	async function initVisualCube() {
		const {default: RubiksCube, materials} =
			await import('@/components/timer/smart-cube/visual');

		if (turnInterval.current) {
			clearInterval(turnInterval.current);
			turnInterval.current = null;
			turnIndex.current = 0;
		}

		if (canvasRef.current) {
			canvasRef.current.width = 200;
			canvasRef.current.height = 200;

			cube.current = new RubiksCube(
				canvasRef.current,
				materials.classic,
				0,
				'400px',
				'400px',
				smartCurrentState || '',
			);
		}

		setTimeout(() => {
			initCubeTurner();
		}, 500);
	}

	function cubeIsSolved() {
		return cubejs.current.asString() === smartSolvedState;
	}

	function checkForStartAfterTurn() {
		if (useSpaceWithSmartCube) {
			return;
		}

		if (scrambleCompletedAt) {
			startTimer();

			let it = (new Date().getTime() - scrambleCompletedAt.getTime()) / 1000;
			it = Math.floor(it * 100) / 100;

			setScrambleCompletedAt(null);
			setInspectionTime(it);
			setTimerParams({
				smartCanStart: false,
			});
		} else if (preflightChecks(smartTurns, scramble || '')) {
			setScrambleCompletedAt(new Date());
			setTimerParams({
				smartCanStart: true,
			});
			resetMoves();
		}
	}

	function addTurn(...t: string[]) {
		checkForStartAfterTurn();
		turns.current = [...turns.current, ...t];
	}

	function resetMoves(markSolved: boolean = false) {
		if (timeStartedAt) {
			endTimer(context, undefined, {
				inspection_time: inspectionTime,
				smart_device_id: smartDeviceId,
				is_smart_cube: true,
				smart_turn_count: smartTurns.length,
				smart_turns: JSON.stringify(smartTurns),
			});
		}

		setTimerParams({
			smartSolvedState: markSolved ? cubejs.current.asString() : smartSolvedState,
			smartTurns: [],
		});

		setTimeout(() => {
			if (markSolved) {
				initVisualCube();
			}
		}, 50);
	}

	function initCubeTurner() {
		turnInterval.current = setInterval(() => {
			if (document.hasFocus()) {
				if (turns.current.length > turnIndex.current) {
					execTurn();
				} else if (turns.current.length) {
					turns.current = [];
					turnIndex.current = 0;
				}
			}
		}, 60);
	}

	function execTurn() {
		if (!cube.current) {
			return;
		}

		let turn = turns.current[turnIndex.current];

		const prime = !(turn.indexOf("'") > -1);
		turn = turn.replace(/'|\s/g, '');

		switch (turn) {
			case 'R': {
				cube.current.R(prime);
				break;
			}
			case 'L': {
				cube.current.L(!prime);
				break;
			}
			case 'D': {
				cube.current.D(!prime);
				break;
			}
			case 'F': {
				cube.current.F(prime);
				break;
			}
			case 'U': {
				cube.current.U(prime);
				break;
			}
			case 'B': {
				cube.current.B(!prime);
				break;
			}
			case 'x': {
				cube.current.x(prime);
				break;
			}
			case 'y': {
				cube.current.y(prime);
				break;
			}
			case 'z': {
				cube.current.z(prime);
				break;
			}
		}

		turnIndex.current += 1;
	}

	async function connectBluetooth() {
		try {
			const bluetoothAvailable =
				!!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (bluetoothAvailable) {
				connection.connect();
			} else {
				setBluetoothErrorMessageDialog({props: {}});
			}
		} catch (e) {
			toastError('Web Bluetooth API error' + (e ? `: ${e}` : ''));
			// chrome://flags/#enable-experimental-web-platform-features
		}
	}

	function disconnectBluetooth() {
		connection.disconnect();
		setTimerParams({
			smartCanStart: false,
			smartCubeConnected: false,
			smartCubeConnecting: false,
			smartTurns: [],
			smartDeviceId: '',
		});
	}

	function toggleManageSmartCubes() {
		setManageSmartCubesDialog({props: {}, title: 'Manage smart cubes'});
	}

	let actionButton: ReactNode = null;
	const dropdown = (
		<ActionMenu
			triggerProps={{
				variant: 'ghost',
			}}
			icon={<DotsThree />}
			options={[
				{
					text: 'Mark as solved',
					hidden: !smartCubeConnected,
					disabled: !!timeStartedAt,
					onClick: () => resetMoves(true),
				},
				{
					text: 'Disconnect',
					hidden: !smartCubeConnected,
					disabled: !!timeStartedAt,
					onClick: disconnectBluetooth,
				},
				{
					text: 'Manage smart cubes',
					disabled: !!timeStartedAt,
					onClick: toggleManageSmartCubes,
				},
			]}
		/>
	);
	let battery: ReactNode = <Battery level={smartCubeBatteryLevel ?? 0} />;

	let emblem: ReactNode;
	if (smartCubeConnecting) {
		emblem = <Emblem small orange icon={<Bluetooth />} />;
		actionButton = (
			<Button variant="secondary" disabled>
				{'Connecting...'}
			</Button>
		);
		battery = null;
	} else if (smartCubeConnected) {
		emblem = <Emblem small green icon={<Bluetooth />} />;
	} else {
		emblem = <Emblem small red icon={<Bluetooth />} />;
		actionButton = (
			<Button variant="secondary" onClick={connectBluetooth}>
				{'Connect'}
			</Button>
		);
		battery = null;
	}

	return (
		<>
			<div className="relative flex w-1/2 flex-col items-center">
				<div className="mb-[5px]">
					<div className="mt-[-8%] mb-[-8%] [zoom:0.4]">
						<canvas width="200px" height="200px" ref={canvasRef} />
					</div>
					<div className="absolute top-[7px] right-[25px] z-[100] flex flex-col items-center gap-2.5">
						{battery}
						{emblem}
						{dropdown}
					</div>
				</div>
				{actionButton}
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
			<Dialog
				open={manageSmartCubesDialog !== null}
				onOpenChange={(open) => {
					if (!open) {
						setManageSmartCubesDialog(null);
					}
				}}
			>
				{manageSmartCubesDialog && (
					<DialogContent>
						<DialogHeader title={manageSmartCubesDialog.title} />
						<ManageSmartCubes {...manageSmartCubesDialog.props} />
					</DialogContent>
				)}
			</Dialog>
			<Dialog open={pendingDevice !== null} onOpenChange={() => {}}>
				<DialogContent hideCloseButton closeOnEscape={false}>
					<DialogHeader
						title="Confirm that cube is solved"
						description="Please confirm that your smart cube is solved before proceeding."
					/>
					<SolveCheck
						onComplete={() => {
							setPendingDevice(null);
							const resolve = confirmationRef.current;
							confirmationRef.current = null;
							resolve?.(true);
						}}
					/>
				</DialogContent>
			</Dialog>
		</>
	);
}
