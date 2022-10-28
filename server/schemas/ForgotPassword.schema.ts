import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class ForgotPassword {
	@Field()
	id: string;

	@Field()
	code: string

	@Field()
	user_id: string

	@Field()
	created_at: Date
}
