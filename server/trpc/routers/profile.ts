import type {ReadStream} from 'fs';
import {TRPCError} from '@trpc/server';
import {Readable} from 'stream';
import {z} from 'zod';
import {deleteImage, uploadImageWithFile} from '@/server/models/image';
import {getOrCreateUserProfile, updateUserProfile} from '@/server/models/profile';
import {createProfileView} from '@/server/models/profile_view';
import {getUserTopAverages, getUserTopSolves} from '@/server/models/top_solve';
import {getUserByUsername} from '@/server/models/user_account';
import {serializeSolveTimestamps} from '@/server/util/serialize';
import {protectedProcedure, publicProcedure, router} from '@/server/trpc/trpc';

const profileInput = z.object({
	bio: z.string().nullish(),
	favorite_event: z.string().nullish(),
	main_three_cube: z.string().nullish(),
	three_goal: z.string().nullish(),
	three_method: z.string().nullish(),
	reddit_link: z.string().nullish(),
	twitch_link: z.string().nullish(),
	youtube_link: z.string().nullish(),
	twitter_link: z.string().nullish(),
});

const uploadInput = z.object({
	fileName: z.string().min(1),
	data: z.string().min(1),
});

function base64FileStream(data: string) {
	const buffer = Buffer.from(data, 'base64');
	return () => Readable.from(buffer) as unknown as ReadStream;
}

export const profileRouter = router({
	get: publicProcedure
		.input(
			z.object({
				username: z.string(),
			})
		)
		.query(async ({ctx, input}) => {
			const users = await getUserByUsername(input.username);

			if (!users || !users.length) {
				throw new TRPCError({code: 'NOT_FOUND', message: 'Could not find user with username'});
			}

			const profileUser = users[0];

			const [profile, topSolves, topAverages] = await Promise.all([
				getOrCreateUserProfile(profileUser),
				getUserTopSolves(profileUser),
				getUserTopAverages(profileUser),
			]);

			if (ctx.user?.id !== profileUser.id) {
				await createProfileView(profile, profileUser, ctx.user);
			}

			// Solve rows carry BigInt timestamps that can't be JSON-serialized
			return {
				...profile,
				top_solves: topSolves.map((ts) => ({
					...ts,
					solve: ts.solve ? serializeSolveTimestamps(ts.solve) : ts.solve,
				})),
				top_averages: topAverages.map((ta) => ({
					...ta,
					solve_1: ta.solve_1 ? serializeSolveTimestamps(ta.solve_1) : ta.solve_1,
					solve_2: ta.solve_2 ? serializeSolveTimestamps(ta.solve_2) : ta.solve_2,
					solve_3: ta.solve_3 ? serializeSolveTimestamps(ta.solve_3) : ta.solve_3,
					solve_4: ta.solve_4 ? serializeSolveTimestamps(ta.solve_4) : ta.solve_4,
					solve_5: ta.solve_5 ? serializeSolveTimestamps(ta.solve_5) : ta.solve_5,
				})),
			};
		}),

	update: protectedProcedure
		.input(
			z.object({
				input: profileInput,
			})
		)
		.mutation(async ({ctx, input}) => {
			const profile = await getOrCreateUserProfile(ctx.user);
			await updateUserProfile(profile, input.input);

			return getOrCreateUserProfile(ctx.user);
		}),

	uploadPfp: protectedProcedure.input(uploadInput).mutation(async ({ctx, input}) => {
		const profile = await getOrCreateUserProfile(ctx.user);
		if (profile.pfp_image_id && profile.pfp_image) {
			await deleteImage(profile.pfp_image);
		}

		const image = await uploadImageWithFile(ctx.user, input.fileName, base64FileStream(input.data), {
			width: 400,
			height: 400,
		});

		await updateUserProfile(profile, {
			pfp_image_id: image.id,
		});

		return image;
	}),

	uploadHeader: protectedProcedure.input(uploadInput).mutation(async ({ctx, input}) => {
		const profile = await getOrCreateUserProfile(ctx.user);
		if (profile.header_image_id && profile.header_image) {
			await deleteImage(profile.header_image);
		}

		const image = await uploadImageWithFile(ctx.user, input.fileName, base64FileStream(input.data), {
			width: 1700,
			height: 1700,
		});

		await updateUserProfile(profile, {
			header_image_id: image.id,
		});

		return image;
	}),
});
