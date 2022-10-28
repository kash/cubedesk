import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';

@ObjectType()
export class SolveView {
	@Field()
	id: string;

	@Field()
	solve_id: string;

	@Field()
	viewer_id: string;

	@Field()
	user_id: string;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	viewer?: PublicUserAccount;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}
