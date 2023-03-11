import React, {useContext, useEffect, useRef, useState} from 'react';
import './SmartCube.scss';
import Emblem from '../../common/emblem/Emblem';
import Battery from './battery/Battery';
import Connect from './bluetooth/connect';
import {setTimerParams} from '../helpers/params';
import {emitEvent} from '../../../util/event_handler';
import {preflightChecks} from './preflight';
import {openModal} from '../../../actions/general';
import ManageSmartCubes from './manage_smart_cubes/ManageSmartCubes';
import Cube from 'cubejs';
import block from '../../../styles/bem';
import {TimerContext} from '../Timer';
import {useSettings} from '../../../util/hooks/useSettings';
import {useDispatch} from 'react-redux';
import Dropdown from '../../common/inputs/dropdown/Dropdown';
import Button from '../../common/button/Button';
import {toastError} from '../../../util/toast';
import {endTimer, startTimer} from '../helpers/events';
import BluetoothErrorMessage from '../common/BluetoothErrorMessage';

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
		if (
			!smartCubeConnecting &&
			smartTurns.length
		) {
			const turn = smartTurns[smartTurns.length - 1].turn;
			cubejs.current.move(turn);

			addTurn(turn);
		}

		const isSolved = cubejs.current.asString() === smartSolvedState;

		if (!useSpaceWithSmartCube && isSolved && smartTurns.length) {
			resetMoves();
		}
	}, [smartTurns, smartCubeConnecting, smartSolvedState]);

	function initVisualCube() {
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const RubiksCube = require('./visual').default;
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		const {materials} = require('./visual');

		if (turnInterval.current) {
			clearInterval(turnInterval.current);
			turnInterval.current = null;
			turnIndex.current = 0;
		}

		if (canvasRef.current) {
			canvasRef.current.width = 200;
			canvasRef.current.height = 200;

			cube.current = new RubiksCube(canvasRef.current, materials.classic, 0, '400px', '400px', smartCurrentState);
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
		} else if (preflightChecks(smartTurns, scramble)) {
			setScrambleCompletedAt(new Date());
			setTimerParams({
				smartCanStart: true,
			});
			resetMoves();
		}
	}

	function addTurn(...t) {
		checkForStartAfterTurn();
		turns.current = [...turns.current, ...t];
	}

	function resetMoves(markSolved: boolean = false) {
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
			let bluetoothAvailable = !!navigator.bluetooth && await navigator.bluetooth.getAvailability();
			if (bluetoothAvailable) {
				connect.current.connect();
			} else {
				dispatch(openModal(<BluetoothErrorMessage />));
			}
		} catch (e) {
			toastError('Web Bluetooth API error' + (e ? `: ${e}` : ''));
			// chrome://flags/#enable-experimental-web-platform-features
		}
	}

	function disconnectBluetooth() {
		connect.current.disconnect();
		setTimerParams({
			smartCanStart: false,
			smartCubeConnected: false,
			smartCubeConnecting: false,
			smartTurns: [],
			smartDeviceId: '',
		});
	}

	function toggleManageSmartCubes() {
		dispatch(
			openModal(<ManageSmartCubes />, {
				title: 'Manage smart cubes',
			})
		);
	}

	let actionButton = null;
	const dropdown = (
		<Dropdown
			dropdownButtonProps={{
				transparent: true,
			}}
			icon="ph-dots-three"
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
				{text: 'Manage smart cubes', disabled: !!timeStartedAt, onClick: toggleManageSmartCubes},
			]}
		/>
	);
	let battery = <Battery level={smartCubeBatteryLevel} />;

	let emblem;
	if (smartCubeConnecting) {
		emblem = <Emblem small orange icon="ph-bluetooth" />;
		actionButton = <Button text="Connecting..." disabled />;
		battery = null;
	} else if (smartCubeConnected) {
		emblem = <Emblem small green icon="ph-bluetooth" />;
	} else {
		emblem = <Emblem small red icon="ph-bluetooth" />;
		actionButton = <Button text="Connect" onClick={connectBluetooth} />;
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
