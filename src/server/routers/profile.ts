import {z} from 'zod';
import {createTRPCRouter, userProcedure, publicProcedure} from '@/server/trpc';
import {TRPCError} from '@trpc/server';
import {getPrismaClient} from '@/server/services/database';

const ProfileInputSchema = z.object({
	bio: z.string().max(250).optional(),
	three_method: z.string().optional(),
	three_goal: z.string().optional(),
	main_three_cube: z.string().optional(),
	favorite_event: z.string().optional(),
	twitch_link: z.string().url().optional().nullable(),
	youtube_link: z.string().url().optional().nullable(),
	reddit_link: z.string().url().optional().nullable(),
	twitter_link: z.string().url().optional().nullable(),
});

export const profileRouter = createTRPCRouter({
	getByUsername: publicProcedure
		.input(z.object({
			username: z.string(),
		}))
		.query(async ({input}) => {
			const prisma = getPrismaClient();
			
			const user = await prisma.userAccount.findUnique({
				where: {
					username: input.username,
				},
				include: {
					profile: true,
					integrations: true,
				},
			});

			if (!user) {
				throw new TRPCError({
					code: 'NOT_FOUND',
					message: 'User not found',
				});
			}

			// Get PBs (personal bests)
			const topSolves = await prisma.topSolve.findMany({
				where: {
					user_id: user.id,
				},
			});

			const topAverages = await prisma.topAverage.findMany({
				where: {
					user_id: user.id,
				},
			});

			const pbs: Record<string, {single?: any; average?: any}> = {};
			
			for (const solve of topSolves) {
				if (!pbs[solve.cube_type]) {
					pbs[solve.cube_type] = {};
				}
				pbs[solve.cube_type].single = solve;
			}

			for (const avg of topAverages) {
				if (!pbs[avg.cube_type]) {
					pbs[avg.cube_type] = {};
				}
				pbs[avg.cube_type].average = avg;
			}

			return {
				user,
				profile: user.profile,
				pfpImage: user.pfp_image,
				headerImage: user.header_image,
				pbs,
			};
		}),

	update: userProcedure
		.input(z.object({
			input: ProfileInputSchema,
		}))
		.mutation(async ({ctx, input}) => {
			const prisma = getPrismaClient();

			// Validate links
			if (input.input.twitch_link && !/https:\/\/(www\.)?twitch\.tv.+/.test(input.input.twitch_link)) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid Twitch link',
				});
			}

			if (input.input.youtube_link && 
				!/https:\/\/(www\.)?youtube\.com\/(user|channel|u|c)\/.+/.test(input.input.youtube_link) &&
				!/https:\/\/(www\.)?youtube\.com\/@.+/.test(input.input.youtube_link)) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid YouTube link',
				});
			}

			if (input.input.reddit_link && !/https:\/\/(www\.)?reddit\.com\/user\/.+/.test(input.input.reddit_link)) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid Reddit Profile link',
				});
			}

			if (input.input.twitter_link && !/https:\/\/(www\.)?twitter\.com\/.+/.test(input.input.twitter_link)) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'Invalid Twitter Profile link',
				});
			}

			const profile = await prisma.profile.update({
				where: {
					user_id: ctx.me.id,
				},
				data: input.input,
			});

			return profile;
		}),
});