import {Field, ObjectType, InputType, Float, Int} from 'type-graphql';
import {GraphQLBigInt} from 'graphql-scalars';
import {PublicUserAccount} from './UserAccount.schema';
import {SolveMethodStep} from './SolveStepMethod.schema';
import {SolveView} from './SolveView.schema';
import {SmartDevice} from './SmartDevice.schema';

@InputType()
export class SolveInput {
	@Field()
	id?: string;

	@Field(() => Float)
	time?: number;

	@Field(() => Float)
	raw_time?: number;

	@Field()
	cube_type?: string;

	@Field()
	scramble?: string;

	@Field()
	game_session_id?: string;

	@Field()
	session_id?: string;

	@Field(() => GraphQLBigInt)
	started_at?: bigint;

	@Field(() => GraphQLBigInt)
	ended_at?: bigint;

	@Field()
	dnf?: boolean;

	@Field()
	plus_two?: boolean;

	@Field()
	bulk?: boolean;

	@Field()
	notes?: string;

	@Field()
	from_timer: boolean;

	@Field()
	trainer_name?: string;

	@Field()
	is_smart_cube?: boolean;

	@Field()
	training_session_id?: string;

	@Field()
	smart_device_id?: string;

	@Field()
	match_id?: string;

	@Field()
	match_participant_id?: string;

	@Field(() => Int)
	smart_turn_count?: number;

	@Field()
	smart_turns?: string;

	@Field(() => Float)
	smart_put_down_time?: number;

	@Field(() => Float)
	inspection_time?: number;
}

@ObjectType()
export class Solve {
	@Field()
	id: string;

	@Field(() => Float)
	time: number;

	@Field(() => Float)
	raw_time: number;

	@Field()
	cube_type: string;

	@Field()
	scramble: string;

	@Field()
	game_session_id: string;

	@Field()
	from_timer: boolean;

	@Field()
	training_session_id?: string;

	@Field()
	session_id: string;

	@Field()
	user_id: string;

	@Field()
	bulk: boolean;

	@Field(() => GraphQLBigInt)
	started_at: number;

	@Field(() => GraphQLBigInt)
	ended_at: number;

	@Field()
	dnf: boolean;

	@Field()
	plus_two: boolean;

	@Field()
	notes: string;

	@Field()
	trainer_name: string;

	@Field()
	created_at: Date;

	@Field()
	is_smart_cube: boolean;

	@Field()
	smart_device_id: string;

	@Field()
	match_id: string;

	@Field()
	match_participant_id: string;

	@Field(() => Int)
	smart_turn_count: number;

	@Field()
	smart_turns: string;

	@Field(() => Float)
	smart_put_down_time: number;

	@Field(() => Float)
	inspection_time: number;

	@Field()
	demo_mode: boolean;

	@Field()
	share_code: string;

	@Field(() => [SolveMethodStep])
	solve_method_steps?: SolveMethodStep[];

	@Field(() => [SolveView])
	solve_views?: SolveView[];

	@Field(() => SmartDevice, {nullable: true})
	smart_device?: SmartDevice;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}

@ObjectType()
export class SolveList {
	@Field(() => [Solve])
	solves: Solve[];

	@Field()
	more_results: boolean;

	@Field(() => Int)
	total_count: number;
}
