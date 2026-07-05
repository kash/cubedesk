import type {Prisma} from '@/generated/prisma/client';
import {publicUserSelect} from '@/types/user';

// Admin view of a user. Extends the public-safe shape with contact/moderation
// data but still omits secrets (password hash, OAuth tokens).
export const adminUserSelect = {
	...publicUserSelect,
	email: true,
	join_country: true,
	join_ip: true,
	badges: {
		include: {
			badge_type: true,
		},
	},
	reports_for: {
		orderBy: {
			created_at: 'desc' as const,
		},
	},
	bans: {
		orderBy: {
			created_at: 'desc' as const,
		},
	},
	chat_messages: {
		orderBy: {
			created_at: 'desc' as const,
		},
	},
	settings: true,
} satisfies Prisma.UserAccountSelect;

export interface UserAccountSolvesSummary {
	cube_type: string | null;
	count: number;
	average: number | null;
	min_time: number | null;
	max_time: number | null;
	sum: number | null;
}

export interface UserAccountMatchesSummary {
	count: number;
	wins: number;
	losses: number;
}

export interface UserAccountSummary {
	solves: number;
	reports_created: number;
	reports_for: number;
	profile_views: number;
	bans: number;
	matches: UserAccountMatchesSummary;
	timer_solves: UserAccountSolvesSummary[];
	match_solves: UserAccountSolvesSummary[];
}

export type AdminUser = Prisma.UserAccountGetPayload<{select: typeof adminUserSelect}> & {
	summary: UserAccountSummary;
};
