import {Field, InputType, Int, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';

@ObjectType()
export class BadgeType {
	@Field()
	id: string;

	@Field()
	name: string;

	@Field()
	description: string;

	@Field()
	created_by_id: string;

	@Field(() => Int)
	priority: number;

	@Field()
	color: string;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	created_by?: PublicUserAccount;
}

@InputType()
export class BadgeTypeInput {
	@Field()
	name: string;

	@Field()
	description: string;

	@Field(() => Int)
	priority: number;

	@Field()
	color: string;
}
