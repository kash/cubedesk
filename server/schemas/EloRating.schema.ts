import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Profile} from './Profile.schema';
import PaginatedResponse from './Pagination.schema';

@ObjectType()
export class EloRating {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	profile_id: string;

	@Field()
	elo_overall_rating: number;

	@Field()
	games_overall_count: number;

	@Field()
	elo_222_rating: number;

	@Field()
	games_222_count: number;

	@Field()
	elo_333_rating: number;

	@Field()
	games_333_count: number;

	@Field()
	elo_444_rating: number;

	@Field()
	games_444_count: number;

	@Field(() => Date)
	updated_at: Date;

	@Field(() => Date)
	created_at: Date;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => Profile)
	profile?: Profile;
}

@ObjectType()
export class PaginatedEloLeaderboards extends PaginatedResponse(EloRating) {}
