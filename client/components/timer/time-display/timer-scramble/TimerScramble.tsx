import React, {ReactNode, useContext, useEffect, useRef} from 'react';
import classNames from 'classnames';
import {ArrowClockwise, Lock, PencilSimple} from 'phosphor-react';
import TextareaAutosize from 'react-textarea-autosize';
import CopyText from '@/components/common/copy_text/CopyText';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import Button from '@/components/common/button/Button';
import {TimerContext} from '@/components/timer/Timer';
import {resetScramble} from '@/components/timer/helpers/scramble';
import SmartScramble from '@/components/timer/time-display/timer-scramble/SmartScramble';
import {setTimerParam} from '@/components/timer/helpers/params';
import {smartCubeSelected} from '@/components/timer/helpers/util';
import {useSettings} from '@/util/hooks/useSettings';
import {setSetting} from '@/db/settings/update';

export default function TimerScramble() {
	const context = useContext(TimerContext);

	const scrambleInput = useRef(null);
	const mobileMode = useGeneral('mobile_mode');
	const sessionId = useSettings('session_id');
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
		if (lockedScramble && !timeStartedAt) {
			setTimerParam('scramble', lockedScramble);
			setTimerParam('scrambleLocked', true);
		} else {
			resetScramble(context);
		}
	}, [cubeType, sessionId]);

	function toggleScrambleLock() {
		if (editScramble) {
			setTimerParam('editScramble', false);
		}
		setTimerParam('scrambleLocked', !scrambleLocked);

		const lockedScramble = scrambleLocked ? null : scramble;

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

	let scrambleBody: ReactNode = (
		<TextareaAutosize
			onChange={handleScrambleChange}
			value={scramble}
			disabled={!editScramble}
			minRows={1}
			placeholder={hideScramble ? '' : 'scramble'}
			ref={scrambleInput}
			className={classNames(
				'-z-[100] m-auto table w-[calc(100%_-_20px)] min-w-[100px] resize-none box-border rounded-[7px] border-2 border-transparent bg-transparent p-[7px] text-center ![color:inherit] opacity-100 transition-all duration-100 ease-in-out [font-family:inherit] [line-height:inherit] [text-shadow:0_1px_7px_rgba(0,0,0,0.2)] [-webkit-text-fill-color:rgb(var(--text-color))]',
				editScramble && '!z-[100] !border-text/20'
			)}
		/>
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
				timeStartedAt && 'pointer-events-none opacity-30'
			)}
		>
			{notification}
			<div
				className={classNames(
					"mb-[5px] flex w-full max-w-[1200px] flex-row items-center justify-center font-['Roboto_Mono',monospace] !text-text",
					isSmart && 'w-auto'
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
					onClick={toggleEditScramble}
					title="Edit scramble"
					white={!isSmart && editScramble}
					transparent
					disabled={isSmart || scrambleLocked}
					icon={<PencilSimple weight="bold" />}
				/>
				<Button
					transparent
					onClick={toggleScrambleLock}
					title="Lock scramble"
					white={scrambleLocked}
					icon={<Lock weight="bold" />}
				/>
				<CopyText
					text={scramble}
					buttonProps={{
						gray: false,
						transparent: true,
					}}
				/>
				<Button
					disabled={scrambleLocked}
					onClick={() => resetScramble(context)}
					transparent
					title="Reset scramble"
					icon={<ArrowClockwise weight="bold" />}
				/>
			</div>
		</div>
	);
}
