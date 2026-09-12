import KeyWatcher from './KeyWatcher';
import {setTimerParams} from '@/components/timer/helpers/params';
import {endTimer, startTimer} from '@/components/timer/helpers/events';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

let mockHandlers: React.HTMLAttributes<HTMLDivElement>;
let mockDialogBlocked = false;
let mockPopupOpen = false;
let mockContext: Record<string, unknown>;
let mockWindowKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
let mockFocusedTarget: Target | null;

jest.mock('react-hotkeys', () => ({
	GlobalHotKeys: ({children}) => {
		mockHandlers = children.props;
		return null;
	},
}));
jest.mock('@/components/timer/Timer', () => ({useTimerContext: () => mockContext}));
jest.mock('@/components/ui/dialog', () => ({useDialogBlocked: () => mockDialogBlocked}));
jest.mock('@/components/ui/popup', () => ({isPopupOpen: () => mockPopupOpen}));
jest.mock('@/components/timer/helpers/events', () => ({
	endTimer: jest.fn(),
	resetTimerParams: jest.fn(),
	startInspection: jest.fn(),
	startTimer: jest.fn(),
}));
jest.mock('@/components/timer/helpers/hotkeys', () => ({configureHotkeys: jest.fn()}));
jest.mock('@/components/timer/helpers/params', () => ({
	setTimerParam: jest.fn(),
	setTimerParams: jest.fn(),
}));
jest.mock('@/components/timer/helpers/timers', () => ({
	clearInspectionTimers: jest.fn(),
	getTimer: jest.fn(),
	setTimer: jest.fn(),
	stopTimer: jest.fn(),
}));
jest.mock('@/components/timer/helpers/util', () => ({smartCubeSelected: () => false}));
jest.mock('@/db/settings/query', () => ({getSettings: () => ({freeze_time: 0})}));
jest.mock('@/util/cubes/util', () => ({getCubeTypeInfoById: () => ({id: '333'})}));
jest.mock('@/util/hooks/useListener', () => ({
	useDocumentListener: jest.fn(),
	useWindowListener: (name, handler) => {
		if (name === 'keydown') mockWindowKeyDown = handler;
	},
}));
jest.mock('@/util/hooks/useSettings', () => ({
	useSettings: (key) => (key === 'timer_type' ? 'keyboard' : false),
}));
jest.mock('@/util/timer/hotkeys', () => ({HOTKEY_MAP: {}}));

// These tests exercise event routing without mounting the timer's application dependencies.
class Target {
	constructor(private tag: string) {}
	blur = jest.fn(() => {
		if (mockFocusedTarget === this) mockFocusedTarget = null;
	});
	closest(selector: string) {
		return selector.split(', ').includes(this.tag) ? this : null;
	}
}
const originalElement = globalThis.Element;
beforeAll(() => {
	globalThis.Element = Target as unknown as typeof Element;
});
afterAll(() => {
	globalThis.Element = originalElement;
});
beforeEach(() => {
	jest.clearAllMocks();
	jest.spyOn(globalThis, 'setTimeout').mockImplementation(() => 0 as unknown as NodeJS.Timeout);
	mockDialogBlocked = false;
	mockPopupOpen = false;
	mockFocusedTarget = null;
	mockContext = {cubeType: '333', startEnabled: true};
});
afterEach(() => {
	jest.restoreAllMocks();
});

function setup(pointer = true) {
	renderToStaticMarkup(<KeyWatcher>Timer</KeyWatcher>);
	if (pointer) mockHandlers.onPointerDownCapture!({} as React.PointerEvent<HTMLDivElement>);
}
function key(key = ' ', target: string | Target = 'button') {
	return {
		key,
		keyCode: key === ' ' ? 32 : key === 'Tab' ? 9 : key.charCodeAt(0),
		target: typeof target === 'string' ? new Target(target) : target,
		defaultPrevented: false,
		preventDefault(this: {defaultPrevented: boolean}) {
			this.defaultPrevented = true;
		},
		stopPropagation: jest.fn(),
	} as unknown as React.KeyboardEvent<HTMLDivElement>;
}

