import {Solve} from '@/generated/zod';

export function sanitizeSolve(s: Solve): Solve {
	const solve = {...s};
	delete solve.created_at;

	let startedAt: number | bigint | string | null = solve.started_at;
	let endedAt: number | bigint | string | null = solve.ended_at;
	if (startedAt && typeof startedAt === 'string') {
		startedAt = parseInt(startedAt, 10);
	}

	if (endedAt && typeof endedAt === 'string') {
		endedAt = parseInt(endedAt, 10);
	}

	solve.started_at = startedAt ? Number(startedAt) : null;
	solve.ended_at = endedAt ? Number(endedAt) : null;
	solve.dnf = !!solve.dnf;
	solve.plus_two = !!solve.plus_two;

	if (solve.trainer_name) {
		solve.session_id = null;
	}

	if (!solve.inspection_time) {
		solve.inspection_time = 0;
	}

	if (!solve.is_smart_cube) {
		solve.is_smart_cube = false;
	}

	if (!solve.smart_put_down_time) {
		solve.smart_put_down_time = 0;
	}

	solve.from_timer = true;
	if (
		!solve.session_id ||
		solve.match_id ||
		solve.trainer_name ||
		solve.game_session_id ||
		solve.training_session_id
	) {
		solve.from_timer = false;
	}

	return solve;
}
