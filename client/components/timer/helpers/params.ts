import {TimerStore} from '../@types/interfaces';
import {setTimerParamsAction} from '../../../actions/timer';
import {getStore} from '../../store';

export function setTimerParam<T extends keyof TimerStore>(key: T, value: TimerStore[T]) {
	setTimerParams({
		[key]: value,
	});
}

export function setTimerParams(value: Partial<TimerStore>) {
	const dispatch = getStore()?.dispatch;
	if (!dispatch) {
		return;
	}

	dispatch(setTimerParamsAction(value));
}
