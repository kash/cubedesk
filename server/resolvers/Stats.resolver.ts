import {Authorized, Ctx, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Stats} from '../schemas/Stats.schema';

export async function getStatsByUserId(context: GraphQLContext, userId: string) {
	const {prisma, user} = context;

	const promises = await Promise.all([
		prisma.matchParticipant.findMany({
			include: {
				match: true,
			},
			where: {
				user_id: userId,
				match: {
					NOT: [
						{
							winner_id: null,
						},
					],
				},
			},
		}),
		prisma.friendship.count({
			where: {
				user_id: userId,
			},
		}),
		prisma.profileView.count({
			where: {
				profile_user_id: user.id,
			},
		}),
		prisma.solve.count({
			where: {
				user_id: user.id,
				NOT: {
					match_id: null,
				},
			},
		}),
		prisma.solveView.count({
			where: {
				user_id: userId,
			},
		}),
	]);

	let maxWinStreak = 0;
	const participations = promises[0];
	let tempWinStreak = 0;

	let matchesPlayed = 0;
	let matchesWon = 0;
	let matchesLost = 0;

	for (const part of participations) {
		matchesPlayed++;

		if (part.won) {
			tempWinStreak++;
			matchesWon++;
			continue;
		} else if (part.lost) {
			matchesLost++;
		}

		tempWinStreak = 0;
		maxWinStreak = Math.max(maxWinStreak, tempWinStreak);
	}
	maxWinStreak = Math.max(maxWinStreak, tempWinStreak);

	const friendCount = promises[1];

	let profileViews = promises[2];
	let matchSolveCount = promises[3];
	let matchMaxWinStreak = maxWinStreak;
	let solveViews = promises[4];

	if (!user.is_pro) {
		profileViews = 0;
		matchSolveCount = 0;
		matchMaxWinStreak = 0;
		solveViews = 0;
	}

	return {
		friend_count: friendCount,
		matches_played: matchesPlayed,
		matches_won: matchesWon,
		matches_lost: matchesLost,
		profile_views: profileViews,
		match_solve_count: matchSolveCount,
		match_max_win_streak: matchMaxWinStreak,
		solve_views: solveViews,
	};
}

@Resolver()
export class StatsResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => Stats)
	async stats(@Ctx() context: GraphQLContext) {
		return getStatsByUserId(context, context.user.id);
	}
}
