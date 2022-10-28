import {Field, ObjectType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {MatchSession} from './MatchSession.schema';

@ObjectType()
export class ChatMessage {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	match_session_id: string;

	@Field()
	message: string;

	@Field()
	created_at: Date;

	@Field(() => MatchSession)
	match_session?: MatchSession;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}
