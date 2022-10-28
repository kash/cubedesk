import {Field, ObjectType, InputType} from 'type-graphql';

@InputType()
export class CustomCubeTypeInput {
	@Field()
	scramble: string

	@Field()
	name: string

	@Field()
	private: boolean
}

@ObjectType()
export class CustomCubeType {
	@Field()
	id: string;

	@Field()
	user_id: string

	@Field()
	scramble: string

	@Field()
	name: string

	@Field()
	private: boolean

	@Field()
	created_at: Date
}
