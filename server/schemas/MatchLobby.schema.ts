import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class MatchLobby {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	client_id: string;

	@Field()
	cube_type: string;

	@Field()
	player_count: number;

	@Field()
	elo: number;

	@Field()
	created_at: Date;
}
