import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class TrainerFavorite {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field()
	cube_key: string;

	@Field()
	created_at: Date;
}
