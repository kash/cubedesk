import React, {useContext, useRef, useState, ReactNode} from 'react';
import classNames from 'classnames';
import {convertTimeStringToSeconds} from '@/util/time';
import {TimerContext} from '@/components/timer/Timer';
import {resetScramble} from '@/components/timer/helpers/scramble';
import {saveSolve} from '@/components/timer/helpers/save';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import {useSettings} from '@/util/hooks/useSettings';
import {useElementListener} from '@/util/hooks/useListener';

export default function Manual() {
	const manualInput = useRef<HTMLInputElement>();

	const [manualTime, setManualTime] = useState('');
	const [error, setError] = useState(false);

	const context = useContext(TimerContext);
	const {scramble, disabled, hideTime} = context;

	const timerTimeSize = useSettings('timer_time_size');
	const timerFontFamily = useSettings('timer_font_family');
	const requirePeriodInManualTimeEntry = useSettings('require_period_in_manual_time_entry');

	useElementListener(manualInput.current, 'keypress', addManualTime, [manualInput?.current]);

	function addManualTime(e) {
		if (e.key !== 'Enter' || error) {
			return;
		}

		e.preventDefault();

		try {
			const seconds = convertTimeStringToSeconds(manualTime, requirePeriodInManualTimeEntry);
			const endedAt = new Date().getTime();
			const startedAt = endedAt - seconds.timeMilli;

			saveSolve(context, seconds.timeMilli, scramble, startedAt, endedAt, seconds.dnf, seconds.plusTwo);
			resetScramble(context);

			setManualTime('');
			setError(false);
		} catch (err) {
			// Do nothing
		}
	}

	function handleManualEntryChange(e) {
		const val = e.target.value;

		let manualEntryErr = false;
		let time;
		try {
			time = convertTimeStringToSeconds(val, requirePeriodInManualTimeEntry);

			if (time.time <= 0 && !time.dnf) {
				manualEntryErr = true;
			}
		} catch (err) {
			manualEntryErr = true;
		}

		setManualTime(val);
		setError(manualEntryErr);
	}

	let input: ReactNode = (
		<input
			ref={manualInput}
			disabled={disabled}
			style={{
				fontSize: timerTimeSize + 'px',
				fontFamily: timerFontFamily,
			}}
			onChange={handleManualEntryChange}
			value={manualTime}
			className={classNames(
				"mx-auto my-[5px] box-border w-[95%] max-w-[600px] rounded-lg border-2 border-button bg-transparent px-0.5 py-0 text-center font-['Roboto_Mono',monospace] font-medium text-text transition-all duration-100 ease-in-out disabled:opacity-30",
				error && !!manualTime && '!border-error'
			)}
		/>
	);

	if (hideTime) {
		input = null;
	}

	return (
		<div>
			{input}
			{hideTime ? null : (
				<StartInstructions>Manually enter time. Append "+2" or enter "DNF" if needed</StartInstructions>
			)}
		</div>
	);
}
