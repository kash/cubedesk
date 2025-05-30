import type {Prisma} from '../../node_modules/.prisma/client';

export type UserAccount = Prisma.UserAccountGetPayload<{
	omit: {
		password: false;
	};
}>;

export type InternalUserAccount = Prisma.UserAccountGetPayload<{}>;

export type PublicUserAccount = Prisma.UserAccountGetPayload<{
	select: {
		id: true;
		username: true;
		email: true;
		created_at: true;
		updated_at: true;
	};
}>;
