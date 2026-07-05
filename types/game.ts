import type {Prisma} from '@/generated/prisma/client';
import {publicUserSelect} from '@/types/user';

export const gameSessionInclude = {
	user: {
		select: publicUserSelect,
	},
	solves: {
		orderBy: {
			created_at: 'desc' as const,
		},
	},
	match: {
		include: {
			participants: {
				include: {
					user: {
						select: publicUserSelect,
					},
				},
			},
			match_session: true,
		},
	},
} satisfies Prisma.GameSessionInclude;

export type GameSessionWithRelations = Prisma.GameSessionGetPayload<{include: typeof gameSessionInclude}>;
