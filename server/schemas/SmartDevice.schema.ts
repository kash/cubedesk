import {Field, ObjectType, InputType} from 'type-graphql';
import {Solve} from './Solve.schema';
import {PublicUserAccount} from './UserAccount.schema';

@ObjectType()
export class SmartDevice {
	@Field()
	id: string;

	@Field()
	name: string;

	@Field()
	internal_name: string;

	@Field()
	device_id: string;

	@Field()
	user_id: string;

	@Field()
	created_at: Date;

	@Field(() => [Solve])
	solves?: Solve[];

	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;
}

@InputType()
export class SmartDeviceInput {
	@Field()
	device_id: string;
}
