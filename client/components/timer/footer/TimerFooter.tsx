import DemoWarning from '@/components/layout/wrapper/DemoWarning';
import TimerModule from '@/components/timer/footer/TimerModule';
import {useTimerContext} from '@/components/timer/Timer';
import {Button} from '@/components/ui/button';
import {setSetting} from '@/db/settings/update';
import {useGeneral} from '@/util/hooks/useGeneral';
import {useSettings} from '@/util/hooks/useSettings';
import classNames from 'classnames';
import {CaretDown, CaretUp} from 'phosphor-react';
import React, {ReactNode} from 'react';

export default function TimerFooter() {
	const context = useTimerContext();
	const {timerLayout} = context;

	// Fetch modules from settings or set defaults (if not set)
	const mobileMode = useGeneral('mobile_mode');
	const hideMobileTimerFooter = useSettings('hide_mobile_timer_footer');

	const customModules = context.timerCustomFooterModules;
	const timerModules = useSettings('timer_modules');
	const timerModuleCount = useSettings('timer_module_count');

	function toggleMobileHideButton() {
		setSetting('hide_mobile_timer_footer', !hideMobileTimerFooter);
	}

	let mobileHideButton: ReactNode = null;
	if (mobileMode) {
		mobileHideButton = (
			<div className="flex h-[30px] w-full items-center justify-end opacity-70">
				<Button variant="ghost" onClick={toggleMobileHideButton} size="sm">
					{hideMobileTimerFooter ? 'Show footer' : 'Hide footer'}
					{hideMobileTimerFooter ? <CaretUp /> : <CaretDown />}
				</Button>
			</div>
		);
	}

	const modules: ReactNode[] = [];
	if (customModules && customModules?.length) {
		for (let i = 0; i < customModules.length; i++) {
			const customModule = customModules[i];
			const moduleType = customModule.moduleType;

			modules.push(
				<TimerModule key={`${i}-${moduleType}`} index={i} customOptions={customModule} />,
			);
		}
	} else {
		for (let i = 0; i < timerModuleCount; i++) {
			const moduleType = timerModules[i % timerModules.length];
			modules.push(
				<TimerModule key={`${i}-${moduleType}`} index={i} moduleType={moduleType} />,
			);
		}
	}

	let body: ReactNode = (
		<div
			className={classNames(
				'bg-module border-tmo-module/10 divide-tmo-module/10 box-border h-[inherit] overflow-hidden rounded-[15px] border',
				timerLayout === 'bottom' &&
					'grid auto-rows-[0] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-[auto] divide-x',
				(timerLayout === 'left' || timerLayout === 'right') &&
					'grid !grid-cols-[1fr] !grid-rows-[repeat(3,minmax(0,1fr))] divide-y [@media(max-height:600px)]:!grid-rows-[repeat(1,minmax(0,1fr))] [@media(max-height:850px)]:!grid-rows-[repeat(2,minmax(0,1fr))]',
				mobileMode && 'h-[270px] !divide-x-0 !divide-y-0 !overflow-visible rounded',
			)}
		>
			{modules}
		</div>
	);
	if (mobileMode && hideMobileTimerFooter) {
		body = null;
	}

	return (
		<div
			className={classNames(
				'relative box-border h-full px-[15px] pt-0 pb-0',
				(timerLayout === 'left' || timerLayout === 'right') &&
					'h-[calc(100vh_-_70px)] px-0 pb-2.5',
				context.timeStartedAt && 'pointer-events-none opacity-10',
			)}
		>
			{timerLayout === 'bottom' && (
				<div className="absolute bottom-[calc(100%+16px)] left-0 w-full px-4">
					<DemoWarning />
				</div>
			)}
			{mobileHideButton}
			{body}
		</div>
	);
}
