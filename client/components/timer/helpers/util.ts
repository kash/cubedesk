import {ITimerContext} from '@/components/timer/Timer';
import {AllSettings, getSetting} from '@/db/settings/query';
import {isSmartCubeType} from '@/util/smart-cube/puzzle';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {cubeType} = context;

	return timerType === 'smart' && isSmartCubeType(cubeType);
}

/** Smart cubes and smart timers time the solve themselves, so manual entry doesn't apply */
export function timesOnDevice(timerType: AllSettings['timer_type']) {
	return timerType === 'smart' || timerType === 'smarttimer';
}

export function smartTimerSelected() {
	return getSetting('timer_type') === 'smarttimer';
}

/** The connected smart cube is a different puzzle than the selected cube type, so its solves can't be timed */
export function smartCubeMismatched(context: ITimerContext) {
	const {smartCubePuzzle, cubeType} = context;
	return !!smartCubePuzzle && smartCubePuzzle !== cubeType;
}
