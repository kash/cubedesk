import {endTimer, startTimer} from '@/components/timer/helpers/events';
import {setTimerParams} from '@/components/timer/helpers/params';
import {ITimerContext, useTimerContext} from '@/components/timer/Timer';
import {useSettings} from '@/util/hooks/useSettings';
import {getTimerStore} from '@/util/store/getTimer';
import Stackmat from '@/util/vendor/stackmat';
import {useEffect, useRef, useState} from 'react';

export type StackMatStatus = 'off' | 'idle' | 'reset' | 'hands' | 'ready';

type StackMatState = Stackmat['stackmat_state'];

const MAX_INIT_RETRIES = 5;

function getStatus(state: StackMatState): StackMatStatus {
	if (!state.on) return 'off';
	if (state.greenLight) return 'ready';
	if (state.leftHand && state.rightHand) return 'hands';
	if (!state.running && state.time_milli > 0) return 'reset';
	return 'idle';
}

export function useStackMat(enabled: boolean): StackMatStatus {
	const stackMatId = useSettings('stackmat_id');
	const context = useTimerContext();
	const contextRef = useRef<ITimerContext>(context);
	const [status, setStatus] = useState<StackMatStatus>('off');

	useEffect(() => {
		contextRef.current = context;
	}, [context]);

	useEffect(() => {
		if (!enabled || !stackMatId) return;

		let cancelled = false;
		let device: Stackmat | null = null;
		let retryTimeout: ReturnType<typeof setTimeout> | undefined;
		let ignoredStates = 0;
		let started = false;

		function handleState(state: StackMatState) {
			if (cancelled) return;

			setStatus(getStatus(state));

			if (ignoredStates < 2) {
				ignoredStates++;
				return;
			}

			if (state.running && !started) {
				started = true;
				startTimer();
			} else if (!state.running && started) {
				started = false;
				endTimer(
					{...contextRef.current, timeStartedAt: getTimerStore('timeStartedAt')},
					state.time_milli,
				);
			} else if (
				state.on &&
				!state.running &&
				state.time_milli === 0 &&
				!getTimerStore('solving') &&
				(getTimerStore('finalTime') ?? 0) > 0
			) {
				setTimerParams({finalTime: -1});
			}
		}

		function init(attempt: number) {
			const instance = new Stackmat();
			device = instance;
			instance
				.init('', stackMatId, false, handleState)
				.then(() => {
					if (cancelled) instance.stop();
				})
				.catch((e: unknown) => {
					console.error(e);
					instance.stop();
					if (!cancelled && attempt < MAX_INIT_RETRIES) {
						retryTimeout = setTimeout(() => init(attempt + 1), 1000);
					}
				});
		}

		init(0);

		return () => {
			cancelled = true;
			clearTimeout(retryTimeout);
			device?.stop();
			setStatus('off');
		};
	}, [enabled, stackMatId]);

	return status;
}
