import React, {useContext, useEffect, useRef, useState} from 'react';
import classNames from 'classnames';
import {getTimeString} from '@/util/time';
import Manual from '@/components/timer/time-display/Manual';
import {preflightChecks} from '@/components/timer/smart-cube/preflight';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import {TimerContext} from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import StackMat from '@/components/timer/time-display/stackmat/StackMat';
import GanTimer from '@/components/timer/time-display/GanTimer';

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

	useEffect(() => {
		if (timerCounter.current && !solving && finalTime) {
			stopInterval();
		} else if (!timerCounter.current && timeStartedAt) {
			startInterval();
		} if (!solving && finalTime < 0) {
			setTime(0);
		}
	}, [solving, finalTime, timeStartedAt]);

	function stopInterval() {
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
	}

	function startInterval() {
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
	}

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
				style={{fontSize: timerTimeSize + 'px', fontFamily: timerFontFamily + ', monospace'}}
				className={classNames(
					"m-0 mb-2.5 font-['Roboto_Mono',monospace] font-medium text-text [text-shadow:0_1px_7px_rgba(0,0,0,0.2)]",
					mobileMode && 'select-none',
					inInspection && 'text-text/60',
					canStart && '!text-success',
					spaceTimerStarted && !canStart && '!text-warning',
					disabled && 'opacity-20'
				)}
			>
				{timeStr}
			</h1>
			<div className={classNames(context.timeStartedAt && 'pointer-events-none opacity-30')}>{bottomInfo}</div>
			{subTimerActions}
		</>
	);

	if (hideTime) {
		body = null;
	}

	return (
		<div
			className={classNames(
				'relative z-[1] flex w-full flex-col items-center justify-center p-0',
				smartCubeSelected(context) && 'w-1/2',
				mobileMode &&
					'mt-[50px] box-border select-none rounded-[5px] border-[5px] border-dashed border-button pb-[3vh]',
				context.focusMode && 'h-screen !pt-0'
			)}
		>
			{body}
		</div>
	);
}
