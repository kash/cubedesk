import {Field, Float, Int, ObjectType, registerEnumType} from 'type-graphql';
import {Match} from './Match.schema';
import {PublicUserAccount} from './UserAccount.schema';
import {Solve} from './Solve.schema';
import {GameType as DbGameType} from '@prisma/client';
import {GameType} from '../../shared/match/consts';

registerEnumType(GameType, {
	name: 'GameType',
});

@ObjectType()
export class GameSession {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	match_id?: string;

	@Field(() => GameType)
	game_type: DbGameType;

	@Field(() => Int)
	solve_count: number;

	@Field(() => Float)
	total_time: number;

	@Field()
	created_at: Date;

	@Field(() => Match)
	match?: Match;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => [Solve])
	solves?: Solve[];
}
