import {Field, ObjectType, registerEnumType} from 'type-graphql';
import {SubscriptionStatus} from '../services/stripe';

registerEnumType(SubscriptionStatus, {
	name: 'SubscriptionStatus',
});

@ObjectType()
export class MembershipPricing {
	@Field()
	id: string;

	@Field()
	currency: string;

	@Field()
	unit_amount: number; // Price of the product

	@Field()
	interval_count: number;

	@Field()
	interval: string;
}

@ObjectType()
export class Membership {
	@Field(() => SubscriptionStatus)
	status: SubscriptionStatus;

	@Field()
	canceled_at: number;

	@Field()
	ended_at: number;

	@Field()
	cancel_at_period_end: boolean;

	@Field()
	current_period_end: number;

	@Field()
	days_until_due: number;

	@Field()
	start_date: number;

	@Field(() => MembershipPricing)
	pricing: MembershipPricing;
}

@ObjectType()
export class MembershipOptions {
	@Field()
	month: MembershipPricing;

	@Field()
	year: MembershipPricing;
}
