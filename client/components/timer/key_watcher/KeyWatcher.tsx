import React, {ReactNode, useContext, useEffect} from 'react';
import {HOTKEY_MAP} from '../../../util/timer/hotkeys';
import {GlobalHotKeys} from 'react-hotkeys';
import {
	clearInspectionTimers,
	getTimer,
	INSPECTION_GRACE_PERIOD_TIMEOUT,
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
import {endTimer, resetTimerParams, startTimer, startInspection} from '../helpers/events';
import {useDocumentListener, useWindowListener} from '../../../util/hooks/useListener';
import {useSettings} from '../../../util/hooks/useSettings';
import {useGeneral} from '../../../util/hooks/useGeneral';
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
	const timerType = useSettings('timer_type');
	const stackMatOn = timerType === 'stackmat';
	const ganTimerOn = timerType === 'gantimer';
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
		if (ganTimerOn || solveOpen || !startEnabled || timerDisabled || disabled || editScramble || smartCubeSelected(context)) {
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

		if (ganTimerOn || (e.keyCode !== 32 && !touch) || !spaceTimerStarted || manualEntry) return;

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
		if (ganTimerOn || e.code !== 'Escape') {
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

	return (
		<GlobalHotKeys handlers={HOTKEY_HANDLERS} keyMap={HOTKEY_MAP}>
			{props.children}
		</GlobalHotKeys>
	);
}
