import {TimerStore} from '../@types/interfaces';
import {setTimerParams} from './params';

const timers = {
	notificationTimeout: null,
	inspectionTimeout: null,
	inspectionInterval: null,
	startTimeout: null,
	inspectionGracePeriod: null,
	timer: null,
};

export const NOTIFICATION_TIMEOUT = 'notificationTimeout';
export const START_TIMEOUT = 'startTimeout';
export const INSPECTION_GRACE_PERIOD_TIMEOUT = 'inspectionGracePeriod';
export const INSPECTION_TIMEOUT = 'inspectionTimeout';
export const INSPECTION_INTERVAL = 'inspectionInterval';

export function getTimer(name: string) {
	return timers[name];
}

export function setTimer(name: string, func) {
	timers[name] = func;
}

export function stopTimer(name) {
	const t = getTimer(name);

	if (t) {
		clearTimeout(t);
		clearInterval(t);
	}

	timers[name] = null;
}

export function stopAllTimers() {
	Object.keys(timers).forEach(name => stopTimer(name));
}

export function clearInspectionTimers(clearModifications: boolean, run: boolean) {
	stopTimer(INSPECTION_TIMEOUT);
	stopTimer(INSPECTION_INTERVAL);

	const payload: Partial<TimerStore> = {
		inInspection: false,
		inspectionTimer: 0,
	};

	if (clearModifications) {
		payload.dnfTime = false;
		payload.addTwoToSolve = false;
	}

	if (run) {
		setTimerParams(payload);
	} else {
		return payload;
	}
}
