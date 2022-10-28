import React, {ReactNode, useContext, useEffect} from 'react';
import {HOTKEY_MAP} from '../../../util/timer/hotkeys';
import {GlobalHotKeys} from 'react-hotkeys';
import {
	clearInspectionTimers,
	getTimer,
	INSPECTION_GRACE_PERIOD_TIMEOUT,
	INSPECTION_INTERVAL,
	INSPECTION_TIMEOUT,
	setTimer,
	START_TIMEOUT,
	stopTimer,
} from '../helpers/timers';
import {getCubeTypeInfoById} from '../../../util/cubes/util';
import {configureHotkeys} from '../helpers/hotkeys';
import {TimerContext} from '../Timer';
import {smartCubeSelected} from '../helpers/util';
import {setTimerParam, setTimerParams} from '../helpers/params';
import block from '../../../styles/bem';
import {endTimer, resetTimerParams, startTimer} from '../helpers/events';
import {useDocumentListener, useWindowListener} from '../../../util/hooks/useListener';
import {getTimerStore} from '../../../util/store/getTimer';
import {useSettings} from '../../../util/hooks/useSettings';
import {useGeneral} from '../../../util/hooks/useGeneral';
import {resourceUri} from '../../../util/storage';
import {getSettings} from '../../../db/settings/query';

const timerClass = block('timer');

interface Props {
	children: ReactNode;
}

export default function KeyWatcher(props: Props) {
	const context = useContext(TimerContext);
	const {
		cubeType,
		disabled,
		timerDisabled,
		editScramble,
		timeStartedAt,
		inModal,
		inInspection,
		spaceTimerStarted,
		startEnabled,
	} = context;

	const HOTKEY_HANDLERS = {
		RESET_INSPECTION: () => {
			clearInspectionTimers(true, true);
		},
	};

	const modals = useGeneral('modals');
	const inspectionDelay = useSettings('inspection_delay');
	const inspectionAutoStart = useSettings('inspection_auto_start');
	const playInspectionSound = useSettings('play_inspection_sound');
	const stackMatOn = useSettings('timer_type') === 'stackmat';
	const inspection = useSettings('inspection');
	const manualEntry = useSettings('manual_entry');

	useWindowListener('keyup', keyupSpace);
	useWindowListener('keydown', keydownSpace);
	useDocumentListener('keyup', escapePressed);
	useWindowListener('touchstart', touchStart);
	useWindowListener('touchend', touchEnd);

	useEffect(() => {
		configureHotkeys();
		setTimerParam('startEnabled', true);
	}, []);

	function touchStart(e) {
		let target = e.target;

		while (target.parentNode) {
			if (target.nodeName === 'BUTTON' || target.nodeName === 'TEXTAREA' || target.nodeName === 'INPUT') {
				return;
			}

			if (target.classList.contains(timerClass('main'))) {
				keydownSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}

	function touchEnd(e) {
		let target = e.target;

		while (target.parentNode) {
			if (target.classList.contains(timerClass('main'))) {
				keyupSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}

	function keydownSpace(e, touch = false) {
		const freezeTime = getSettings().freeze_time;

		if (e.key === 'Escape') return;

		const solveOpen = modals.length > 1 || (!inModal && modals.length);

		// Checking for various conditions where we don't want to start the timer
		if (solveOpen || !startEnabled || timerDisabled || disabled || editScramble || smartCubeSelected(context)) {
			return;
		}

		const validCubeType = getCubeTypeInfoById(cubeType);

		if (!validCubeType) {
			return;
		}

		if (timeStartedAt) {
			e.preventDefault();
			endTimer(context);

			if (inspection) {
				setTimer(
					INSPECTION_GRACE_PERIOD_TIMEOUT,
					setTimeout(() => {
						stopTimer(INSPECTION_GRACE_PERIOD_TIMEOUT);
					}, 250)
				);
			}

			return;
		}

		// 32 is for space
		if ((e.keyCode !== 32 && !touch) || manualEntry) {
			return;
		}
		if ((!inspection && stackMatOn) || (stackMatOn && inspection && inInspection)) return;

		e.preventDefault();

		if (!spaceTimerStarted) {
			const now = new Date();

			if (inspection && !inInspection) {
				if (getTimer(INSPECTION_GRACE_PERIOD_TIMEOUT)) return;

				setTimerParams({
					spaceTimerStarted: now.getTime(),
					canStart: true,
				});

				return;
			}

			setTimerParams({
				spaceTimerStarted: now.getTime(),
			});

			setTimer(
				START_TIMEOUT,
				setTimeout(() => {
					setTimerParams({
						canStart: true,
					});
				}, freezeTime * 1000)
			);
		}
	}

	function keyupSpace(e, touch = false) {
		const freezeTime = getSettings().freeze_time;

		if ((e.keyCode !== 32 && !touch) || !spaceTimerStarted || manualEntry) return;

		if (getTimer(START_TIMEOUT)) {
			stopTimer(START_TIMEOUT);
		}

		if (inspection && !inInspection) {
			startInspection();
			setTimerParams({
				spaceTimerStarted: 0,
				canStart: false,
			});
			return;
		}

		const now = new Date();
		setTimerParams({
			spaceTimerStarted: 0,
			canStart: false,
		});

		// Ignore events where space was held for less than .5s
		if (now.getTime() - spaceTimerStarted < freezeTime * 1000) return;

		if (inInspection || !inspection) {
			startTimer();
		}
	}

	/**
	 * When escape key is pressed
	 * - End timer if it has started
	 * - If in inspection countdown, stop inspection
	 * - Reset scramble
	 * - Reset timer state data (startedAt, endedAt, etc.)
	 *
	 * @param e
	 */
	function escapePressed(e) {
		if (e.code !== 'Escape') {
			return;
		}

		e.preventDefault();

		if (inInspection) {
			clearInspectionTimers(true, true);
		} else if (smartCubeSelected(context) || timeStartedAt) {
			setTimerParams({
				solving: false,
				finalTime: -1,
			});

			setTimeout(() => {
				resetTimerParams(context);
			}, 10);
		}
	}

	function startInspection() {
		setTimerParams({
			inInspection: true,
			inspectionTimer: inspectionDelay + 2,
			addTwoToSolve: false,
			dnfTime: false,
		});

		setTimer(
			INSPECTION_TIMEOUT,
			setTimeout(() => {
				if (inspectionAutoStart) {
					startTimer();
				}
				setTimerParams({
					dnfTime: true,
					addTwoToSolve: false,
				});
			}, inspectionDelay * 1000 + 2000)
		);

		setTimer(
			INSPECTION_INTERVAL,
			setInterval(() => {
				const insTimer = getTimerStore('inspectionTimer');

				if (playInspectionSound) {
					let audio;
					if (inspectionDelay - insTimer === 5) {
						audio = new Audio(resourceUri('/audio/8_sec.mp3'));
					} else if (inspectionDelay - insTimer === 9) {
						audio = new Audio(resourceUri('/audio/12_sec.mp3'));
					}

					if (audio) {
						audio.playbackRate = 2.3;
						audio.play();
					}
				}

				let addTwoToSolve = false;
				if (insTimer <= 3) {
					addTwoToSolve = true;
				}

				setTimerParams({
					inspectionTimer: insTimer - 1,
					addTwoToSolve,
				});
			}, 1000)
		);
	}

	return (
		<GlobalHotKeys handlers={HOTKEY_HANDLERS} keyMap={HOTKEY_MAP}>
			{props.children}
		</GlobalHotKeys>
	);
}
