import {setTimerParam} from '@/components/timer/helpers/params';
import {ITimerContext} from '@/components/timer/Timer';
import {createSolveDb} from '@/db/solves/update';
import {Solve, SolveInput} from '@/types/solve';
import {emitEvent} from '@/util/event_handler';
import {v4 as uuid} from 'uuid';

export function saveSolve(
	context: ITimerContext,
	time: number,
	scramble: string,
	startedAt: number,
	endedAt: number,
	dnf = false,
	plusTwo = false,
	overrides: Partial<SolveInput> = {}
) {
	const {onSolve, addTwoToSolve, cubeType, dnfTime, demoMode} = context;

	plusTwo = plusTwo || (addTwoToSolve && !dnfTime);
	dnf = dnf || dnfTime;

	time /= 1000;
	const finalTime = dnf ? -1 : time + (plusTwo ? 2 : 0);

	const solveObject: Solve = {
		scramble,
		demo_mode: demoMode,
		started_at: new Date(startedAt).getTime(),
		ended_at: new Date(endedAt).getTime(),
		time: finalTime,
		raw_time: Math.max(time, 0),
		cube_type: cubeType,
		id: uuid(),
		dnf: dnf || false,
		plus_two: !!plusTwo,
		...context.solvesFilter,
		...context.solvesSaveOverride,
		...overrides,
	};

	if (onSolve) {
		onSolve(solveObject);
	} else {
		createSolveDb(solveObject);
	}

	setTimerParam('sessionSolveCount', context.sessionSolveCount + 1);
	emitEvent('solveSavedEvent', solveObject);
}
