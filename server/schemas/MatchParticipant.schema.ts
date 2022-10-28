import {Field, ObjectType, Int} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {Solve} from './Solve.schema';
import {Match} from './Match.schema';

@ObjectType()
export class MatchParticipant {
	@Field()
	id: string;

	@Field()
	match_id: string;

	@Field()
	user_id: string;

	@Field(() => Int)
	position: number;

	@Field()
	resigned: boolean;

	@Field()
	forfeited: boolean;

	@Field()
	won: boolean;

	@Field()
	lost: boolean;

	@Field()
	created_at: Date;

	@Field(() => Match)
	match?: Match;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => [Solve])
	solves?: Solve[];
}
