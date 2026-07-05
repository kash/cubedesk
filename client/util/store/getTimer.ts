import {getStore} from '../../components/store';
import {TimerStore} from '../../components/timer/@types/interfaces';

export function getTimerStore<T extends keyof TimerStore>(key: T): TimerStore[T] {
	const timer = (getStore()?.getState()?.timer || {}) as TimerStore;
	return timer[key];
}
