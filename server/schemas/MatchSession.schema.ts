import {Field, ObjectType, InputType, Int} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {MatchParticipant} from './MatchParticipant.schema';
import {ChatMessage} from './ChatMessage.schema';
import {GameType as DbGameType} from '@prisma/client';
import {GameOptions} from './GameOptions.schema';
import {GameType} from '../../shared/match/consts';

@InputType()
export class MatchSessionInput {
	@Field(() => Int)
	min_players: number;

	@Field(() => Int)
	max_players: number;

	@Field(() => GameType)
	match_type: DbGameType;

	@Field()
	cube_type?: string;

	@Field()
	head_to_head_target_win_count?: number;
}

@ObjectType()
export class MatchSession {
	@Field()
	id: string;

	@Field()
	created_by_id: string;

	@Field()
	custom_match: boolean;

	@Field()
	match_type: string;

	@Field()
	rated: boolean;

	@Field(() => Int)
	min_players: number;

	@Field(() => Int)
	max_players: number;

	@Field()
	created_at: Date;

	@Field(() => GameOptions)
	game_options?: GameOptions;

	@Field(() => PublicUserAccount)
	winner?: PublicUserAccount;

	@Field(() => PublicUserAccount)
	created_by?: PublicUserAccount;

	@Field(() => [MatchParticipant])
	participants?: MatchParticipant[];

	@Field(() => [ChatMessage])
	chat_messages?: ChatMessage[];
}
