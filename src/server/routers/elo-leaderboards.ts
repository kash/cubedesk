import {z} from 'zod';
import {createTRPCRouter, publicProcedure, userProcedure} from '@/server/trpc';
import {getPaginatedResponse} from '@/server/utils/pagination';
import {publicUserInclude} from '@/server/models/user_account';
import {getUserEloRating} from '@/server/models/elo_rating';
import {getPrismaClient} from '@/server/services/database';

export const eloLeaderboardsRouter = createTRPCRouter({
	// Get ELO leaderboards with pagination
	eloLeaderboards: publicProcedure
		.input(
			z.object({
				page: z.number().min(0).default(0),
				pageSize: z.number().min(1).max(100).default(25),
				searchQuery: z.string().default(''),
			}),
		)
		.query(async ({input}) => {
			return getPaginatedResponse({
				tableName: 'eloRating',
				paginationArgs: input,
				prismaPayload: {
					orderBy: {
						elo_333_rating: 'desc',
					},
					include: {
						user: publicUserInclude,
					},
				},
			});
		}),

	// Get current user's position in ELO leaderboards
	myEloLeaderboardsPosition: userProcedure.query(async ({ctx}) => {
		const prisma = getPrismaClient();
		const userId = ctx.me.id;

		const list = await prisma.eloRating.findMany({
			orderBy: {
				elo_333_rating: 'desc',
			},
			select: {
				user_id: true,
			},
		});

		const myElo = await getUserEloRating(userId);
		const position = list.findIndex((rating) => rating.user_id === userId);

		return position >= 0 ? position + 1 : null;
	}),
});
