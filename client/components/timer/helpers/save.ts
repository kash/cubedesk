import {getMe} from '@/components/store';
import {setTimerParam} from '@/components/timer/helpers/params';
import {ITimerContext} from '@/components/timer/Timer';
import {createSolveDb} from '@/db/solves/update';
import {Solve} from '@/types/solve';
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
	overrides: Partial<Solve> = {}
) {
	const {onSolve, addTwoToSolve, cubeType, dnfTime, demoMode} = context;

	plusTwo = plusTwo || (addTwoToSolve && !dnfTime);
	dnf = dnf || dnfTime;

	time /= 1000;
	const finalTime = dnf ? -1 : time + (plusTwo ? 2 : 0);

	const me = getMe();

	// Base values for every required Solve column. The spreads below layer on
	// whatever each timer flow provides (session, game, trainer and smart-cube
	// data) and sanitizeSolve normalizes the rest before the solve is stored.
	const solveObject: Solve = {
		scramble,
		demo_mode: demoMode,
		started_at: new Date(startedAt).getTime(),
		ended_at: new Date(endedAt).getTime(),
		time: finalTime,
		raw_time: Math.max(time, 0),
		cube_type: cubeType ?? '333',
		id: uuid(),
		dnf: dnf || false,
		plus_two: !!plusTwo,
		// The server (re)assigns user_id from the session on solve.create;
		// anonymous demo solves are keyed by the local demo user, mirroring
		// db/settings/local.ts
		user_id: me?.id ?? 'demo',
		session_id: null,
		game_session_id: null,
		from_timer: false,
		bulk: false,
		notes: null,
		trainer_name: null,
		is_smart_cube: false,
		smart_device_id: null,
		match_id: null,
		match_participant_id: null,
		smart_turn_count: null,
		smart_turns: null,
		smart_put_down_time: null,
		inspection_time: null,
		share_code: null,
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
