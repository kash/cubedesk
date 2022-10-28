import {ReactComponentElement, ReactNode} from 'react';
import {Match} from '../../../@types/generated/graphql';
import {ChallengerProps} from '../../play/target/challengers/challenger/Challenger';
import {TimerModuleDropdownOptions, TimerModuleType} from './enums';
import {ITimerContext} from '../Timer';
import {TimerLayoutPosition} from '../../../db/settings/query';
import {Solve} from '../../../../server/schemas/Solve.schema';

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
	proOnly?: boolean;
}

export interface TimerCustomModuleOptions {
	customBody?: (context: ITimerContext) => FooterModuleData;
	moduleType?: TimerModuleType;
	dropdownOptions?: TimerModuleDropdownOptions[];
	skipSaveOnChange?: boolean;
	hideAllOptions?: boolean;
	additionalDropdownTypes?: Record<TimerModuleType, FooterModuleData>;
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

export interface TimerStore {
	timeStartedAt?: Date | null;
	finalTime?: number;
	solving?: boolean;
	sessionSolveCount?: number;
	spaceTimerStarted?: number;
	timerDisabled?: boolean; // Silently disables the timer, unlike "disabled". Used for something like chat
	inspectionTimer?: number;
	startEnabled?: boolean;
	manualTime?: string;
	notification?: ReactComponentElement<any>;
	editScramble?: boolean;
	manualEntryErr?: string;
	inInspection?: boolean;
	scrambleLocked?: boolean;
	heightSmall?: boolean;
	dnfTime?: boolean;
	addTwoToSolve?: boolean;
	stackMatInit?: boolean;
	canStart?: boolean;
	smartCubeConnected?: boolean;
	smartCubeConnecting?: boolean;
	smartCubeBatteryLevel?: number;
	smartCanStart?: boolean;
	smartTurns?: any; // TODO fix
	smartDeviceId?: string;
	smartCurrentState?: string;
	smartSolvedState?: string;
	scramble?: string;
	disabled?: boolean;
}
