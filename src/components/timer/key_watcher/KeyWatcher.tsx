import React, {ReactNode, useCallback, useContext, useEffect} from 'react';
import {GlobalHotKeys} from 'react-hotkeys';
import {getSettings} from '../../../lib/db/settings/query';
import {getCubeTypeInfoById} from '../../../lib/util/cubes/util';
import {useGeneral} from '../../../lib/util/hooks/useGeneral';
import {useDocumentListener, useWindowListener} from '../../../lib/util/hooks/useListener';
import {useSettings} from '../../../lib/util/hooks/useSettings';
import {HOTKEY_MAP} from '../../../lib/util/timer/hotkeys';
import block from '../../../styles/bem';
import {endTimer, resetTimerParams, startInspection, startTimer} from '../helpers/events';
import {configureHotkeys} from '../helpers/hotkeys';
import {setTimerParam, setTimerParams} from '../helpers/params';
import {
	clearInspectionTimers,
	getTimer,
	INSPECTION_GRACE_PERIOD_TIMEOUT,
	setTimer,
	START_TIMEOUT,
	stopTimer,
} from '../helpers/timers';
import {smartCubeSelected} from '../helpers/util';
import {TimerContext} from '../Timer';

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
		RESET_INSPECTION: useCallback(() => {
			clearInspectionTimers(true, true);
		}, []),
	};

	const modals = useGeneral('modals');
	const timerType = useSettings('timer_type');
	const stackMatOn = timerType === 'stackmat';
	const ganTimerOn = timerType === 'gantimer';
	const inspection = useSettings('inspection');
	const manualEntry = useSettings('manual_entry');


	useEffect(() => {
		configureHotkeys();
		setTimerParam('startEnabled', true);
	}, []);

	const keydownSpace = useCallback((e, touch = false) => {
		const freezeTime = getSettings().freeze_time;

		if (e.key === 'Escape') return;

		const solveOpen = modals.length > 1 || (!inModal && modals.length);

		// Checking for various conditions where we don't want to start the timer
		if (
			ganTimerOn ||
			solveOpen ||
			!startEnabled ||
			timerDisabled ||
			disabled ||
			editScramble ||
			smartCubeSelected(context)
		) {
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
					}, 250),
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
				}, freezeTime * 1000),
			);
		}
	}, [modals.length, inModal, ganTimerOn, startEnabled, timerDisabled, disabled, editScramble, context, cubeType, timeStartedAt, inspection, manualEntry, stackMatOn, inInspection, spaceTimerStarted]);

	const touchStart = useCallback((e) => {
		let target = e.target;

		while (target.parentNode) {
			if (
				target.nodeName === 'BUTTON' ||
				target.nodeName === 'TEXTAREA' ||
				target.nodeName === 'INPUT'
			) {
				return;
			}

			if (target.classList.contains(timerClass('main'))) {
				keydownSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}, [keydownSpace]);

	const touchEnd = useCallback((e) => {
		let target = e.target;

		while (target.parentNode) {
			if (target.classList.contains(timerClass('main'))) {
				keyupSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}, [keyupSpace])

	const keydownSpace = useCallback((e, touch = false) => {
		const freezeTime = getSettings().freeze_time;

		if (e.key === 'Escape') return;

		const solveOpen = modals.length > 1 || (!inModal && modals.length);

		// Checking for various conditions where we don't want to start the timer
		if (
			ganTimerOn ||
			solveOpen ||
			!startEnabled ||
			timerDisabled ||
			disabled ||
			editScramble ||
			smartCubeSelected(context)
		) {
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
					}, 250),
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
				}, freezeTime * 1000),
			);
		}
	}, [modals.length, inModal, ganTimerOn, startEnabled, timerDisabled, disabled, editScramble, context, cubeType, timeStartedAt, inspection, manualEntry, stackMatOn, inInspection, spaceTimerStarted])

	const keyupSpace = useCallback((e, touch = false) => {
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
	}, [ganTimerOn, spaceTimerStarted, manualEntry, inspection, inInspection])

	/**
	 * When escape key is pressed
	 * - End timer if it has started
	 * - If in inspection countdown, stop inspection
	 * - Reset scramble
	 * - Reset timer state data (startedAt, endedAt, etc.)
	 *
	 * @param e
	 */
	const escapePressed = useCallback((e) => {
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
	}, [ganTimerOn, inInspection, context, timeStartedAt]);

	useWindowListener('keyup', keyupSpace);
	useWindowListener('keydown', keydownSpace);
	useDocumentListener('keyup', escapePressed);
	useWindowListener('touchstart', touchStart);
	useWindowListener('touchend', touchEnd);

	return (
		<GlobalHotKeys handlers={HOTKEY_HANDLERS} keyMap={HOTKEY_MAP}>
			{props.children}
		</GlobalHotKeys>
	);
}
