import CopyText from '@/components/common/CopyText';
import {getStore} from '@/components/store';
import {setTimerParam} from '@/components/timer/helpers/params';
import {resetScramble} from '@/components/timer/helpers/scramble';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import SmartScramble from '@/components/timer/time-display/timer-scramble/SmartScramble';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '@/db/settings/update';
import {setSetting} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSettings} from '@/util/hooks/useSettings';
import classNames from 'classnames';
import {ArrowClockwise, Lock, PencilSimple} from 'phosphor-react';
import React, {ReactNode, useEffect, useRef} from 'react';

export default function TimerScramble() {
	const context = useTimerContext();

	const scrambleInput = useRef<HTMLTextAreaElement | null>(null);
	const mobileMode = useGeneral('mobile_mode');
	const savedSessionId = useSettings('session_id');
	const sessionId = context.demoMode ? 'demo' : savedSessionId;
	const initialScramble = useRef(context.demoMode ? context.scramble : '');
	const cubeType = context.cubeType;
	let timerScrambleSize = useSettings('timer_scramble_size');

	const focusMode = context.focusMode;
	if (mobileMode) {
		timerScrambleSize *= MOBILE_FONT_SIZE_MULTIPLIER;
	}

	const {editScramble, scrambleLocked, notification, hideScramble, timeStartedAt} = context;
	let scramble = context.scramble;
	const lockedScramble = useSettings('locked_scramble');

	useEffect(() => {
		const keepInitialScramble = !!initialScramble.current && cubeType === '333';
		initialScramble.current = '';
		if (lockedScramble && !timeStartedAt) {
			setTimerParam('scramble', lockedScramble);
			setTimerParam('scrambleLocked', true);
		} else if (!keepInitialScramble) {
			resetScramble(context);
		}
	}, [cubeType, sessionId]);

	useEffect(() => {
		// Fast Refresh can reset the parent timer after the initialization effect.
		if (!getStore().getState().timer.scramble && !editScramble && !timeStartedAt) {
			if (lockedScramble) {
				setTimerParam('scramble', lockedScramble);
			} else {
				resetScramble(context);
			}
		}
	}, [context.scramble, editScramble, timeStartedAt, lockedScramble]);

	function toggleScrambleLock() {
		if (editScramble) {
			setTimerParam('editScramble', false);
		}
		setTimerParam('scrambleLocked', !scrambleLocked);

		const lockedScramble = scrambleLocked ? null : (scramble ?? null);

		setSetting('locked_scramble', lockedScramble);
	}

	function toggleEditScramble() {
		setTimerParam('editScramble', !editScramble);

		setTimeout(() => {
			if (editScramble && scrambleInput.current) {
				scrambleInput.current.focus();
			}
		});
	}

	function handleScrambleChange(e) {
		e.preventDefault();
		setTimerParam('scramble', e.target.value);
	}

	const isSmart = smartCubeSelected(context);

	if (hideScramble) {
		scramble = '';
	}

	const scrambleFieldClasses =
		'box-border w-full min-w-0 rounded-[7px] border-2 border-transparent bg-transparent p-[7px] text-center [font-family:inherit] [font-size:inherit] [line-height:inherit]';
	let scrambleBody: ReactNode = (
		<div className="relative m-auto w-[calc(100%_-_20px)] min-w-[100px] [font:inherit]">
			{/* Match the textarea's wrapping and box model before JavaScript runs. */}
			<div
				aria-hidden="true"
				className={`${scrambleFieldClasses} invisible whitespace-pre-wrap [overflow-wrap:break-word]`}
			>
				{`${scramble || (hideScramble ? '' : 'scramble')} `}
			</div>
			<textarea
				onChange={handleScrambleChange}
				value={scramble}
				disabled={!editScramble}
				rows={1}
				aria-label="Scramble"
				placeholder={hideScramble ? '' : 'scramble'}
				ref={scrambleInput}
				className={classNames(
					scrambleFieldClasses,
					'absolute inset-0 h-full resize-none overflow-hidden ![color:inherit] opacity-100 transition-colors duration-100 ease-in-out [-webkit-text-fill-color:rgb(var(--text-color))] [text-shadow:0_1px_7px_rgba(0,0,0,0.2)]',
					editScramble && '!border-text/20 !z-[100]',
				)}
			/>
		</div>
	);

	// Is smart cube
	if (isSmart && !timeStartedAt && scramble) {
		scrambleBody = <SmartScramble />;
	}

	return (
		<div
			className={classNames(
				'relative flex w-full flex-col items-center transition-opacity duration-100 ease-in-out',
				timeStartedAt && (focusMode || mobileMode) && 'hidden',
				timeStartedAt && 'pointer-events-none opacity-10',
			)}
		>
			{notification}
			<div
				className={classNames(
					"!text-text mb-[5px] flex w-full max-w-[1200px] flex-row items-center justify-center font-['Roboto_Mono',monospace]",
					isSmart && 'w-auto',
				)}
				style={{
					fontSize: timerScrambleSize + 'px',
					lineHeight: timerScrambleSize * 1.6 + 'px',
				}}
			>
				{scrambleBody}
			</div>
			<div className={classNames('mt-[5px] flex flex-row gap-2.5', focusMode && '!hidden')}>
				<Button
					variant={!isSmart && editScramble ? 'default' : 'ghost'}
					onClick={toggleEditScramble}
					title="Edit scramble"
					disabled={isSmart || scrambleLocked}
					size="icon"
					aria-label="Edit scramble"
					aria-pressed={!isSmart && editScramble}
				>
					<PencilSimple weight="bold" />
				</Button>
				<Button
					variant={scrambleLocked ? 'default' : 'ghost'}
					onClick={toggleScrambleLock}
					title="Lock scramble"
					size="icon"
					aria-label="Lock scramble"
					aria-pressed={scrambleLocked}
				>
					<Lock weight="bold" />
				</Button>
				<CopyText
					text={scramble ?? ''}
					buttonProps={{
						variant: 'ghost',
					}}
				/>
				<Button
					variant="ghost"
					disabled={scrambleLocked}
					onClick={() => resetScramble(context)}
					title="Reset scramble"
					size="icon"
					aria-label="Reset scramble"
				>
					<ArrowClockwise weight="bold" />
				</Button>
			</div>
		</div>
	);
}
