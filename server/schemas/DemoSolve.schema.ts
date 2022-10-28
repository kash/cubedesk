import {Field, ObjectType, InputType, Float} from 'type-graphql';
import {GraphQLBigInt} from 'graphql-scalars';

@ObjectType()
export class DemoSolve {
	@Field()
	id: string;

	@Field()
	demo_session_id: string;

	@Field()
	ip_address: string;

	@Field(() => Float)
	raw_time: number;

	@Field()
	cube_type: string;

	@Field()
	scramble: string;

	@Field(() => GraphQLBigInt)
	started_at?: bigint;

	@Field(() => GraphQLBigInt)
	ended_at?: bigint;

	@Field(() => Date)
	updated_at: Date;

	@Field(() => Date)
	created_at: Date;
}

@InputType()
export class DemoSolveInput {
	@Field()
	demo_session_id: string;

	@Field(() => Float)
	raw_time: number;

	@Field()
	cube_type: string;

	@Field()
	scramble: string;

	@Field(() => GraphQLBigInt)
	started_at?: bigint;

	@Field(() => GraphQLBigInt)
	ended_at?: bigint;
}
