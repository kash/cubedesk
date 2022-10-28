import {setTimerParams} from './params';
import {clearInspectionTimers, START_TIMEOUT, stopTimer} from './timers';
import {emitEvent} from '../../../util/event_handler';
import {saveSolve} from './save';
import {resetScramble} from './scramble';
import {ITimerContext} from '../Timer';
import {SolveInput} from '../../../../server/schemas/Solve.schema';

let endLocked = false;

export function startTimer() {
	const timeStartedAt = new Date();

	clearInspectionTimers(false, true);
	setTimerParams({
		editScramble: false,
		notification: null,
		timeStartedAt,
		solving: true,
		finalTime: 0,
	});

	setTimeout(() => {
		emitEvent('startTimerEvent', {
			timeStartedAt,
		});
	});
}

export function endTimer(context: ITimerContext, finalTimeMilli?: number, overrides?: Partial<SolveInput>) {
	if (endLocked) {
		return;
	}

	const {scramble, timeStartedAt} = context;

	endLocked = true;
	let finalTime = finalTimeMilli;

	const now = new Date();

	if (!finalTimeMilli) {
		finalTime = now.getTime() - timeStartedAt.getTime();
	}

	setTimerParams({
		solving: false,
		finalTime,
	});

	resetTimerParams(context);
	setTimeout(() => {
		saveSolve(context, finalTime, scramble, timeStartedAt.getTime(), now.getTime(), false, false, overrides);
		endLocked = false;
	}, 10);
}

export function resetTimerParams(context: ITimerContext) {
	resetScramble(context);
	stopTimer(START_TIMEOUT);
	clearInspectionTimers(false, true);
	setTimerParams({
		spaceTimerStarted: 0,
		solving: false,
		canStart: false,
		timeStartedAt: null,
	});
}
