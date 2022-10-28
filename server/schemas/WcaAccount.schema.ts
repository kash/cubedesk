import {Field, ObjectType} from 'type-graphql';

@ObjectType()
export class WcaAccount {
	@Field()
	id: string;

	@Field()
	url: string

	@Field()
	wca_id: string

	@Field()
	country_iso2: string

	@Field()
	created_at: string
}
