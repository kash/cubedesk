import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';

@ObjectType()
export class Notification {
	@Field()
	id: string;

	@Field()
	user_id: string

	@Field()
	notification_type: string

	@Field()
	notification_category_name: string

	@Field()
	in_app_message: string

	@Field()
	triggering_user_id: string

	@Field()
	read_at: Date

	@Field()
	message: string

	@Field()
	icon: string

	@Field()
	link: string

	@Field()
	link_text: string

	@Field()
	subject: string

	@Field()
	created_at: Date

	@Field(() => PublicUserAccount)
	triggering_user?: PublicUserAccount
}
