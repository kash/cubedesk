import {Button} from '@/components/ui/button';
import {TimerLayoutPosition} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import {AlignBottomSimple, AlignLeftSimple, AlignRightSimple} from 'phosphor-react';
import React from 'react';

export default function LayoutSelector() {
	const timerLayout = useSettings('timer_layout');

	function selectLayout(timerLayout: TimerLayoutPosition) {
		setSetting('timer_layout', timerLayout);
	}

	return (
		<div className="flex flex-col items-end gap-[15px]">
			<Button
				variant={timerLayout === 'left' ? 'default' : 'secondary'}
				onClick={() => {
					selectLayout('left');
				}}
				size="lg"
			>
				{'Align Left'}
				<AlignLeftSimple weight="bold" />
			</Button>
			<Button
				variant={timerLayout === 'bottom' ? 'default' : 'secondary'}
				onClick={() => {
					selectLayout('bottom');
				}}
				size="lg"
			>
				{'Align Bottom'}
				<AlignBottomSimple weight="bold" />
			</Button>
			<Button
				variant={timerLayout === 'right' ? 'default' : 'secondary'}
				onClick={() => {
					selectLayout('right');
				}}
				size="lg"
			>
				{'Align Right'}
				<AlignRightSimple weight="bold" />
			</Button>
		</div>
	);
}
