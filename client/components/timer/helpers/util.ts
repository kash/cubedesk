import {ITimerContext} from '@/components/timer/Timer';
import {getSetting} from '@/db/settings/query';
import {isSmartCubeType} from '@/util/smart-cube/puzzle';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {cubeType} = context;

	return timerType === 'smart' && isSmartCubeType(cubeType);
}

/** The connected smart cube is a different puzzle than the selected cube type, so its solves can't be timed */
export function smartCubeMismatched(context: ITimerContext) {
	const {smartCubePuzzle, cubeType} = context;
	return !!smartCubePuzzle && smartCubePuzzle !== cubeType;
}
