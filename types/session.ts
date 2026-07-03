import type {Session as PrismaSession} from '@/generated/prisma/client';

export type Session = Omit<PrismaSession, 'created_at'> & {
	// Dates arrive as ISO strings over tRPC (no transformer is configured)
	created_at: Date | string;
	// Client-only flag for anonymous/demo sessions. Never persisted to the database
	demo_mode?: boolean;
};

export type SessionInput = {
	id?: string;
	name: string;
	order?: number;
};
