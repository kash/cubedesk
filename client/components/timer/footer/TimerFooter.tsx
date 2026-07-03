import React, {useContext, ReactNode} from 'react';
import classNames from 'classnames';
import {CaretUp, CaretDown} from 'phosphor-react';
import {setSetting} from '@/db/settings/update';
import {TimerContext} from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {useGeneral} from '@/util/hooks/useGeneral';
import Button from '@/components/common/Button';
import TimerModule from '@/components/timer/footer/TimerModule';

export default function TimerFooter() {
	const context = useContext(TimerContext);
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
				<Button
					text={hideMobileTimerFooter ? 'Show footer' : 'Hide footer'}
					icon={hideMobileTimerFooter ? <CaretUp /> : <CaretDown />}
					onClick={toggleMobileHideButton}
					white
					flat
				/>
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
				'bg-module/80 box-border h-[inherit] rounded-[15px]',
				timerLayout === 'bottom' &&
					'grid auto-rows-[0] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-rows-[auto] overflow-hidden',
				(timerLayout === 'left' || timerLayout === 'right') &&
					'grid !grid-cols-[1fr] !grid-rows-[repeat(3,minmax(0,1fr))] [@media(max-height:600px)]:!grid-rows-[repeat(1,minmax(0,1fr))] [@media(max-height:850px)]:!grid-rows-[repeat(2,minmax(0,1fr))]',
				mobileMode && 'h-[270px] gap-[7px] overflow-visible rounded',
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
				'box-border h-full px-[15px] pt-0 pb-0',
				(timerLayout === 'left' || timerLayout === 'right') &&
					'h-[calc(100vh_-_70px)] px-0 pb-2.5',
				context.timeStartedAt && 'pointer-events-none opacity-30',
			)}
		>
			{mobileHideButton}
			{body}
		</div>
	);
}
