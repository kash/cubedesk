import React, {useCallback, useContext, useEffect, useRef, useState} from 'react';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '../../../lib/db/settings/update';
import './TimeDisplay.scss';
import {useGeneral} from '../../../lib/util/hooks/useGeneral';
import {useSettings} from '../../../lib/util/hooks/useSettings';
import {getTimeString} from '../../../lib/util/time';
import block from '../../../styles/bem';
import {smartCubeSelected} from '../helpers/util';
import {preflightChecks} from '../smart_cube/preflight';
import {TimerContext} from '../Timer';
import GanTimer from './gantimer/GanTimer';
import Manual from './manual/Manual';
import StackMat from './stackmat/StackMat';
import StartInstructions from './start_instructions/StartInstructions';

const b = block('time-display');
const bi = block('timer-bottom-info');

export default function TimeDisplay() {
	const context = useContext(TimerContext);
	const [time, setTime] = useState(0);
	const timerCounter = useRef<NodeJS.Timeout>(null);
	const timerLocked = useRef<boolean>(false);

	const {
		disabled,
		hideTime,
		canStart,
		smartTurns,
		scramble,
		dnfTime,
		subTimerActions,
		solving,
		finalTime,
		timeStartedAt,
		spaceTimerStarted,
		inInspection,
		inspectionTimer,
	} = context;

	const inspectionOn = useSettings('inspection');
	const manualEntry = useSettings('manual_entry');
	const hideTimeWhenSolving = useSettings('hide_time_when_solving');
	const timerFontFamily = useSettings('timer_font_family');
	const timerType = useSettings('timer_type');
	const stackMatOn = timerType === 'stackmat';
	const ganTimerOn = timerType === 'gantimer';
	const zeroOutTimeAfterSolve = useSettings('zero_out_time_after_solve');

	const mobileMode = useGeneral('mobile_mode');
	let timerTimeSize = useSettings('timer_time_size');
	if (mobileMode) {
		timerTimeSize *= MOBILE_FONT_SIZE_MULTIPLIER;
	}

	const stopInterval = useCallback(() => {
		timerLocked.current = true;

		if (finalTime < 0) {
			setTime(0);
		} else {
			setTime(finalTime / 1000);
		}

		clearTimeout(timerCounter.current);
		timerCounter.current = null;
		timerLocked.current = false;

		if (zeroOutTimeAfterSolve) {
			setTime(0);
		}
	}, [finalTime, zeroOutTimeAfterSolve]);

	const startInterval = useCallback(() => {
		if (timerCounter.current) {
			return;
		}
		timerCounter.current = setInterval(() => {
			const now = new Date();

			if (timerLocked.current || (!solving && !finalTime) || !timeStartedAt) {
				return;
			}

			const runningTime = (now.getTime() - timeStartedAt.getTime()) / 1000;
			setTime(runningTime);
		}, 10);
	}, [solving, finalTime, timeStartedAt]);

	useEffect(() => {
		if (timerCounter.current && !solving && finalTime) {
			stopInterval();
		} else if (!timerCounter.current && timeStartedAt) {
			startInterval();
		}
		if (!solving && finalTime < 0) {
			setTime(0);
		}
	}, [solving, finalTime, timeStartedAt, stopInterval, startInterval])

	if (manualEntry && timerType !== 'smart') {
		return <Manual />;
	}

	let timeStr;
	let bottomInfo = null;
	if (inspectionOn) {
		bottomInfo = <StartInstructions>Inspection on</StartInstructions>;
	}

	if (inInspection) {
		if (inspectionTimer <= 2) {
			timeStr = '+2';
		} else {
			timeStr = String(inspectionTimer - 2);
		}
	} else {
		timeStr = getTimeString(time);
	}

	if (dnfTime && inInspection) {
		timeStr = 'DNF';
	}

	if (hideTimeWhenSolving && timeStartedAt) {
		timeStr = 'solve';
	}

	if (stackMatOn) {
		bottomInfo = <StackMat />;
	} else if (ganTimerOn) {
		bottomInfo = <GanTimer />;
	} else if (smartCubeSelected(context)) {
		if (preflightChecks(smartTurns, scramble)) {
			bottomInfo = (
				<StartInstructions>
					Turn <span>smart cube</span> to start
				</StartInstructions>
			);
		} else {
			bottomInfo = (
				<StartInstructions>
					Scramble <span>smart cube</span> to start
				</StartInstructions>
			);
		}
	}

	let body = (
		<>
			<h1
				style={{
					fontSize: timerTimeSize + 'px',
					fontFamily: timerFontFamily + ', monospace',
				}}
				className={b({
					gray: inInspection,
					green: canStart,
					orange: !!spaceTimerStarted,
					disabled,
				})}
			>
				{timeStr}
			</h1>
			<div className={bi()}>{bottomInfo}</div>
			{subTimerActions}
		</>
	);

	if (hideTime) {
		body = null;
	}

	return (
		<div
			className={b({
				smart: smartCubeSelected(context),
			})}
		>
			{body}
		</div>
	);
}
