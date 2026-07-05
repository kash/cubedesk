import type {ChatMessage, NotificationPreference, Prisma, Report, Setting} from '@/generated/prisma/client';
import type {UserAccountSummary} from './admin';
import type {Badge} from './badge';
import type {BanLog} from './ban-log';
import type {EloRating} from './elo';
import type {Integration} from './integration';
import type {Profile} from './profile';
import type {TimerBackground} from './timer-background';
import type {TopAverage, TopSolve} from './top-solve';

// Public-safe user shape. Unlike GraphQL, tRPC does not mask fields through a schema,
// so anything selected here goes straight to the wire — never widen integrations
// beyond id/service_name (the full rows contain auth tokens).
export const publicUserSelect = {
	id: true,
	admin: true,
	mod: true,
	created_at: true,
	username: true,
	verified: true,
	banned_forever: true,
	banned_until: true,
	integrations: {
		select: {
			id: true,
			service_name: true,
		},
	},
	elo_rating: true,
	profile: {
		include: {
			pfp_image: true,
		},
	},
} satisfies Prisma.UserAccountSelect;

export type PublicUser = Prisma.UserAccountGetPayload<{select: typeof publicUserSelect}>;

// Shape of user.me — the public-safe select plus the logged-in user's own
// account fields. Still excludes secrets (password, tokens).
export const meUserSelect = {
	...publicUserSelect,
	email: true,
	first_name: true,
	last_name: true,
	join_country: true,
	offline_hash: true,
	last_solve_at: true,
	timer_background: true,
} satisfies Prisma.UserAccountSelect;

export type MeUser = Prisma.UserAccountGetPayload<{select: typeof meUserSelect}>;

// The interfaces below were transcribed 1:1 from the deleted type-graphql
// schema classes (server/schemas/UserAccount.schema.ts). They describe the
// shapes the client has always consumed; prefer Prisma-derived types
// (PublicUser, MeUser, AdminUser) for new code.
export interface PublicUserAccount {
	id: string;
	admin: boolean;
	mod: boolean;
	created_at: Date;
	username: string | null;
	verified: boolean;
	// Not part of publicUserSelect, so most payloads omit it
	last_solve_at?: Date | null;
	banned_forever: boolean;
	banned_until?: Date | null;
	profile?: Profile | null;
	elo_rating?: EloRating | null;
	// Only id/service_name are public-safe — full Integration rows contain auth tokens
	integrations?: Pick<Integration, 'id' | 'service_name'>[];
	badges?: Badge[];
	top_solves?: TopSolve[];
	top_averages?: TopAverage[];
}

export interface UserAccount extends PublicUserAccount {
	email: string;
	first_name: string;
	last_name: string;
	offline_hash: string | null;
	join_country: string;
	timer_background?: TimerBackground;
	bans?: BanLog[];
}

export interface UserAccountForAdmin extends UserAccount {
	join_ip: string;
	reports_for?: Report[];
	chat_messages?: ChatMessage[];
	notification_preferences?: NotificationPreference;
	settings?: Setting;
	summary?: UserAccountSummary;
}

export interface InternalUserAccount extends UserAccountForAdmin {
	password: string;
}

// Minimal user shape needed to send emails/notifications. Satisfied by both the
// legacy schema classes and generated Prisma rows during the GraphQL→tRPC migration
export type EmailableUser = {
	id: string;
	email: string;
	first_name?: string | null;
	username?: string | null;
	join_country?: string | null;
	unsub_id?: string | null;
};
