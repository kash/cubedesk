import Manual from '@/components/timer/time-display/Manual';
import {ITimerContext} from '@/components/timer/Timer';
import {createSolveDb} from '@/db/solves/update';
import timerReducer from '@/reducers/timer';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {endTimer, resetTimerParams} from './events';
import {resetScramble} from './scramble';

let mockTimerState: ReturnType<typeof timerReducer>;
let mockContext: ITimerContext;
let mockManualKeypress: (event: {key: string; preventDefault: () => void}) => void;
let pendingTimers: Array<() => void>;

jest.mock('@/components/store', () => ({
	getMe: () => ({id: 'test-user'}),
	getStore: () => ({
		dispatch: (action) => {
			mockTimerState = timerReducer(mockTimerState, action);
		},
	}),
}));
jest.mock('@/components/timer/Timer', () => ({useTimerContext: () => mockContext}));
jest.mock('@/db/solves/update', () => ({createSolveDb: jest.fn()}));
jest.mock('@/db/settings/query', () => ({getSettings: () => ({})}));
jest.mock('@/util/event_handler', () => ({emitEvent: jest.fn()}));
jest.mock('@/util/storage', () => ({resourceUri: (path) => path}));
jest.mock('@/util/hooks/useSettings', () => ({useSettings: () => false}));
jest.mock('@/util/hooks/useListener', () => ({
	useElementListener: (_element, _event, handler) => {
		mockManualKeypress = handler;
	},
}));
jest.mock('@/util/time', () => ({
	convertTimeStringToSeconds: () => ({timeMilli: 12000, dnf: false, plusTwo: false}),
}));
jest.mock('@/components/ui/input', () => ({Input: () => null}));
jest.mock('@/components/timer/time-display/StartInstructions', () => ({
	__esModule: true,
	default: () => null,
}));

// Distinct scrambles make a one-case lag deterministic, without depending on
// the trainer's random case selection or on a mounted application/database.
const caseScrambles = ["R U R'", "F R F'", "L U L'"];

beforeEach(() => {
	jest.clearAllMocks();
	pendingTimers = [];
	jest.spyOn(globalThis, 'setTimeout').mockImplementation((callback) => {
		pendingTimers.push(callback);
		return 0 as unknown as NodeJS.Timeout;
	});
	mockTimerState = {
		...timerReducer(undefined, {type: 'RESET_TIMER_PARAMS'}),
		scrambleLocked: true,
	};
	mockContext = {
		...mockTimerState,
		cubeType: '333',
		solvesFilter: {},
		scrambleLocked: true,
		customScrambleFunc: ({sessionSolveCount}) => caseScrambles[sessionSolveCount],
	};
	resetScramble(mockContext);
});

afterEach(() => {
	jest.restoreAllMocks();
});

it.each(['timer', 'manual'])(
	'keeps successive trainer cases and scrambles aligned via %s',
	(mode) => {
		expect(mockTimerState.scramble).toBe(caseScrambles[0]);
		for (let index = 0; index < 2; index++) {
			mockContext = {
				...mockContext,
				...mockTimerState,
				timeStartedAt: new Date(Date.now() - 12000),
			};
			if (mode === 'timer') {
				endTimer(mockContext, 12000);
				pendingTimers.splice(0).forEach((callback) => callback());
			} else {
				renderToStaticMarkup(<Manual />);
				mockManualKeypress({key: 'Enter', preventDefault: jest.fn()});
			}

			expect(createSolveDb).toHaveBeenNthCalledWith(
				index + 1,
				expect.objectContaining({
					scramble: caseScrambles[index],
					time: 12,
				}),
			);
			expect(mockTimerState.sessionSolveCount).toBe(index + 1);
			expect(mockTimerState.scramble).toBe(caseScrambles[mockTimerState.sessionSolveCount]);
		}
	},
);

it('keeps the current case when refreshing the scramble or cancelling a solve', () => {
	resetScramble(mockContext);
	resetTimerParams(mockContext);
	expect(mockTimerState.sessionSolveCount).toBe(0);
	expect(mockTimerState.scramble).toBe(caseScrambles[0]);
	expect(createSolveDb).not.toHaveBeenCalled();
});

it('preserves a locked scramble after a regular solve', () => {
	mockContext = {
		...mockContext,
		...mockTimerState,
		customScrambleFunc: undefined,
		timeStartedAt: new Date(Date.now() - 12000),
	};
	endTimer(mockContext, 12000);
	pendingTimers.splice(0).forEach((callback) => callback());
	expect(mockTimerState.sessionSolveCount).toBe(1);
	expect(mockTimerState.scramble).toBe(caseScrambles[0]);
});
