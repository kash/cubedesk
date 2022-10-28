import {Field, ObjectType, InputType, Int} from 'type-graphql';

@InputType()
export class AlgorithmOverrideInput {
	@Field(() => Int)
	rotate: number;

	@Field()
	solution: string;

	@Field()
	cube_key: string;

	@Field()
	name: string;

	@Field()
	scrambles: string;
}

@ObjectType()
export class AlgorithmOverride  {
	@Field()
	id: string;

	@Field(() => Int)
	rotate: number;

	@Field()
	solution: string;

	@Field()
	cube_key: string;

	@Field()
	user_id: string;

	@Field()
	name: string;

	@Field()
	scrambles: string;

	@Field()
	created_at: Date;
}
