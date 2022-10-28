import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class NotificationPreference {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	friend_request: boolean;

	@Field()
	friend_request_accept: boolean;

	@Field()
	elo_refund: boolean;

	@Field()
	marketing_emails: boolean;

	@Field()
	created_at: Date;
}
