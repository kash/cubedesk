import {TimerStore} from '../components/timer/@types/interfaces';

const smartState = {
	smartCubeConnected: false,
	smartCubeConnecting: false,
	smartCanStart: false,
	smartTurns: [],
	smartDeviceId: '',
	smartCurrentState: 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB',
	smartSolvedState: 'UUUUUUUUURRRRRRRRRFFFFFFFFFDDDDDDDDDLLLLLLLLLBBBBBBBBB',
};

const defaultTimerState = {
	timeStartedAt: null,
	solving: false,
	spaceTimerStarted: 0,
	inspectionTimer: 0,
	startEnabled: false,
	manualTime: '',
	notification: null,
	editScramble: false,
	manualEntryErr: null,
	inInspection: false,
	scrambleLocked: false,
	sessionSolveCount: 0,
	heightSmall: false,
	dnfTime: false,
	addTwoToSolve: false,
	stackMatInit: false,
	canStart: false,

	disabled: false,
	scramble: ''
};

const initialState: TimerStore = {
	...defaultTimerState,
	...smartState,
};

// TODO revisit all of these
export default (state = initialState, action) => {
	switch (action.type) {
		case 'RESET_TIMER_PARAMS': {
			return {
				...state,
				...defaultTimerState,
				...smartState,
			};
		}

		case 'SET_TIMER_PARAM': {
			const {params} = action.payload;

			return {
				...state,
				...params,
			};
		}

		case 'TURN_SMART_CUBE': {
			const {
				payload: {turn, completedAt},
			} = action;
			const smartTurns = [...state.smartTurns];

			smartTurns.push({
				turn,
				completedAt,
			});

			return {
				...state,
				smartTurns,
			};
		}

		case 'SET_TIMER_DISABLED': {
			const {disabled} = action.payload;

			return {
				...state,
				timerDisabled: disabled,
			};
		}

		case 'SET_START_ENABLED': {
			const {payload} = action;

			return {
				...state,
				startEnabled: payload,
			};
		}

		default: {
			return {
				...initialState,
				...state,
			};
		}
	}
};
