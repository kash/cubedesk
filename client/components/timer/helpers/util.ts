import {ITimerContext} from '@/components/timer/Timer';
import {AllSettings, getSetting} from '@/db/settings/query';
import {isSmartCubeType} from '@/util/smart-cube/puzzle';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {eventType} = context;

	return timerType === 'smart' && isSmartCubeEvent(eventType);
}

export function timesOnDevice(timerType: AllSettings['timer_type']) {
	return timerType === 'smart' || timerType === 'smarttimer';
}

export function smartTimerSelected() {
	return getSetting('timer_type') === 'smarttimer';
}

export function smartCubeMismatched(context: ITimerContext) {
	const {smartCubePuzzle, eventType} = context;
	return !!smartCubePuzzle && smartCubePuzzle !== eventType;
}
