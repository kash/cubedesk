import {ITimerContext} from '@/components/timer/Timer';
import {getSetting} from '@/db/settings/query';
import {isSmartCubeEvent} from '@/util/smart-cube/puzzle';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {eventType} = context;

	return timerType === 'smart' && isSmartCubeEvent(eventType);
}

/** The connected smart cube is a different puzzle than the selected event type, so its solves can't be timed */
export function smartCubeMismatched(context: ITimerContext) {
	const {smartCubePuzzle, eventType} = context;
	return !!smartCubePuzzle && smartCubePuzzle !== eventType;
}
