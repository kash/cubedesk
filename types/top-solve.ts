import type {Solve} from '@/types/solve';
import type {PublicUserAccount} from '@/types/user';

export interface TopSolve {
	id: string;
	time: number;
	cube_type: string;
	created_at: Date;
	solve?: Solve;
	user?: PublicUserAccount;
}

export interface TopAverage {
	id: string;
	time: number;
	cube_type: string;
	created_at: Date;
	solve_1: Solve;
	solve_2: Solve;
	solve_3: Solve;
	solve_4: Solve;
	solve_5: Solve;
	user?: PublicUserAccount;
}
