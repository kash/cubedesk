import type {SmartDevice} from './smart-device';
import type {PublicUserAccount} from './user';

// Mirrors solveInputSchema (server/trpc/routers/solve.ts), where every field is nullish
export interface SolveInput {
	id?: string | null;
	time?: number | null;
	raw_time?: number | null;
	cube_type?: string | null;
	scramble?: string | null;
	game_session_id?: string | null;
	session_id?: string | null;
	// BigInt columns; the client sends epoch-ms numbers and Prisma accepts them
	started_at?: number | null;
	ended_at?: number | null;
	dnf?: boolean | null;
	plus_two?: boolean | null;
	bulk?: boolean | null;
	notes?: string | null;
	from_timer?: boolean | null;
	trainer_name?: string | null;
	is_smart_cube?: boolean | null;
	training_session_id?: string | null;
	smart_device_id?: string | null;
	match_id?: string | null;
	match_participant_id?: string | null;
	smart_turn_count?: number | null;
	smart_turns?: string | null;
	smart_put_down_time?: number | null;
	inspection_time?: number | null;
}

// Nullability mirrors the Prisma schema, except cube_type/scramble/time, which
// every solve-creation path provides even though the columns allow null.
export interface Solve {
	id: string;
	time: number;
	raw_time: number | null;
	cube_type: string;
	scramble: string;
	game_session_id: string | null;
	from_timer: boolean;
	training_session_id?: string | null;
	session_id: string | null;
	user_id: string;
	bulk: boolean;
	started_at: number | null;
	ended_at: number | null;
	dnf: boolean;
	plus_two: boolean;
	notes: string | null;
	trainer_name: string | null;
	// Deleted by sanitizeSolve before solves are sent to the server
	created_at?: Date;
	is_smart_cube: boolean;
	smart_device_id: string | null;
	match_id: string | null;
	match_participant_id: string | null;
	smart_turn_count: number | null;
	smart_turns: string | null;
	smart_put_down_time: number | null;
	inspection_time: number | null;
	// Client-only flag for anonymous/demo solves — never persisted, so DB rows omit it
	demo_mode?: boolean;
	share_code: string | null;
	solve_method_steps?: SolveMethodStep[];
	solve_views?: SolveView[];
	smart_device?: SmartDevice;
	user?: PublicUserAccount;
}

export interface SolveMethodStep {
	id: string;
	solve_id: string;
	turn_count: number;
	turns: string | null;
	total_time: number | null;
	tps: number | null;
	recognition_time: number;
	oll_case_key: string | null;
	pll_case_key: string | null;
	skipped: boolean;
	parent_name: string | null;
	method_name: string;
	step_index: number;
	step_name: string;
	created_at: Date;
	solve?: Solve;
}

export interface SolveView {
	id: string;
	solve_id: string;
	viewer_id: string;
	user_id: string;
	created_at: Date;
	viewer?: PublicUserAccount;
	user?: PublicUserAccount;
}
