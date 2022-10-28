import React from 'react';
import {useDispatch} from 'react-redux';
import './LayoutSelector.scss';
import {setSetting} from '../../../../db/settings/update';
import {useSettings} from '../../../../util/hooks/useSettings';
import block from '../../../../styles/bem';
import Button from '../../../common/button/Button';
import {TimerLayoutPosition} from '../../../../db/settings/query';

const b = block('settings-layout-selector');

export default function LayoutSelector() {
	const dispatch = useDispatch();
	const timerLayout = useSettings('timer_layout');

	function selectLayout(timerLayout: TimerLayoutPosition) {
		setSetting('timer_layout', timerLayout);
	}

	return (
		<div className={b()}>
			<Button
				onClick={() => {
					selectLayout('left');
				}}
				large
				glow={timerLayout === 'left'}
				primary={timerLayout === 'left'}
				gray
				text="Align Left"
				icon="ph-align-left-simple-bold"
			/>
			<Button
				onClick={() => {
					selectLayout('bottom');
				}}
				large
				glow={timerLayout === 'bottom'}
				primary={timerLayout === 'bottom'}
				gray
				text="Align Bottom"
				icon="ph-align-bottom-simple-bold"
			/>
			<Button
				onClick={() => {
					selectLayout('right');
				}}
				large
				primary={timerLayout === 'right'}
				glow={timerLayout === 'right'}
				gray
				text="Align Right"
				icon="ph-align-right-simple-bold"
			/>
		</div>
	);
}
