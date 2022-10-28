import {Field, ObjectType, Int, Float} from 'type-graphql';
import {Solve} from './Solve.schema';

@ObjectType()
export class SolveMethodStep {
	@Field()
	id: string;

	@Field()
	solve_id: string;

	@Field(() => Int)
	turn_count: number;

	@Field()
	turns: string;

	@Field(() => Float)
	total_time: number;

	@Field(() => Float)
	tps: number;

	@Field(() => Float)
	recognition_time: number;

	@Field()
	oll_case_key: string;

	@Field()
	pll_case_key: string;

	@Field()
	skipped: boolean;

	@Field()
	parent_name: string;

	@Field()
	method_name: string;

	@Field(() => Int)
	step_index: number;

	@Field()
	step_name: string;

	@Field()
	created_at: Date;

	@Field(() => Solve)
	solve?: Solve;
}
