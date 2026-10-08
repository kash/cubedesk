import ActionMenu from '@/components/common/inputs/ActionMenu';
import BluetoothErrorMessage from '@/components/timer/common/BluetoothErrorMessage';
import SmartDevicePanel from '@/components/timer/common/SmartDevicePanel';
import {endTimer, startTimer} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import {smartCubeMismatched} from '@/components/timer/helpers/util';
import Battery from '@/components/timer/smart-cube/battery/Battery';
import BluetoothStatus from '@/components/timer/smart-cube/bluetooth-status/BluetoothStatus';
import Connect from '@/components/timer/smart-cube/bluetooth/connect';
import {
	MacAddressRequestReason,
	MacAddressResponse,
	PendingSmartDevice,
} from '@/components/timer/smart-cube/bluetooth/smart_cube';
import MacAddressPrompt from '@/components/timer/smart-cube/mac-address/MacAddressPrompt';
import ManageSmartCubes from '@/components/timer/smart-cube/manage-smart-cubes/ManageSmartCubes';
import {preflightChecks} from '@/components/timer/smart-cube/preflight';
import SolveCheck from '@/components/timer/smart-cube/solve-check/SolveCheck';
import {RubiksCube} from '@/components/timer/smart-cube/visual/core/RubiksCube';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogHeader} from '@/components/ui/dialog';
import {setEventType} from '@/db/settings/update';
import {encodeSmartTurns} from '@/shared/smart_turns';
import {cn} from '@/util/cn';
import {useSettings} from '@/util/hooks/useSettings';
import {SMART_PUZZLES, SmartPuzzle} from '@/util/smart-cube/puzzle';
import {SmartTurn} from '@/util/smart_scramble';
import {toastError} from '@/util/toast';
import Cube from 'cubejs';
import {DotsThree} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';