it('takes space down and up away from a clicked button', () => {
	setup();
	const down = key();
	mockHandlers.onKeyDownCapture!(down);
	expect(setTimerParams).toHaveBeenCalledWith({spaceTimerStarted: expect.any(Number)});
	expect(down.defaultPrevented).toBe(true);
	expect(down.stopPropagation).toHaveBeenCalled();
	const up = key();
	mockHandlers.onKeyUpCapture!(up);
	expect(up.defaultPrevented).toBe(true);
	expect(up.stopPropagation).toHaveBeenCalled();
});

it('allows space to stop a running timer after a button click', () => {
	mockContext.timeStartedAt = Date.now();
	setup();
	mockHandlers.onKeyDownCapture!(key());
	expect(endTimer).toHaveBeenCalledWith(mockContext);
});

it('starts the armed timer on space release without activating the button', () => {
	mockContext.spaceTimerStarted = Date.now();
	setup();
	mockHandlers.onKeyDownCapture!(key());
	const up = key();
	mockHandlers.onKeyUpCapture!(up);
	expect(startTimer).toHaveBeenCalledTimes(1);
	expect(up.defaultPrevented).toBe(true);
});

it.each([false, true])('preserves keyboard button activation (previous pointer: %s)', (pointer) => {
	setup(pointer);
	if (pointer) mockHandlers.onKeyDownCapture!(key('Tab'));
	const event = key();
	mockHandlers.onKeyDownCapture!(event);
	expect(event.defaultPrevented).toBe(false);
	expect(setTimerParams).not.toHaveBeenCalled();
});

it.each(['dialog', 'popup', 'disabled', 'input', 'textarea', 'select', '[contenteditable]'])(
	'does not reclaim space in %s',
	(state) => {
		mockDialogBlocked = state === 'dialog';
		mockPopupOpen = state === 'popup';
		mockContext.disabled = state === 'disabled';
		setup();
		const event = key(' ', ['dialog', 'popup', 'disabled'].includes(state) ? 'button' : state);
		mockHandlers.onKeyDownCapture!(event);
		expect(event.defaultPrevented).toBe(false);
		expect(setTimerParams).not.toHaveBeenCalled();
	},
);

it('reclaims space after a pointer-opened popup closes and restores button focus', () => {
	mockPopupOpen = true;
	setup();
	mockHandlers.onKeyDownCapture!(key());
	expect(setTimerParams).not.toHaveBeenCalled();
	mockPopupOpen = false;
	mockHandlers.onKeyDownCapture!(key());
	expect(setTimerParams).toHaveBeenCalled();
});

it.each(['a', 'Enter', 'ArrowLeft', ' '])(
	'releases picker focus so %s can stop the next solve',
	(stopKey) => {
		mockContext.spaceTimerStarted = Date.now();
		mockPopupOpen = true;
		setup();
		const picker = new Target('button');
		mockPopupOpen = false;
		mockFocusedTarget = picker;
		mockHandlers.onKeyDownCapture!(key(' ', picker));
		expect(picker.blur).not.toHaveBeenCalled();
		mockHandlers.onKeyUpCapture!(key(' ', picker));
		expect(startTimer).toHaveBeenCalledTimes(1);
		expect(mockFocusedTarget).toBeNull();

		mockContext.timeStartedAt = Date.now();
		setup(false);
		mockWindowKeyDown(key(stopKey, mockFocusedTarget ?? 'body'));
		expect(endTimer).toHaveBeenCalledTimes(1);
	},
);

it('keeps focus on a button activated through keyboard navigation', () => {
	setup(false);
	const button = new Target('button');
	mockFocusedTarget = button;
	mockHandlers.onKeyDownCapture!(key(' ', button));
	mockHandlers.onKeyUpCapture!(key(' ', button));
	expect(mockFocusedTarget).toBe(button);
	expect(button.blur).not.toHaveBeenCalled();
});
