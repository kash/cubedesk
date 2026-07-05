import {z} from 'zod';
import {protectedProcedure, router} from '../trpc';
import {getSettingsByUserId, setSettingByUserId} from '../../models/settings';
import type {Stats} from '@/types/stats';
import type {StatsModule, StatsModuleBlock} from '@/types/stats-module';

const statsModuleBlockSchema = z.object({
	statType: z.enum(['average', 'single']),
	sortBy: z.enum(['best', 'worst', 'current']),
	session: z.boolean(),
	colorName: z.string(),
	averageCount: z.number().int().min(0).max(10000),
});

async function getStatsModuleByUserId(userId: string): Promise<StatsModule | null> {
	const settings = await getSettingsByUserId(userId);

	if (settings?.stats_module_json) {
		return JSON.parse(settings.stats_module_json);
	}

	return null;
}

export const statsRouter = router({
	overview: protectedProcedure.query(async ({ctx}): Promise<Stats> => {
		const {prisma, user} = ctx;

		const [participations, friendCount, profileViews, matchSolveCount, solveViews] = await Promise.all([
			prisma.matchParticipant.findMany({
				include: {
					match: true,
				},
				where: {
					user_id: user.id,
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
					user_id: user.id,
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
					user_id: user.id,
				},
			}),
		]);

		let maxWinStreak = 0;
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

		return {
			friend_count: friendCount,
			matches_played: matchesPlayed,
			matches_won: matchesWon,
			matches_lost: matchesLost,
			profile_views: profileViews,
			match_solve_count: matchSolveCount,
			match_max_win_streak: maxWinStreak,
			solve_views: solveViews,
		};
	}),

	module: protectedProcedure.query(({ctx}) => getStatsModuleByUserId(ctx.user.id)),

	updateModuleBlocks: protectedProcedure
		.input(
			z.object({
				blocks: z.array(statsModuleBlockSchema),
			})
		)
		.mutation(async ({ctx, input}) => {
			const statsModule = (await getStatsModuleByUserId(ctx.user.id)) ?? {blocks: []};
			statsModule.blocks = input.blocks as StatsModuleBlock[];

			await setSettingByUserId(ctx.user.id, 'stats_module_json', JSON.stringify(statsModule));

			return getStatsModuleByUserId(ctx.user.id);
		}),
});
