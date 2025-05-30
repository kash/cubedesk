import {z} from 'zod';

export enum SubscriptionStatus {
	NONE = 'NONE',
	ACTIVE = 'ACTIVE',
	CANCELED = 'CANCELED',
	INCOMPLETE = 'INCOMPLETE',
	INCOMPLETE_EXPIRED = 'INCOMPLETE_EXPIRED',
	PAST_DUE = 'PAST_DUE',
	TRIALING = 'TRIALING',
	UNPAID = 'UNPAID',
	TRIAL_EXPIRED = 'TRIAL_EXPIRED',
}

export const MembershipPricingSchema = z.object({
	id: z.string(),
	currency: z.string(),
	interval: z.string(),
	interval_count: z.number(),
	unit_amount: z.number(),
});

export const MembershipSchema = z.object({
	status: z.nativeEnum(SubscriptionStatus),
	current_period_end: z.number(),
	cancel_at_period_end: z.boolean(),
	canceled_at: z.number().nullable(),
	ended_at: z.number().nullable(),
	days_until_due: z.number().nullable(),
	start_date: z.number(),
	pricing: MembershipPricingSchema,
});

export const MembershipOptionsSchema = z.object({
	month: MembershipPricingSchema,
	year: MembershipPricingSchema,
});

export type MembershipPricing = z.infer<typeof MembershipPricingSchema>;
export type Membership = z.infer<typeof MembershipSchema>;
export type MembershipOptions = z.infer<typeof MembershipOptionsSchema>;
