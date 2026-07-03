import React from 'react';
import {AlignRightSimple, AlignBottomSimple, AlignLeftSimple} from 'phosphor-react';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import Button from '@/components/common/Button';
import {TimerLayoutPosition} from '@/db/settings/query';

export default function LayoutSelector() {
	const timerLayout = useSettings('timer_layout');

	function selectLayout(timerLayout: TimerLayoutPosition) {
		setSetting('timer_layout', timerLayout);
	}

	return (
		<div className="flex flex-col items-end gap-[15px]">
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
