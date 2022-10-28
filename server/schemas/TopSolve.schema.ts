import {Field, ObjectType, Float} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Solve} from './Solve.schema';

@ObjectType()
export class TopSolve {
	@Field()
	id: string

	@Field(() => Float)
	time: number

	@Field()
	cube_type: string

	@Field()
	created_at: Date

	@Field(() => Solve, {nullable: true})
	solve?: Solve

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount
}
