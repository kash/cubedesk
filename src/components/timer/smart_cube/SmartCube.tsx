import Emblem from '@/components/common/emblem/Emblem';
import './SmartCube.scss';
import Dropdown from '@/components/common/inputs/dropdown/Dropdown';
import {Button} from '@/components/ui/button';
import {openModal} from '@/lib/actions/general';
import {useSettings} from '@/lib/util/hooks/useSettings';
import {toastError} from '@/lib/util/toast';
import block from '@/styles/bem';
import {Bluetooth, DotsThree} from '@phosphor-icons/react/dist/ssr';
import Cube from 'cubejs';
import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import BluetoothErrorMessage from '../common/BluetoothErrorMessage';
import {endTimer, startTimer} from '../helpers/events';
import {setTimerParams} from '../helpers/params';
import {TimerContext} from '../Timer';
import Battery from './battery/Battery';
import Connect from './bluetooth/connect';
import ManageSmartCubes from './manage_smart_cubes/ManageSmartCubes';
import {preflightChecks} from './preflight';

const b = block('smart-cube');

export default function SmartCube() {
	const dispatch = useDispatch();

	const context = useContext(TimerContext);

	const canvasRef = useRef(null);
	const cube = useRef(null);
	const turnIndex = useRef(0);
	const turnInterval = useRef(null);
	const cubejs = useRef(new Cube());
	const connect = useRef(new Connect());

	// Turn queue that an interval picks up every 50ms or so
	const turns = useRef([]);

	const [scrambleCompletedAt, setScrambleCompletedAt] = useState(null);
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
		initVisualCube();

		return () => {
			if (turnInterval.current) {
				clearInterval(turnInterval.current);
				turnInterval.current = null;
			}

			connect.current.disconnect();
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

	const initVisualCube = useCallback(() => {
		const RubiksCube = require('./visual').default;

		const {materials} = require('./visual');

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
				smartCurrentState,
			);
		}

		setTimeout(() => {
			initCubeTurner();
		}, 500);
	}, [smartCurrentState, initCubeTurner]);

	const cubeIsSolved = useCallback(() => {
		return cubejs.current.asString() === smartSolvedState;
	}, [smartSolvedState]);

	const checkForStartAfterTurn = useCallback(() => {
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
		} else if (preflightChecks(smartTurns, scramble)) {
			setScrambleCompletedAt(new Date());
			setTimerParams({
				smartCanStart: true,
			});
			resetMoves();
		}
	}, [useSpaceWithSmartCube, scrambleCompletedAt, smartTurns, scramble, resetMoves]);

	const addTurn = useCallback(
		(...t) => {
			checkForStartAfterTurn();
			turns.current = [...turns.current, ...t];
		},
		[checkForStartAfterTurn],
	);

	const resetMoves = useCallback(
		(markSolved: boolean = false) => {
			if (timeStartedAt) {
				endTimer(context, null, {
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
		},
		[
			timeStartedAt,
			context,
			inspectionTime,
			smartDeviceId,
			smartTurns,
			smartSolvedState,
			initVisualCube,
		],
	);

	const initCubeTurner = useCallback(() => {
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
	}, [execTurn]);

	const execTurn = useCallback(() => {
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
	}, []);

	const connectBluetooth = useCallback(async () => {
		try {
			const bluetoothAvailable =
				!!navigator.bluetooth && (await navigator.bluetooth.getAvailability());
			if (bluetoothAvailable) {
				connect.current.connect();
			} else {
				dispatch(openModal(<BluetoothErrorMessage />));
			}
		} catch (e: unknown) {
			toastError('Web Bluetooth API error' + (e ? `: ${e}` : ''));
			// chrome://flags/#enable-experimental-web-platform-features
		}
	}, [dispatch]);

	const disconnectBluetooth = useCallback(() => {
		connect.current.disconnect();
		setTimerParams({
			smartCanStart: false,
			smartCubeConnected: false,
			smartCubeConnecting: false,
			smartTurns: [],
			smartDeviceId: '',
		});
	}, []);

	const toggleManageSmartCubes = useCallback(() => {
		dispatch(
			openModal(<ManageSmartCubes />, {
				title: 'Manage smart cubes',
			}),
		);
	}, [dispatch]);

	let actionButton = null;
	const dropdown = (
		<Dropdown
			dropdownButtonProps={{
				transparent: true,
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
	let battery = <Battery level={smartCubeBatteryLevel} />;

	let emblem;
	if (smartCubeConnecting) {
		emblem = <Emblem small orange icon={<Bluetooth />} />;
		actionButton = <Button disabled>Connecting...</Button>;
		battery = null;
	} else if (smartCubeConnected) {
		emblem = <Emblem small green icon={<Bluetooth />} />;
	} else {
		emblem = <Emblem small red icon={<Bluetooth />} />;
		actionButton = <Button onClick={connectBluetooth}>Connect</Button>;
		battery = null;
	}

	return (
		<div className={b()}>
			<div className={b('wrapper')}>
				<div className={b('cube')}>
					<canvas width="200px" height="200px" ref={canvasRef} />
				</div>
				<div className={b('info')}>
					{battery}
					{emblem}
					{dropdown}
				</div>
			</div>
			{actionButton}
		</div>
	);
}
