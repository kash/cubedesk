import {createTRPCRouter, userProcedure} from '@/server/trpc';

export const friendshipRequestRouter = createTRPCRouter({
	// Get sent friendship requests
	sent: userProcedure.input(paginationArgsInput).query(async ({ctx, input}) => {
		return getPaginatedFriendsResponse(
			ctx.me.id,
			input,
			'friendshipRequest',
			'from_id',
			'to_user',
		);
	}),

	received: userProcedure.query(async ({ctx}) => {
		return ctx.prisma.friendshipRequest.findMany({
			where: {
				receiverId: ctx.user.id,
			},
		});
	}),
});
