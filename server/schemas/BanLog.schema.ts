import {Field, InputType, Int, ObjectType} from 'type-graphql';
import {UserAccountForAdmin} from './UserAccount.schema';

@ObjectType()
export class BanLog {
	@Field()
	id: string;

	@Field()
	created_by_id: string;

	@Field()
	banned_user_id: string;

	@Field()
	reason: string;

	@Field()
	active: boolean;

	@Field()
	banned_until: Date;

	@Field(() => Int)
	minutes: number;

	@Field()
	forever: boolean;

	@Field()
	created_at: Date;

	@Field(() => UserAccountForAdmin)
	created_by?: UserAccountForAdmin;

	@Field(() => UserAccountForAdmin)
	banned_user?: UserAccountForAdmin;
}

@InputType()
export class BanUserInput {
	@Field()
	user_id: string;

	@Field()
	reason: string;

	// Set to -1 for forever
	@Field(() => Int)
	minutes: number;

	@Field()
	delete_published_solves: boolean;

	@Field()
	cheating_in_1v1: boolean;
}
