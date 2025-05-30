import {Button} from '@/components/ui/button';
import {setSetting} from '@/lib/db/settings/update';
import {useGeneral} from '@/lib/util/hooks/useGeneral';
import {useSettings} from '@/lib/util/hooks/useSettings';
import './TimerFooter.scss';
import block from '@/styles/bem';
import {CaretDown, CaretUp} from '@phosphor-icons/react/dist/ssr';
import React, {useCallback, useContext} from 'react';
import {TimerContext} from '../Timer';
import TimerModule from './TimerModule';

const b = block('timer-footer');

export default function TimerFooter() {
	const context = useContext(TimerContext);
	const {timerLayout} = context;

	// Fetch modules from settings or set defaults (if not set)
	const mobileMode = useGeneral('mobile_mode');
	const hideMobileTimerFooter = useSettings('hide_mobile_timer_footer');

	const customModules = context.timerCustomFooterModules;
	const timerModules = useSettings('timer_modules');
	const timerModuleCount = useSettings('timer_module_count');

	const toggleMobileHideButton = useCallback(() => {
		setSetting('hide_mobile_timer_footer', !hideMobileTimerFooter);
	}, [hideMobileTimerFooter]);

	let mobileHideButton = null;
	if (mobileMode) {
		mobileHideButton = (
			<div className={b('mobile-hide-button')}>
				<Button variant="outline" onClick={toggleMobileHideButton}>
					{hideMobileTimerFooter ? (
						<CaretUp weight="bold" />
					) : (
						<CaretDown weight="bold" />
					)}
					{hideMobileTimerFooter ? 'Show footer' : 'Hide footer'}
				</Button>
			</div>
		);
	}

	const modules = [];
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

	let body = (
		<div className={b('body', {mobile: mobileMode, layout: timerLayout})}>{modules}</div>
	);
	if (mobileMode && hideMobileTimerFooter) {
		body = null;
	}

	return (
		<div className={b({layout: timerLayout})}>
			{mobileHideButton}
			{body}
		</div>
	);
}
