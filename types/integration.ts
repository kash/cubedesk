import type {Prisma} from '@/generated/prisma/client';

// tRPC has no schema masking — full Integration rows carry OAuth tokens
// (auth_token/refresh_token), so only these fields may leave the server.
export const safeIntegrationSelect = {
	id: true,
	service_name: true,
	created_at: true,
	auth_expires_at: true,
} satisfies Prisma.IntegrationSelect;

type SafeIntegrationRow = Prisma.IntegrationGetPayload<{select: typeof safeIntegrationSelect}>;

// auth_expires_at is BigInt in the DB; routers convert it to a number before returning
export type SafeIntegration = Omit<SafeIntegrationRow, 'auth_expires_at'> & {auth_expires_at: number};

// Full DB row INCLUDING OAuth secrets (auth_token/refresh_token).
// Server-side use only — never return this shape to clients.
export interface Integration {
	id: string;
	user_id: string;
	service_name: string;
	auth_token: string;
	refresh_token: string;
	auth_expires_at: bigint;
	created_at: Date;
}

export interface WcaAccount {
	id: string;
	url: string | null;
	wca_id: string | null;
	country_iso2: string | null;
	created_at: string | null;
}
