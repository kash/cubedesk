import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class Stats {
	@Field()
	friend_count: number;

	@Field()
	matches_played: number;

	@Field()
	matches_won: number;

	@Field()
	matches_lost: number;

	@Field()
	matches_tied: number;

	@Field()
	profile_views: number;

	@Field()
	match_solve_count: number;

	@Field()
	match_max_win_streak: number;

	@Field()
	solve_views: number;
}
