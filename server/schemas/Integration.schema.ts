import {Field, ObjectType, registerEnumType} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';
import {GraphQLBigInt} from 'graphql-scalars';

export enum IntegrationTypeSchema {
	discord = 'discord',
	wca = 'wca',
}

registerEnumType(IntegrationTypeSchema, {
	name: 'IntegrationType',
});

@ObjectType()
export class Integration {
	@Field()
	id: string;

	@Field()
	user_id: string;

	@Field(() => IntegrationTypeSchema)
	service_name: string;

	@Field()
	auth_token: string;

	@Field()
	refresh_token: string;

	@Field(() => GraphQLBigInt)
	auth_expires_at: bigint;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}
