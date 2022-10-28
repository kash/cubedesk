import {Field, Int, InterfaceType, ObjectType} from 'type-graphql';
import {Profile} from './Profile.schema';
import {Integration} from './Integration.schema';
import {Badge} from './Badge.schema';
import {Setting} from './Setting.schema';
import {ChatMessage} from './ChatMessage.schema';
import {Report} from './Report.schema';
import {BanLog} from './BanLog.schema';
import PaginatedResponse from './Pagination.schema';
import {TimerBackground} from './TimerBackground.schema';
import {SubscriptionStatus} from '../services/stripe';
import {EloRating} from './EloRating.schema';
import {NotificationPreference} from './NotificationPreference.schema';
import {TopSolve} from './TopSolve.schema';
import {TopAverage} from './TopAverage.schema';

@InterfaceType()
class IPublicUserAccount {
	@Field()
	id: string;

	@Field()
	admin: boolean;

	@Field()
	mod: boolean;

	@Field()
	created_at: Date;

	@Field()
	username: string;

	@Field()
	verified: boolean;

	@Field()
	is_pro: boolean;

	@Field()
	last_solve_at: Date;

	@Field()
	banned_forever: boolean;

	@Field({nullable: true})
	banned_until?: Date;

	@Field(() => Profile)
	profile?: Profile;

	@Field(() => EloRating)
	elo_rating?: EloRating;

	@Field(() => [Integration])
	integrations?: Integration[];

	@Field(() => [Badge])
	badges?: Badge[];

	@Field(() => [TopSolve])
	top_solves?: TopSolve[];

	@Field(() => [TopAverage])
	top_averages?: TopAverage[];
}

@ObjectType()
export class UserAccountMatchesSummary {
	@Field()
	count: number;

	@Field()
	wins: number;

	@Field()
	losses: number;
}

@ObjectType()
export class UserAccountSolvesSummary {
	@Field()
	count: number;

	@Field()
	average: number;

	@Field()
	min_time: number;

	@Field()
	max_time: number;

	@Field()
	sum: number;

	@Field()
	cube_type: string;
}

@ObjectType()
export class UserAccountSummary {
	@Field(() => UserAccountMatchesSummary)
	matches: UserAccountMatchesSummary;

	@Field(() => [UserAccountSolvesSummary])
	match_solves: UserAccountSolvesSummary[];

	@Field(() => [UserAccountSolvesSummary])
	timer_solves: UserAccountSolvesSummary[];

	@Field(() => Int)
	solves: number;

	@Field(() => Int)
	reports_for: number;

	@Field(() => Int)
	reports_created: number;

	@Field(() => Int)
	profile_views: number;

	@Field(() => Int)
	bans: number;
}

@InterfaceType({implements: IPublicUserAccount})
class IUserAccount extends IPublicUserAccount {
	@Field()
	email: string;

	@Field()
	first_name: string;

	@Field()
	last_name: string;

	@Field()
	offline_hash: string;

	@Field(() => SubscriptionStatus)
	pro_status?: SubscriptionStatus;

	@Field()
	join_country: string;

	@Field(() => TimerBackground)
	timer_background?: TimerBackground;

	@Field(() => [BanLog])
	bans?: BanLog[];
}

@InterfaceType({implements: IUserAccount})
class IUserAccountForAdmin extends IUserAccount {
	@Field()
	email: string;

	@Field()
	first_name: string;

	@Field()
	last_name: string;

	@Field()
	join_ip: string;

	@Field()
	join_country: string;

	@Field(() => [Report])
	reports_for?: Report[];

	@Field(() => [ChatMessage])
	chat_messages?: ChatMessage[];

	@Field(() => NotificationPreference)
	notification_preferences?: NotificationPreference;

	@Field(() => Setting)
	settings?: Setting;

	@Field(() => UserAccountSummary)
	summary?: UserAccountSummary;
}

@InterfaceType({implements: IUserAccountForAdmin})
class IInternalUserAccount extends IUserAccountForAdmin {
	@Field()
	password: string;

	@Field()
	stripe_customer_id: string;
}

@ObjectType({implements: IPublicUserAccount})
export class PublicUserAccount extends IPublicUserAccount {}

@ObjectType({implements: [IPublicUserAccount, IUserAccount]})
export class UserAccount extends IUserAccount {}

@ObjectType({implements: [IPublicUserAccount, IUserAccount, IUserAccountForAdmin]})
export class UserAccountForAdmin extends IUserAccountForAdmin {}

@ObjectType({implements: [IPublicUserAccount, IUserAccount, IUserAccountForAdmin, IInternalUserAccount]})
export class InternalUserAccount extends IInternalUserAccount {}

@ObjectType()
export class PaginatedUserAccounts extends PaginatedResponse(PublicUserAccount) {}

@ObjectType()
export class PaginatedUserAccountsForAdmin extends PaginatedResponse(UserAccount) {}
