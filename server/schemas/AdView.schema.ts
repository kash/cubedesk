import {Field, ObjectType, InputType, Int} from 'type-graphql';
import {UserAccount} from './UserAccount.schema';

@ObjectType()
export class AdView {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	ad_key: string;

	@Field()
	pathname: string;

	@Field(() => Int)
	view_time_seconds: number;

	@Field()
	browser_session_id: string;

	@Field(() => Date)
	clicked_at: Date;

	@Field(() => Date)
	updated_at: Date;

	@Field(() => Date)
	created_at: Date;

	@Field(() => UserAccount)
	user?: UserAccount;
}

@InputType()
export class CreateAdViewInput {
	@Field()
	ad_key: string;

	@Field()
	pathname: string;

	@Field()
	browser_session_id: string;
}
