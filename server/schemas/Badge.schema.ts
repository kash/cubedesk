import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {BadgeType} from './BadgeType.schema';

@ObjectType()
export class Badge {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	badge_type_id: string;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => BadgeType)
	badge_type?: BadgeType;
}
