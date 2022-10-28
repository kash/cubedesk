import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {CustomTrainer} from './CustomTrainer.schema';

@ObjectType()
export class CustomTrainerDownload {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	creator_id: string;

	@Field()
	created_at: Date;

	@Field()
	new_trainer_id: string;

	@Field()
	source_trainer_id: string;

	@Field(() => PublicUserAccount)
	creator: PublicUserAccount;

	@Field(() => CustomTrainer)
	new_trainer: CustomTrainer;

	@Field(() => CustomTrainer)
	source_trainer: CustomTrainer;

	@Field(() => PublicUserAccount)
	user: PublicUserAccount;
}
