import {Field, ObjectType, Int} from 'type-graphql';
import {PublicUserAccount} from './UserAccount.schema';

@ObjectType()
export class Report {
	@Field()
	id: string;

	@Field()
	created_by_id: string;

	@Field()
	reason: string;

	@Field()
	reported_user_id: string;

	@Field()
	resolved_at: Date;

	@Field()
	created_at: Date;

	@Field(() => PublicUserAccount)
	created_by?: PublicUserAccount;

	@Field(() => PublicUserAccount)
	reported_user?: PublicUserAccount;
}

@ObjectType()
export class ReportSummary {
	@Field(() => PublicUserAccount)
	user?: PublicUserAccount;

	@Field(() => Int)
	count: number;

	@Field()
	first_report: Date;

	@Field()
	last_report: Date;

	@Field(() => [Report])
	reports?: Report[];
}
