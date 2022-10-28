import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {MatchParticipant} from './MatchParticipant.schema';
import {MatchSession} from './MatchSession.schema';
import {EloLog} from './EloLog.schema';

@ObjectType()
export class Match {
	@Field()
	id: string;

	@Field()
	winner_id?: string;

	@Field()
	link_code: string;

	@Field()
	spectate_code?: string;

	@Field()
	match_session_id: string;

	@Field()
	aborted: boolean;

	@Field()
	ended_at?: Date;

	@Field()
	started_at?: Date;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	winner?: PublicUserAccount;

	@Field(() => MatchSession)
	match_session?: MatchSession;

	@Field(() => [MatchParticipant])
	participants?: MatchParticipant[];

	@Field(() => [EloLog])
	elo_log?: EloLog[];
}
