import type {
	Friendship as PrismaFriendship,
	FriendshipRequest as PrismaFriendshipRequest,
	Prisma,
} from '@/generated/prisma/client';
import {publicUserSelect} from './user';

// Dates arrive as ISO strings over tRPC (no transformer is configured)
export type Friendship = Omit<PrismaFriendship, 'created_at'> & {
	created_at: Date | string;
};

export type FriendshipRequest = Omit<PrismaFriendshipRequest, 'created_at' | 'accepted_at'> & {
	created_at: Date | string;
	accepted_at: Date | string | null;
};

export type FriendshipWithOtherUser = Prisma.FriendshipGetPayload<{
	include: {
		other_user: {
			select: typeof publicUserSelect;
		};
	};
}>;

export type FriendshipRequestWithUsers = Prisma.FriendshipRequestGetPayload<{
	include: {
		from_user: {
			select: typeof publicUserSelect;
		};
		to_user: {
			select: typeof publicUserSelect;
		};
	};
}>;
