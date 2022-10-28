import {TimerStore} from '../../components/timer/@types/interfaces';
import {RootStateOrAny, useSelector} from 'react-redux';

export function useTimerStore<T extends keyof TimerStore>(key: T): TimerStore[T] {
	return useSelector((state: RootStateOrAny) => (state.timer as TimerStore)[key]);
}
