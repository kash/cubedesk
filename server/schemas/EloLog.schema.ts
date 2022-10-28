import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Match} from './Match.schema';

@ObjectType()
export class EloLog {
	@Field()
	id: string;

	@Field()
	player_id: string;

	@Field()
	player_new_game_count: string;

	@Field()
	opponent_id: string;

	@Field()
	opponent_new_game_count: string;

	@Field()
	cube_type: string;

	@Field()
	match_id: string;

	@Field()
	elo_change: number;

	@Field()
	player_new_elo_rating: number;

	@Field()
	opponent_new_elo_rating: number;

	@Field(() => Date)
	updated_at: Date;

	@Field(() => Date)
	created_at: Date;

	@Field(() => Match)
	match?: Match;

	@Field(() => PublicUserAccount)
	player?: PublicUserAccount;

	@Field(() => PublicUserAccount)
	opponent?: PublicUserAccount;
}
