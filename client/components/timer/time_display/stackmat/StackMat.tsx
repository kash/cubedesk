import React, {useContext, useEffect, useRef, useState} from 'react';
import StartInstructions from '../start_instructions/StartInstructions';
import {ITimerContext, TimerContext} from '../../Timer';
import {useSettings} from '../../../../util/hooks/useSettings';
import Stackmat from '../../../../util/vendor/stackmat';
import {endTimer, startTimer} from '../../helpers/events';

export default function StackMat() {
	const stackMatId = useSettings('stackmat_id');

	const context = useContext(TimerContext);
	const localContext = useRef<ITimerContext>(context);

	const timerInitCounter = useRef(0);
	const [stackMatRetryCount, setStackMatRetryCount] = useState(0);
	const stackMat = useRef<Stackmat>(null);
	const stackMatStarted = useRef(false);

	useEffect(() => {
		localContext.current = context;
	}, [context]);

	// Initialize StackMat
	useEffect(() => {
		if (!stackMatId) {
			return;
		}

		navigator.mediaDevices
			.enumerateDevices()
			.then(initStackMat)
			.catch((e) => {
				console.error(e);
				stackMat.current = null;
				if (stackMatRetryCount < 5) {
					setTimeout(() => {
						setStackMatRetryCount(stackMatRetryCount + 1);
					}, 1000);
				}
			});
	}, [stackMatRetryCount]);

	function initStackMat() {
		if (stackMat.current) {
			return;
		}

		stackMat.current = new Stackmat();
		return stackMat.current.init('', stackMatId, false, (timer) => {
			if (timerInitCounter.current < 2) {
				timerInitCounter.current++;
				return;
			}

			if (timer.running && !stackMatStarted.current) {
				stackMatStarted.current = true;
				startTimer();
			} else if (!timer.running && stackMatStarted.current) {
				stackMatStarted.current = false;
				endTimer(localContext.current, timer.time_milli);
			}
		});
	}

	return (
		<StartInstructions>
			Place hands on <span>StackMat</span> to start
		</StartInstructions>
	);
}
