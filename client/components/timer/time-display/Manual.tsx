import {saveSolve} from '@/components/timer/helpers/save';
import {resetScramble} from '@/components/timer/helpers/scramble';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '@/db/settings/update';
import {cn} from '@/util/cn';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useElementListener, useWindowListener} from '@/util/hooks/useListener';
import {useSettings} from '@/util/hooks/useSettings';
import {convertTimeStringToSeconds} from '@/util/time';
import {Backspace} from 'phosphor-react';
import React, {ReactNode, useRef, useState} from 'react';
import {createPortal} from 'react-dom';

// The manual entry display is a bit smaller than the regular timer on mobile so everything fits above the numpad
const MOBILE_MANUAL_FONT_SIZE_MULTIPLIER = 0.7;

const NUMPAD_DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

/**
 * Typing a colon on the numpad is optional, so digit-only times longer than 4 digits are read
 * like a stackmat display (e.g. "12345" -> "1:23.45").
 */
function parseManualTime(value: string, requirePeriod: boolean) {
	const trimmed = value.trim();
	if (!requirePeriod && /^\d{5,6}$/.test(trimmed)) {
		const minutes = trimmed.slice(0, -4);
		const seconds = trimmed.slice(-4, -2);
		const centiseconds = trimmed.slice(-2);
		return convertTimeStringToSeconds(`${minutes}:${seconds}.${centiseconds}`, requirePeriod);
	}

	return convertTimeStringToSeconds(value, requirePeriod);
}

export default function Manual() {
	const manualInput = useRef<HTMLInputElement>(null);

	const [manualTime, setManualTime] = useState('');
	const [error, setError] = useState(false);
	const [plusTwo, setPlusTwo] = useState(false);
	const [dnf, setDnf] = useState(false);

	const context = useTimerContext();
	const {scramble, disabled, hideTime, mobileNumpadSlot} = context;

	const mobileMode = useGeneral('mobile_mode');
	const timerTimeSize = useSettings('timer_time_size');
	const timerFontFamily = useSettings('timer_font_family');
	const requirePeriodInManualTimeEntry = useSettings('require_period_in_manual_time_entry');

	useElementListener(manualInput.current, 'keypress', handleKeyPress, [manualInput?.current]);

	// The on-screen numpad replaces the native keyboard on mobile, but hardware keyboards should still work
	useWindowListener('keydown', handleMobileKeyDown);

	function handleKeyPress(e) {
		if (e.key !== 'Enter') {
			return;
		}

		e.preventDefault();
		addManualTime();
	}

	function addManualTime() {
		if (error && !(dnf && !manualTime.trim())) {
			return;
		}

		let timeMilli = -1;
		let solveDnf = dnf;
		let solvePlusTwo = plusTwo;

		try {
			const seconds = parseManualTime(manualTime, requirePeriodInManualTimeEntry);
			timeMilli = seconds.timeMilli;
			solveDnf = solveDnf || seconds.dnf;
			solvePlusTwo = solvePlusTwo || seconds.plusTwo;
		} catch (err) {
			// A DNF can be saved without a time
			if (!dnf) {
				return;
			}
		}

		const endedAt = new Date().getTime();
		const startedAt = endedAt - Math.max(timeMilli, 0);

		saveSolve(context, timeMilli, scramble ?? '', startedAt, endedAt, solveDnf, solvePlusTwo);
		// The context still contains the count from before saveSolve.
		resetScramble({...context, sessionSolveCount: context.sessionSolveCount + 1});

		setManualTime('');
		setError(false);
		setPlusTwo(false);
		setDnf(false);
	}

	function handleMobileKeyDown(e: KeyboardEvent) {
		const target = e.target as HTMLElement | null;
		if (
			!mobileMode ||
			disabled ||
			e.metaKey ||
			e.ctrlKey ||
			e.altKey ||
			target?.closest('input, textarea, select, [contenteditable="true"]') ||
			document.querySelector('[role="dialog"], [role="alertdialog"], [role="menu"]')
		) {
			return;
		}

		if (/^[\d.:]$/.test(e.key)) {
			e.preventDefault();
			updateManualTime(manualTime + e.key);
		} else if (e.key === 'Backspace') {
			e.preventDefault();
			updateManualTime(manualTime.slice(0, -1));
		} else if (e.key === 'Enter') {
			e.preventDefault();
			addManualTime();
		}
	}

	function handleManualEntryChange(e) {
		updateManualTime(e.target.value);
	}

	function updateManualTime(val: string) {
		let manualEntryErr = false;
		let time;
		try {
			time = parseManualTime(val, requirePeriodInManualTimeEntry);

			if (time.time <= 0 && !time.dnf) {
				manualEntryErr = true;
			}
		} catch (err) {
			manualEntryErr = true;
		}

		setManualTime(val);
		setError(manualEntryErr);
	}

	if (hideTime) {
		return null;
	}

	const fontSize = mobileMode
		? timerTimeSize * MOBILE_FONT_SIZE_MULTIPLIER * MOBILE_MANUAL_FONT_SIZE_MULTIPLIER
		: timerTimeSize;
	const showError = error && !!manualTime;

	const inputClassName = cn(
		"border-button text-text mx-auto my-[5px] box-border h-auto w-[95%] max-w-[600px] rounded-lg border-2 bg-transparent px-0.5 py-0 text-center font-['Roboto_Mono',monospace] font-medium transition-all duration-100 ease-in-out disabled:opacity-30",
		{
			'border-error focus-visible:border-error': showError,
		},
	);
	const inputStyle = {
		fontSize: fontSize + 'px',
		fontFamily: timerFontFamily + ', monospace',
	};

	if (mobileMode) {
		// Shown instead of a real input so the native keyboard never opens
		const display = (
			<div
				role="textbox"
				aria-label="Manual solve time"
				aria-readonly
				aria-invalid={showError}
				aria-disabled={disabled}
				style={{...inputStyle, minHeight: fontSize * 1.25 + 8 + 'px'}}
				className={cn(
					inputClassName,
					'my-0 flex w-full items-center justify-center py-1 leading-tight',
					{
						'opacity-30': disabled,
					},
				)}
			>
				{manualTime}
			</div>
		);

		const numpad = (
			<Numpad
				disabled={disabled}
				plusTwo={plusTwo}
				dnf={dnf}
				onKey={(key) => updateManualTime(manualTime + key)}
				onBackspace={() => updateManualTime(manualTime.slice(0, -1))}
				onTogglePlusTwo={() => setPlusTwo(!plusTwo)}
				onToggleDnf={() => setDnf(!dnf)}
				onSubmit={addManualTime}
			/>
		);

		return (
			<div className="box-border w-full px-4">
				{display}
				{mobileNumpadSlot ? createPortal(numpad, mobileNumpadSlot) : numpad}
			</div>
		);
	}

	const input: ReactNode = (
		<Input
			ref={manualInput}
			aria-label="Manual solve time"
			aria-invalid={showError}
			disabled={disabled}
			autoComplete="off"
			autoCorrect="off"
			spellCheck={false}
			style={inputStyle}
			onChange={handleManualEntryChange}
			value={manualTime}
			className={inputClassName}
		/>
	);

	return (
		<div>
			{input}
			<StartInstructions>
				Manually enter time. Append "+2" or enter "DNF" if needed
			</StartInstructions>
		</div>
	);
}

