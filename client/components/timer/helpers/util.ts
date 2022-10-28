import {ITimerContext} from '../Timer';
import {getSetting} from '../../../db/settings/query';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {cubeType} = context;

	return timerType === 'smart' && cubeType === '333';
}
