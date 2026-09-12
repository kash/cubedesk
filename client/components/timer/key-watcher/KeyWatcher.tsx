import {
	endTimer,
	resetTimerParams,
	startInspection,
	startTimer,
} from '@/components/timer/helpers/events';
import {configureHotkeys} from '@/components/timer/helpers/hotkeys';
import {setTimerParam, setTimerParams} from '@/components/timer/helpers/params';
import {
	clearInspectionTimers,
	getTimer,
	INSPECTION_GRACE_PERIOD_TIMEOUT,
	setTimer,
	START_TIMEOUT,
	stopTimer,
} from '@/components/timer/helpers/timers';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import {useTimerContext} from '@/components/timer/Timer';
import {useDialogBlocked} from '@/components/ui/dialog';
import {isPopupOpen} from '@/components/ui/popup';
import {getSettings} from '@/db/settings/query';
import {getCubeTypeInfoById} from '@/util/cubes/util';
import {useDocumentListener, useWindowListener} from '@/util/hooks/useListener';
import {useSettings} from '@/util/hooks/useSettings';
import {HOTKEY_MAP} from '@/util/timer/hotkeys';
import React, {ReactNode, useEffect, useRef} from 'react';
import {GlobalHotKeys} from 'react-hotkeys';

interface Props {
	children: ReactNode;
}

export default function KeyWatcher(props: Props) {
	const pointerInteraction = useRef(false);
	const capturedSpace = useRef(false);
	const context = useTimerContext();
	const {
		cubeType,
		disabled,
		timerDisabled,
		editScramble,
		timeStartedAt,
		inInspection,
		spaceTimerStarted,
		startEnabled,
	} = context;

	const HOTKEY_HANDLERS = {
		RESET_INSPECTION: () => {
			if (dialogBlocked || isPopupOpen()) return;
			clearInspectionTimers(true, true);
		},
	};

	const dialogBlocked = useDialogBlocked();
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
			if (
				target.nodeName === 'BUTTON' ||
				target.nodeName === 'TEXTAREA' ||
				target.nodeName === 'INPUT'
			) {
				return;
			}

			if (target.hasAttribute?.('data-timer-main')) {
				keydownSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}

	function touchEnd(e) {
		let target = e.target;

		while (target.parentNode) {
			if (target.hasAttribute?.('data-timer-main')) {
				keyupSpace(e, true);
				return;
			}

			target = target.parentNode;
		}
	}

	function keydownSpace(e, touch = false, allowButton = false) {
		const freezeTime = getSettings().freeze_time;

		if (e.key === 'Escape' || isPopupOpen()) return;
		if (
			!touch &&
			e.target instanceof Element &&
			e.target.closest(
				allowButton
					? 'input, select, textarea, [contenteditable], [data-popup-content]'
					: 'button, input, select, textarea, [contenteditable], [data-popup-content]',
			)
		)
			return;

		const solveOpen = dialogBlocked;

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

		const validCubeType = getCubeTypeInfoById(cubeType ?? '');

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
	}

	function keyupSpace(e, touch = false) {
		const freezeTime = getSettings().freeze_time;

		if (
			dialogBlocked ||
			isPopupOpen() ||
			ganTimerOn ||
			(e.keyCode !== 32 && !touch) ||
			!spaceTimerStarted ||
			manualEntry
		)
			return;

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
		if (dialogBlocked || isPopupOpen() || ganTimerOn || e.code !== 'Escape') {
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
			<div
				className="contents"
				onPointerDownCapture={() => {
					pointerInteraction.current = true;
				}}
				onKeyDownCapture={(event) => {
					if (event.key === 'Tab') pointerInteraction.current = false;
					if (
						event.key !== ' ' ||
						!pointerInteraction.current ||
						!(event.target instanceof Element) ||
						!event.target.closest('button')
					)
						return;

					// Reclaim space from clicked buttons before picker triggers handle it.
					// Tabbing to a button still allows normal keyboard activation.
					keydownSpace(event, false, true);
					if (event.defaultPrevented) {
						capturedSpace.current = true;
						event.stopPropagation();
					}
				}}
				onKeyUpCapture={(event) => {
					if (event.key !== ' ' || !capturedSpace.current) return;
					capturedSpace.current = false;
					// Buttons activate on keyup; only the timer should consume this press.
					event.preventDefault();
					event.stopPropagation();
					keyupSpace(event);
					// Release picker focus once the timer takes over so subsequent keys
					// reach the timer instead of being ignored as button interactions.
					if (event.target instanceof Element) event.target.closest('button')?.blur();
				}}
			>
				{props.children}
			</div>
		</GlobalHotKeys>
	);
}
