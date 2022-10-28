import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class Store {
	@Field()
	json: string;
}