const SOLVED_STATE = new Cube().asString();

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
	const cubejs = useRef(new Cube());
	// Applied to cubejs and the visual, so a render only applies the turns that came after it
	const lastAppliedTurn = useRef<SmartTurn | null>(null);
	const [pendingDevice, setPendingDevice] = useState<PendingSmartDevice | null>(null);
	const confirmationRef = useRef<((confirmed: boolean) => void) | null>(null);
	const [macAddressRequest, setMacAddressRequest] = useState<MacAddressRequestReason | null>(
		null,
	);
	const macAddressResponseRef = useRef<((response: MacAddressResponse) => void) | null>(null);
	const mountedRef = useRef(true);
	const [reconnecting, setReconnecting] = useState(false);
	const [hasGyro, setHasGyro] = useState(false);
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
				onInitialState: (facelets, puzzleId) => applyCubeState(facelets, puzzleId),
				onOrientation: (orientation) => {
					setHasGyro(true);
					cube.current?.setOrientation(orientation);
				},
				requestMacAddress: (reason) =>
					new Promise<MacAddressResponse>((resolve) => {
						macAddressResponseRef.current?.({action: 'cancel'});
						macAddressResponseRef.current = resolve;
						setMacAddressRequest(reason);
					}),
				onDisconnected: () => {
					confirmationRef.current?.(false);
					confirmationRef.current = null;
					macAddressResponseRef.current?.({action: 'cancel'});
					macAddressResponseRef.current = null;
					if (mountedRef.current) {
						setPendingDevice(null);
						setMacAddressRequest(null);
						setHasGyro(false);
					}
					cube.current?.resetOrientation();
					setTimerParams({
						smartCubeConnecting: false,
						smartCubeConnected: false,
						smartCubeNeedsSolve: false,
						smartCubePuzzle: null,
					});
				},
			}),
	);

	const [scrambleCompletedAt, setScrambleCompletedAt] = useState<Date | null>(null);
	const [inspectionTime, setInspectionTime] = useState(0);

	const useSpaceWithSmartCube = useSettings('use_space_with_smart_cube');
	const {
		scramble,
		smartTurns,
		smartDeviceId,
		smartCubeConnecting,
		smartCubeBatteryLevel,
		smartSolvedState,
		smartCubeConnected,
		smartCubeNeedsSolve,
		smartCubePuzzle,
		eventType,
		timeStartedAt,
	} = context;
	const puzzle = SMART_PUZZLES[smartCubePuzzle ?? '333'];

	useEffect(() => {
		mountedRef.current = true;
		initVisualCube();
		connection
			.autoReconnect(() => setReconnecting(true))
			.finally(() => {
				if (mountedRef.current) setReconnecting(false);
			});

		return () => {
			mountedRef.current = false;
			confirmationRef.current?.(false);
			confirmationRef.current = null;
			macAddressResponseRef.current?.({action: 'cancel'});
			macAddressResponseRef.current = null;
			cube.current?.dispose();
			cube.current = null;

			connection.disconnect();
		};
	}, []);

	useEffect(() => {
		// Turns that arrive together, like both faces of a slice move, render once, so apply every turn since the last one
		const newTurns: SmartTurn[] = smartCubeConnecting
			? []
			: smartTurns.slice(smartTurns.indexOf(lastAppliedTurn.current) + 1);
		if (newTurns.length) {
			lastAppliedTurn.current = newTurns[newTurns.length - 1];
			checkForStartAfterTurn();
			for (const {turn} of newTurns) {
				cubejs.current.move(turn);
				execTurn(turn);
			}
		}

		const isSolved = cubeIsSolved();

		if (isSolved && smartCubeNeedsSolve) {
			// Turns made while solving aren't part of the next scramble
			setTimerParams({smartCubeNeedsSolve: false, smartTurns: []});
		}

		if (!useSpaceWithSmartCube && isSolved && smartTurns.length) {
			resetMoves();
		}
	}, [smartTurns, smartCubeConnecting, smartSolvedState]);

	// Time the connected cube's puzzle, and redraw the visual at its size
	useEffect(() => {
		if (!smartCubePuzzle) return;
		if (smartCubePuzzle !== eventType) setEventType(smartCubePuzzle);
		initVisualCube(cubejs.current.asString());
	}, [smartCubePuzzle]);

	// The cube's reported state replaces the assumed solved one, so tracking starts from reality
	function applyCubeState(facelets: string, puzzleId: SmartPuzzle) {
		const {isSolved, size} = SMART_PUZZLES[puzzleId];
		cubejs.current = Cube.fromString(facelets);
		setTimerParams({
			smartCubePuzzle: puzzleId,
			smartCurrentState: facelets,
			smartSolvedState: SOLVED_STATE,
			smartTurns: [],
			smartCubeNeedsSolve: !isSolved(facelets, SOLVED_STATE),
		});
		initVisualCube(facelets, size);
	}

	async function initVisualCube(state: string = SOLVED_STATE, size = puzzle.size) {
		const {default: RubiksCube, materials} =
			await import('@/components/timer/smart-cube/visual');

		if (canvasRef.current) {
			canvasRef.current.width = 200;
			canvasRef.current.height = 200;

			// Keep the gyroscope calibration when the cube is rebuilt
			const orientationBasis = cube.current?.orientationBasis ?? null;
			cube.current?.dispose();
			cube.current = new RubiksCube(
				canvasRef.current,
				materials.classic,
				window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 80,
				'400px',
				'400px',
				state,
				size,
			);
			cube.current.orientationBasis = orientationBasis;
		}
	}

	function cubeIsSolved() {
		return puzzle.isSolved(cubejs.current.asString(), smartSolvedState);
	}

	function checkForStartAfterTurn() {
		// The scramble is for a different puzzle, so it can't be matched
		if (useSpaceWithSmartCube || smartCubeMismatched(context)) {
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

	function resetMoves(markSolved: boolean = false) {
		if (timeStartedAt) {
			endTimer(context, undefined, {
				inspection_time: inspectionTime,
				smart_device_id: smartDeviceId,
				is_smart_cube: true,
				smart_turn_count: smartTurns.length,
				smart_turns: encodeSmartTurns(smartTurns),
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

	function execTurn(turn: string) {
		if (!cube.current) {
			return;
		}

		const prime = !(turn.indexOf("'") > -1);
		switch (turn.replace(/'|\s/g, '')) {
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

	async function markSolved() {
		// Cubes that track their own state are recalibrated too, so they agree with the app from now on
		if (await connection.resetCubeState())
			applyCubeState(SOLVED_STATE, smartCubePuzzle ?? '333');
		else resetMoves(true);
	}

	function disconnectBluetooth() {
		connection.forgetDevice();
		connection.disconnect();
		setTimerParams({
			smartCanStart: false,
			smartCubeConnected: false,
			smartCubeConnecting: false,
			smartTurns: [],
			smartDeviceId: '',
		});
	}

	function respondToMacAddressRequest(response: MacAddressResponse) {
		setMacAddressRequest(null);
		const resolve = macAddressResponseRef.current;
		macAddressResponseRef.current = null;
		resolve?.(response);
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
					onClick: markSolved,
				},
				{
					text: 'Reset orientation',
					hidden: !smartCubeConnected || !hasGyro,
					onClick: () => cube.current?.resetOrientation(),
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
				{
					text: 'Troubleshoot',
					link: '/guides/bluetooth-troubleshooting',
					newTab: true,
				},
			]}
		/>
	);
	let battery: ReactNode = <Battery level={smartCubeBatteryLevel ?? 0} />;

	let bluetoothStatus: ReactNode;
	if (smartCubeConnecting) {
		bluetoothStatus = <BluetoothStatus status="connecting" />;
		actionButton = (
			<Button variant="secondary" disabled>
				{'Connecting...'}
			</Button>
		);
		battery = null;
	} else if (smartCubeConnected) {
		bluetoothStatus = <BluetoothStatus status="connected" />;
	} else {
		bluetoothStatus = <BluetoothStatus status="disconnected" />;
		actionButton = (
			<div className="flex flex-col items-center gap-1.5">
				<Button variant="secondary" onClick={connectBluetooth}>
					{'Connect'}
				</Button>
				{reconnecting && (
					<span className="text-text/60 text-xs">Turn your cube to reconnect</span>
				)}
			</div>
		);
		battery = null;
	}

	return (
		<>
			<SmartDevicePanel
				visual={
					<div className="mt-[-8%] mb-[-8%] [zoom:0.4]">
						<canvas
							width="200px"
							height="200px"
							ref={canvasRef}
							className={cn('transition-[filter,opacity] duration-300', {
								'opacity-50 grayscale': !smartCubeConnected,
							})}
						/>
					</div>
				}
				controls={
					<>
						{battery}
						{bluetoothStatus}
						{dropdown}
					</>
				}
				action={actionButton}
			/>
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
			<Dialog
				open={macAddressRequest !== null}
				onOpenChange={(open) => {
					if (!open) {
						respondToMacAddressRequest({action: 'cancel'});
					}
				}}
			>
				{macAddressRequest && (
					<DialogContent>
						<MacAddressPrompt
							reason={macAddressRequest}
							onRespond={respondToMacAddressRequest}
						/>
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
