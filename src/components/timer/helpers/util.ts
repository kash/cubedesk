import {getSetting} from '../../../lib/db/settings/query';
import {ITimerContext} from '../Timer';

export function smartCubeSelected(context: ITimerContext) {
	const timerType = getSetting('timer_type');
	const {cubeType} = context;

	return timerType === 'smart' && cubeType === '333';
}
