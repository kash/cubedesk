import React, {ReactNode, useContext, useEffect, useRef} from 'react';
import './TimerScramble.scss';
import {ArrowClockwise, Lock, PencilSimple} from '@phosphor-icons/react';
import TextareaAutosize from 'react-textarea-autosize';
import CopyText from '../../../common/copy_text/CopyText';
import {MOBILE_FONT_SIZE_MULTIPLIER} from '../../../../db/settings/update';
import {useGeneral} from '../../../../util/hooks/useGeneral';
import Button from '../../../common/button/Button';
import {TimerContext} from '../../Timer';
import block from '../../../../styles/bem';
import {resetScramble} from '../../helpers/scramble';
import SmartScramble from './smart_scramble/SmartScramble';
import {setTimerParam} from '../../helpers/params';
import {smartCubeSelected} from '../../helpers/util';
import {useSettings} from '../../../../util/hooks/useSettings';

const b = block('timer-scramble');

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

	useEffect(() => {
		resetScramble(context);
	}, [cubeType, sessionId]);

	function toggleScrambleLock() {
		setTimerParam('scrambleLocked', !scrambleLocked);
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
			className={b({edit: editScramble})}
		/>
	);

	// Is smart cube
	if (isSmart && !timeStartedAt && scramble) {
		scrambleBody = <SmartScramble />;
	}

	return (
		<div className={b()}>
			{notification}
			<div
				className={b('body', {
					smart: isSmart,
				})}
				style={{
					fontSize: timerScrambleSize + 'px',
					lineHeight: timerScrambleSize * 1.6 + 'px',
				}}
			>
				{scrambleBody}
			</div>
			<div className={b('actions', {focused: focusMode})}>
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
