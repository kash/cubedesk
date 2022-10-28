import {Field, ObjectType, Float} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Solve} from './Solve.schema';

@ObjectType()
export class TopAverage {
	@Field()
	id: string;

	@Field(() => Float)
	time: number;

	@Field()
	cube_type: string;

	@Field()
	created_at: Date;

	@Field(() => Solve, {nullable: true})
	solve_1: Solve;

	@Field(() => Solve, {nullable: true})
	solve_2: Solve;

	@Field(() => Solve, {nullable: true})
	solve_3: Solve;

	@Field(() => Solve, {nullable: true})
	solve_4: Solve;

	@Field(() => Solve, {nullable: true})
	solve_5: Solve;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}
