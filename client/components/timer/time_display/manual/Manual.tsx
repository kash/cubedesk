import React, {useContext, useRef, useState} from 'react';
import './Manual.scss';
import {convertTimeStringToSeconds} from '../../../../util/time';
import {TimerContext} from '../../Timer';
import block from '../../../../styles/bem';
import {resetScramble} from '../../helpers/scramble';
import {saveSolve} from '../../helpers/save';
import StartInstructions from '../start_instructions/StartInstructions';
import {useSettings} from '../../../../util/hooks/useSettings';
import {useElementListener} from '../../../../util/hooks/useListener';

const b = block('manual-time-entry');

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

	let input = (
		<input
			ref={manualInput}
			disabled={disabled}
			style={{
				fontSize: timerTimeSize + 'px',
				fontFamily: timerFontFamily,
			}}
			onChange={handleManualEntryChange}
			value={manualTime}
			className={b({
				error: error && !!manualTime,
			})}
		/>
	);

	if (hideTime) {
		input = null;
	}

	return (
		<div className={b('wrapper')}>
			{input}
			{hideTime ? null : (
				<StartInstructions>Manually enter time. Append "+2" or enter "DNF" if needed</StartInstructions>
			)}
		</div>
	);
}
