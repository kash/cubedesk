import React, {useContext} from 'react';
import {CaretUp, CaretDown} from 'phosphor-react';
import {setSetting} from '../../../db/settings/update';
import {TimerContext} from '../Timer';
import './TimerFooter.scss';
import block from '../../../styles/bem';
import {useSettings} from '../../../util/hooks/useSettings';
import {useGeneral} from '../../../util/hooks/useGeneral';
import Button from '../../common/button/Button';
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

	function toggleMobileHideButton() {
		setSetting('hide_mobile_timer_footer', !hideMobileTimerFooter);
	}

	let mobileHideButton = null;
	if (mobileMode) {
		mobileHideButton = (
			<div className={b('mobile-hide-button')}>
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

	const modules = [];
	if (customModules && customModules?.length) {
		for (let i = 0; i < customModules.length; i++) {
			const customModule = customModules[i];
			const moduleType = customModule.moduleType;

			modules.push(<TimerModule key={`${i}-${moduleType}`} index={i} customOptions={customModule} />);
		}
	} else {
		for (let i = 0; i < timerModuleCount; i++) {
			const moduleType = timerModules[i % timerModules.length];
			modules.push(<TimerModule key={`${i}-${moduleType}`} index={i} moduleType={moduleType} />);
		}
	}

	let body = <div className={b('body', {mobile: mobileMode, layout: timerLayout})}>{modules}</div>;
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
