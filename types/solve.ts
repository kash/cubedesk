import type {SmartDevice} from './smart-device';
import type {PublicUserAccount} from './user';

export interface SolveInput {
	id?: string;
	time?: number;
	raw_time?: number;
	cube_type?: string;
	scramble?: string;
	game_session_id?: string;
	session_id?: string;
	// BigInt columns; the client sends epoch-ms numbers and Prisma accepts them
	started_at?: number;
	ended_at?: number;
	dnf?: boolean;
	plus_two?: boolean;
	bulk?: boolean;
	notes?: string;
	from_timer?: boolean;
	trainer_name?: string;
	is_smart_cube?: boolean;
	training_session_id?: string;
	smart_device_id?: string;
	match_id?: string;
	match_participant_id?: string;
	smart_turn_count?: number;
	smart_turns?: string;
	smart_put_down_time?: number;
	inspection_time?: number;
}

export interface Solve {
	id: string;
	time: number;
	raw_time: number;
	cube_type: string;
	scramble: string;
	game_session_id: string;
	from_timer: boolean;
	training_session_id?: string;
	session_id: string;
	user_id: string;
	bulk: boolean;
	started_at: number;
	ended_at: number;
	dnf: boolean;
	plus_two: boolean;
	notes: string;
	trainer_name: string;
	created_at: Date;
	is_smart_cube: boolean;
	smart_device_id: string;
	match_id: string;
	match_participant_id: string;
	smart_turn_count: number;
	smart_turns: string;
	smart_put_down_time: number;
	inspection_time: number;
	// Client-only flag for anonymous/demo solves — never persisted, so DB rows omit it
	demo_mode?: boolean;
	share_code: string;
	solve_method_steps?: SolveMethodStep[];
	solve_views?: SolveView[];
	smart_device?: SmartDevice;
	user?: PublicUserAccount;
}

export interface SolveMethodStep {
	id: string;
	solve_id: string;
	turn_count: number;
	turns: string;
	total_time: number;
	tps: number;
	recognition_time: number;
	oll_case_key: string;
	pll_case_key: string;
	skipped: boolean;
	parent_name: string;
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
