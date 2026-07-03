// Values mirror the SubscriptionStatus enum in server/services/stripe.ts. Kept
// as a literal union so client code can import this file without pulling the
// Stripe SDK into the bundle.
export type MembershipStatus =
	| 'NONE'
	| 'ACTIVE'
	| 'CANCELED'
	| 'INCOMPLETE'
	| 'INCOMPLETE_EXPIRED'
	| 'PAST_DUE'
	| 'TRIALING'
	| 'UNPAID'
	| 'TRIAL_EXPIRED';

export interface MembershipPricing {
	id: string;
	currency: string;
	// Price of the product in the smallest currency unit (e.g. cents)
	unit_amount: number | null;
	interval_count: number;
	interval: string;
}

// All timestamps are unix seconds, straight from the Stripe subscription
export interface Membership {
	status: MembershipStatus;
	canceled_at: number | null;
	ended_at: number | null;
	cancel_at_period_end: boolean;
	current_period_end: number;
	days_until_due: number | null;
	start_date: number;
	pricing: MembershipPricing;
}

export interface MembershipOptions {
	month?: MembershipPricing;
	year?: MembershipPricing;
}
