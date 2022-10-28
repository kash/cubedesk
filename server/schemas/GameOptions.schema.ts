import {Field, InputType, ObjectType} from 'type-graphql';
import {GameType as DbGameType} from '@prisma/client';
import {GameType} from '../../shared/match/consts';

@ObjectType()
export class GameOptions {
	@Field()
	id: string;

	@Field()
	game_session_id?: string;

	@Field()
	match_session_id?: string;

	@Field(() => GameType)
	game_type?: DbGameType;

	@Field()
	cube_type: string;

	@Field()
	elimination_starting_time_seconds: number;

	@Field()
	elimination_percent_change_rate: number;

	@Field()
	head_to_head_target_win_count: number;

	@Field()
	gauntlet_time_multiplier: number;
}

@InputType()
export class GameOptionsInput {
	@Field()
	cube_type: string;

	@Field(() => GameType)
	game_type: DbGameType;

	@Field()
	elimination_starting_time_seconds?: number;

	@Field()
	elimination_percent_change_rate?: number;

	@Field()
	head_to_head_target_win_count?: number;

	@Field()
	gauntlet_time_multiplier?: number;
}