interface NumpadProps {
	disabled?: boolean;
	plusTwo: boolean;
	dnf: boolean;
	onKey: (key: string) => void;
	onBackspace: () => void;
	onTogglePlusTwo: () => void;
	onToggleDnf: () => void;
	onSubmit: () => void;
}

function Numpad(props: NumpadProps) {
	const {disabled, plusTwo, dnf, onKey, onBackspace, onTogglePlusTwo, onToggleDnf, onSubmit} =
		props;

	const keyClass = 'h-12 text-xl font-medium';

	return (
		<div className="box-border grid w-full grid-cols-4 gap-2 px-4">
			{NUMPAD_DIGITS.slice(0, 3).map((digit) => (
				<Button
					key={digit}
					variant="outline"
					className={keyClass}
					disabled={disabled}
					onClick={() => onKey(digit)}
				>
					{digit}
				</Button>
			))}
			<Button
				variant="outline"
				className={keyClass}
				disabled={disabled}
				aria-label="Backspace"
				onClick={onBackspace}
			>
				<Backspace className="size-6" />
			</Button>
			{NUMPAD_DIGITS.slice(3, 6).map((digit) => (
				<Button
					key={digit}
					variant="outline"
					className={keyClass}
					disabled={disabled}
					onClick={() => onKey(digit)}
				>
					{digit}
				</Button>
			))}
			<Button
				variant={plusTwo ? 'default' : 'outline'}
				className={keyClass}
				disabled={disabled}
				aria-pressed={plusTwo}
				onClick={onTogglePlusTwo}
			>
				+2
			</Button>
			{NUMPAD_DIGITS.slice(6, 9).map((digit) => (
				<Button
					key={digit}
					variant="outline"
					className={keyClass}
					disabled={disabled}
					onClick={() => onKey(digit)}
				>
					{digit}
				</Button>
			))}
			<Button
				variant={dnf ? 'default' : 'outline'}
				className={keyClass}
				disabled={disabled}
				aria-pressed={dnf}
				onClick={onToggleDnf}
			>
				DNF
			</Button>
			<Button
				variant="outline"
				className={keyClass}
				disabled={disabled}
				onClick={() => onKey(':')}
			>
				:
			</Button>
			<Button
				variant="outline"
				className={keyClass}
				disabled={disabled}
				onClick={() => onKey('0')}
			>
				0
			</Button>
			<Button
				variant="outline"
				className={keyClass}
				disabled={disabled}
				onClick={() => onKey('.')}
			>
				.
			</Button>
			<Button
				className={keyClass}
				disabled={disabled}
				aria-label="Save time"
				onClick={onSubmit}
			>
				Enter
			</Button>
		</div>
	);
}
