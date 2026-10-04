import {saveSolve} from '@/components/timer/helpers/save';
import {resetScramble} from '@/components/timer/helpers/scramble';
import StartInstructions from '@/components/timer/time-display/StartInstructions';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '@/db/settings/update';
import {cn} from '@/util/cn';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useElementListener} from '@/util/hooks/useListener';
import {useSettings} from '@/util/hooks/useSettings';
import {convertTimeStringToSeconds} from '@/util/time';
import {Check} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef, useState} from 'react';

// The manual entry input is a bit smaller than the regular timer on mobile so everything fits above the keyboard
const MOBILE_MANUAL_FONT_SIZE_MULTIPLIER = 0.7;

// Elements that should keep focus when tapped instead of handing it back to the manual entry input
const INTERACTIVE_SELECTOR =
	'button, a, input, textarea, select, label, [role="dialog"], [role="menu"], [role="listbox"]';
const OPEN_OVERLAY_SELECTOR =
	'[role="dialog"], [role="menu"], [role="listbox"], [role="alertdialog"]';

/**
 * The numeric keyboard on mobile has no colon, so digit-only times longer than 4 digits are read
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
	const {scramble, disabled, hideTime} = context;

	const mobileMode = useGeneral('mobile_mode');
	const timerTimeSize = useSettings('timer_time_size');
	const timerFontFamily = useSettings('timer_font_family');
	const requirePeriodInManualTimeEntry = useSettings('require_period_in_manual_time_entry');

	useElementListener(manualInput.current, 'keypress', handleKeyPress, [manualInput?.current]);

	// On mobile, keep the keyboard open so times can be entered back to back
	useEffect(() => {
		if (!mobileMode || hideTime || disabled) {
			return;
		}

		let refocusTimeout: ReturnType<typeof setTimeout> | null = null;

		function nothingElseFocused() {
			const active = document.activeElement;
			const nothingFocused = !active || active === document.body;
			return nothingFocused && !document.querySelector(OPEN_OVERLAY_SELECTOR);
		}

		function focusInput() {
			manualInput.current?.focus({preventScroll: true});
		}

		function handleBlur() {
			if (refocusTimeout) {
				clearTimeout(refocusTimeout);
			}
			// Wait for whatever was tapped (menus, dialogs) to take focus first
			refocusTimeout = setTimeout(() => {
				if (nothingElseFocused()) {
					focusInput();
				}
			}, 150);
		}

		// Tapping empty space should bring the keyboard back. iOS only opens the keyboard when focus
		// happens during a user gesture, so this is done synchronously in the click handler.
		function handleDocumentClick(e: MouseEvent) {
			const target = e.target as Element | null;
			if (target?.closest(INTERACTIVE_SELECTOR) || !nothingElseFocused()) {
				return;
			}
			focusInput();
		}

		const input = manualInput.current;
		focusInput();
		input?.addEventListener('blur', handleBlur);
		document.addEventListener('click', handleDocumentClick);

		return () => {
			if (refocusTimeout) {
				clearTimeout(refocusTimeout);
			}
			input?.removeEventListener('blur', handleBlur);
			document.removeEventListener('click', handleDocumentClick);
		};
	}, [mobileMode, hideTime, disabled]);

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

	function handleManualEntryChange(e) {
		const val = e.target.value;

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

	// Keeps the input focused (and the keyboard open) when tapping the mobile buttons
	function keepInputFocused(e: React.PointerEvent | React.MouseEvent) {
		e.preventDefault();
	}

	if (hideTime) {
		return null;
	}

	const fontSize = mobileMode
		? timerTimeSize * MOBILE_FONT_SIZE_MULTIPLIER * MOBILE_MANUAL_FONT_SIZE_MULTIPLIER
		: timerTimeSize;
	const showError = error && !!manualTime;

	const input: ReactNode = (
		<Input
			ref={manualInput}
			aria-label="Manual solve time"
			aria-invalid={showError}
			disabled={disabled}
			inputMode={mobileMode ? 'decimal' : undefined}
			enterKeyHint={mobileMode ? 'done' : undefined}
			autoComplete="off"
			autoCorrect="off"
			spellCheck={false}
			style={{
				fontSize: fontSize + 'px',
				fontFamily: timerFontFamily + ', monospace',
			}}
			onChange={handleManualEntryChange}
			value={manualTime}
			className={cn(
				"border-button text-text mx-auto my-[5px] box-border h-auto w-[95%] max-w-[600px] rounded-lg border-2 bg-transparent px-0.5 py-0 text-center font-['Roboto_Mono',monospace] font-medium transition-all duration-100 ease-in-out disabled:opacity-30",
				{
					'border-error': showError,
					'my-0 w-full py-1 leading-tight': mobileMode,
				},
			)}
		/>
	);

	if (mobileMode) {
		const saveDisabled =
			disabled || (showError && !(dnf && !manualTime.trim())) || (!manualTime && !dnf);

		return (
			<div className="box-border flex w-full flex-col gap-2 px-4">
				{input}
				<div className="grid w-full grid-cols-3 gap-2">
					<Button
						variant={plusTwo ? 'default' : 'outline'}
						size="sm"
						disabled={disabled}
						aria-pressed={plusTwo}
						onPointerDown={keepInputFocused}
						onMouseDown={keepInputFocused}
						onClick={() => setPlusTwo(!plusTwo)}
					>
						+2
					</Button>
					<Button
						variant={dnf ? 'default' : 'outline'}
						size="sm"
						disabled={disabled}
						aria-pressed={dnf}
						onPointerDown={keepInputFocused}
						onMouseDown={keepInputFocused}
						onClick={() => setDnf(!dnf)}
					>
						DNF
					</Button>
					<Button
						variant="default"
						size="sm"
						disabled={saveDisabled}
						aria-label="Save time"
						onPointerDown={keepInputFocused}
						onMouseDown={keepInputFocused}
						onClick={addManualTime}
					>
						<Check weight="bold" />
						Save
					</Button>
				</div>
			</div>
		);
	}

	return (
		<div>
			{input}
			<StartInstructions>
				Manually enter time. Append "+2" or enter "DNF" if needed
			</StartInstructions>
		</div>
	);
}
