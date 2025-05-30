import {Button} from '@/components/ui/button';
import './LayoutSelector.scss';
import {AlignBottomSimple, AlignLeftSimple, AlignRightSimple} from '@phosphor-icons/react/dist/ssr';
import React from 'react';
import {TimerLayoutPosition} from '../../../../lib/db/settings/query';
import {setSetting} from '../../../../lib/db/settings/update';
import {useSettings} from '../../../../lib/util/hooks/useSettings';
import block from '../../../../styles/bem';

const b = block('settings-layout-selector');

export default function LayoutSelector() {
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
				icon={<AlignLeftSimple weight="bold" />}
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
				icon={<AlignBottomSimple weight="bold" />}
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
				icon={<AlignRightSimple weight="bold" />}
			/>
		</div>
	);
}
