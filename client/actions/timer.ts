import {TimerStore} from '../components/timer/@types/interfaces';

export function turnSmartCube(turn, completedAt) {
	return {
		type: 'TURN_SMART_CUBE',
		payload: {
			turn,
			completedAt,
		},
	};
}

export function setTimerParamsAction(params: Partial<TimerStore>) {
	return {
		type: 'SET_TIMER_PARAM',
		payload: {
			params,
		},
	};
}

export function setTimerDisabled(disabled) {
	return {
		type: 'SET_TIMER_DISABLED',
		payload: {
			disabled,
		},
	};
}

export function setStartEnabled(val) {
	return {
		type: 'SET_START_ENABLED',
		payload: val,
	};
}
