import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {CustomTrainer} from './CustomTrainer.schema';

@ObjectType()
export class CustomTrainerLike {
	@Field()
	id: string;

	@Field()
	custom_trainer_id: string;

	@Field()
	user_id: string;

	@Field()
	created_at: Date;

	@Field()
	creator_id: string;

	@Field(() => PublicUserAccount)
	creator: PublicUserAccount;

	@Field(() => CustomTrainer)
	custom_trainer: CustomTrainer;

	@Field(() => PublicUserAccount)
	user: PublicUserAccount;
}
