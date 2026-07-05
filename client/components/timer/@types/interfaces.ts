import {TimerModuleDropdownOptions, TimerModuleType} from '@/components/timer/@types/enums';
import {ITimerContext} from '@/components/timer/Timer';
import {TimerLayoutPosition} from '@/db/settings/query';
import {Match} from '@/types/match';
import {Solve} from '@/types/solve';
import {ReactComponentElement, ReactNode} from 'react';

interface TimerHeaderOptions {
	hide?: boolean; // Hides the whole header
	hideFocus?: boolean;
	hideInspection?: boolean;
	hideManualEntry?: boolean;
	hideNewSession?: boolean;
	hideCubeType?: boolean;
	hideTimerType?: boolean;
	hideSessionSelector?: boolean;
	customHeadersLeft?: ReactNode;
	customHeadersRight?: ReactNode;
}

export interface FooterModuleData {
	module: ReactNode;
}

export interface TimerCustomModuleOptions {
	customBody?: (context: ITimerContext) => FooterModuleData;
	moduleType?: TimerModuleType;
	dropdownOptions?: TimerModuleDropdownOptions[];
	skipSaveOnChange?: boolean;
	hideAllOptions?: boolean;
	additionalDropdownTypes?: Partial<Record<TimerModuleType, FooterModuleData>>;
}

export interface TimerProps {
	demoMode?: boolean;
	disabled?: boolean; // Disables the timer from starting
	focusMode?: boolean;
	ignorePbEvents?: boolean;
	subTimerActions?: ReactComponentElement<any> | null;
	hideScramble?: boolean;
	hideTime?: boolean;
	inModal?: boolean;
	cubeType?: string;
	timerLayout?: TimerLayoutPosition;

	customScrambleFunc?: (context: ITimerContext) => string;
	headerOptions?: TimerHeaderOptions;
	timerCustomFooterModules?: TimerCustomModuleOptions[];

	scramble?: string;
	scrambleLocked?: boolean;
	onSolve?: ((solve: Solve, match?: Match) => void) | undefined;

	solvesFilter: Partial<Solve>;
	solvesSaveOverride?: Partial<Solve>;

	children?: ReactComponentElement<any> | null;
}

// Fields without `?` are initialized with defaults in reducers/timer.ts and
// are therefore always present in the store.
export interface TimerStore {
	timeStartedAt: Date | null;
	finalTime?: number;
	solving: boolean;
	sessionSolveCount: number;
	spaceTimerStarted: number;
	timerDisabled?: boolean; // Silently disables the timer, unlike "disabled". Used for something like chat
	inspectionTimer: number;
	startEnabled: boolean;
	manualTime: string;
	notification: ReactComponentElement<any> | null;
	editScramble: boolean;
	manualEntryErr: string | null;
	inInspection: boolean;
	heightSmall: boolean;
	dnfTime: boolean;
	addTwoToSolve: boolean;
	stackMatInit: boolean;
	canStart: boolean;
	smartCubeConnected: boolean;
	smartCubeConnecting: boolean;
	smartCubeBatteryLevel?: number;
	smartCanStart: boolean;
	smartTurns: any; // TODO fix
	smartDeviceId: string;
	smartCurrentState: string;
	smartSolvedState: string;
	// Also exist on TimerProps (props override the store in ITimerContext),
	// so they stay optional to keep the two interfaces compatible
	scramble?: string;
	disabled?: boolean;
	scrambleLocked?: boolean;
}
