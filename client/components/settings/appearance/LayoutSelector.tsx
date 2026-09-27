import {useTranslation} from 'react-i18next';
import {Button} from '@/components/ui/button';
import {TimerLayoutPosition} from '@/db/settings/query';
import {setSetting} from '@/db/settings/update';
import {useSettings} from '@/util/hooks/useSettings';
import {AlignBottomSimple, AlignLeftSimple, AlignRightSimple} from 'phosphor-react';
import React from 'react';

export default function LayoutSelector() {
	const {t} = useTranslation();
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
				{t('settings.layout.alignLeft')}
				<AlignLeftSimple weight="bold" />
			</Button>
			<Button
				variant={timerLayout === 'bottom' ? 'default' : 'secondary'}
				onClick={() => {
					selectLayout('bottom');
				}}
				size="lg"
			>
				{t('settings.layout.alignBottom')}
				<AlignBottomSimple weight="bold" />
			</Button>
			<Button
				variant={timerLayout === 'right' ? 'default' : 'secondary'}
				onClick={() => {
					selectLayout('right');
				}}
				size="lg"
			>
				{t('settings.layout.alignRight')}
				<AlignRightSimple weight="bold" />
			</Button>
		</div>
	);
}
