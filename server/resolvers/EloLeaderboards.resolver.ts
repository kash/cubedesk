import {Arg, Authorized, Ctx, Int, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {getUserEloRating} from '../models/elo_rating';
import {PaginatedEloLeaderboards} from '../schemas/EloRating.schema';
import {PaginationArgsInput} from '../schemas/Pagination.schema';
import {getPaginatedResponse} from '../util/pagination/paginated_response';
import {publicUserInclude} from '../models/user_account';

@Resolver()
export class EloLeaderboardsResolver {
	@Query(() => PaginatedEloLeaderboards)
	async eloLeaderboards(
		@Ctx() context: GraphQLContext,
		@Arg('pageArgs', () => PaginationArgsInput) pageArgs: PaginationArgsInput
	) {
		return getPaginatedResponse({
			tableName: 'eloRating',
			paginationArgs: pageArgs,
			prismaPayload: {
				orderBy: {
					elo_333_rating: 'desc',
				},
				include: {
					user: publicUserInclude,
				},
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => Int)
	async myEloLeaderboardsPosition(@Ctx() context: GraphQLContext) {
		const {prisma, user} = context;

		const list = await prisma.eloRating.findMany({
			orderBy: {
				elo_333_rating: 'desc',
			},
		});

		const myElo = await getUserEloRating(user.id);
	}
}
