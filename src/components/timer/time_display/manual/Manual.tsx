import React, {useCallback, useContext, useRef, useState} from 'react';
import './Manual.scss';
import {useElementListener} from '../../../../lib/util/hooks/useListener';
import {useSettings} from '../../../../lib/util/hooks/useSettings';
import {convertTimeStringToSeconds} from '../../../../lib/util/time';
import block from '../../../../styles/bem';
import {saveSolve} from '../../helpers/save';
import {resetScramble} from '../../helpers/scramble';
import {TimerContext} from '../../Timer';
import StartInstructions from '../start_instructions/StartInstructions';

const b = block('manual-time-entry');

export default function Manual() {
	const manualInput = useRef<HTMLInputElement>(null);

	const [manualTime, setManualTime] = useState('');
	const [error, setError] = useState(false);

	const context = useContext(TimerContext);
	const {scramble, disabled, hideTime} = context;

	const timerTimeSize = useSettings('timer_time_size');
	const timerFontFamily = useSettings('timer_font_family');
	const requirePeriodInManualTimeEntry = useSettings('require_period_in_manual_time_entry');

	const addManualTime = useCallback((e) => {
		if (e.key !== 'Enter' || error) {
			return;
		}

		e.preventDefault();

		try {
			const seconds = convertTimeStringToSeconds(manualTime, requirePeriodInManualTimeEntry);
			const endedAt = new Date().getTime();
			const startedAt = endedAt - seconds.timeMilli;

			saveSolve(
				context,
				seconds.timeMilli,
				scramble,
				startedAt,
				endedAt,
				seconds.dnf,
				seconds.plusTwo,
			);
			resetScramble(context);

			setManualTime('');
			setError(false);
		} catch (err) {
			// Do nothing
		}
	}, [error, manualTime, requirePeriodInManualTimeEntry, context, scramble]);

	useElementListener(manualInput.current, 'keypress', addManualTime, [manualInput?.current]);

	const handleManualEntryChange = useCallback((e) => {
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
	}, [requirePeriodInManualTimeEntry])

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
				<StartInstructions>
					Manually enter time. Append "+2" or enter "DNF" if needed
				</StartInstructions>
			)}
		</div>
	);
}
