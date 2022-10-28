import {Field, InputType, Int, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import PaginatedResponse from './Pagination.schema';

@ObjectType()
export class CustomTrainer {
	@Field()
	id: string;

	@Field()
	solution?: string;

	@Field()
	scrambles?: string;

	@Field()
	alt_solutions?: string;

	// This is always "custom" just need it for consistency
	@Field()
	algo_type: string;

	@Field()
	group_name: string;

	@Field()
	colors?: string;

	@Field()
	three_d: boolean;

	@Field()
	cube_type: string;

	@Field()
	key: string;

	@Field()
	user_id: string;

	@Field()
	created_at: Date;

	@Field()
	name: string;

	@Field(() => Int)
	like_count: number;

	@Field()
	private: boolean;

	@Field()
	copy_of_id?: string;

	@Field()
	description: string;

	@Field()
	downloaded: boolean;

	@Field(() => CustomTrainer)
	copy_of?: CustomTrainer;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}

@ObjectType()
export class PaginatedCustomTrainers extends PaginatedResponse(CustomTrainer) {}

@InputType()
export class CustomTrainerCreateInput {
	@Field({nullable: false})
	solution: string;

	@Field()
	colors?: string;

	@Field({nullable: false})
	cube_type: string;

	@Field()
	group_name: string;

	@Field()
	scrambles?: string;

	@Field()
	alt_solutions: string;

	@Field()
	three_d: boolean;

	@Field({nullable: false})
	name: string;

	@Field()
	private: boolean;

	@Field()
	description?: string;
}
