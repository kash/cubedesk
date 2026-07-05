import type {ReadStream} from 'fs';
import {TRPCError} from '@trpc/server';
import {Readable} from 'stream';
import {z} from 'zod';
import {deleteTimerBackground, getTimerBackground, uploadTimerBackgroundWithFile} from '../../models/timer_background';
import {logger} from '../../services/logger';
import {protectedProcedure, router} from '../trpc';

export const timerBackgroundRouter = router({
	delete: protectedProcedure.mutation(async ({ctx}) => {
		const background = await getTimerBackground(ctx.user);
		if (!background) {
			throw new TRPCError({code: 'BAD_REQUEST', message: 'No background to delete'});
		}

		await deleteTimerBackground(background);
		return background;
	}),

	// GraphQL multipart uploads are gone; files arrive as base64 (images are
	// resized server-side, so payloads stay small)
	upload: protectedProcedure
		.input(
			z.object({
				fileName: z.string().min(1),
				data: z.string().min(1),
			})
		)
		.mutation(async ({ctx, input}) => {
			const buffer = Buffer.from(input.data, 'base64');
			const fileStream = () => Readable.from(buffer) as unknown as ReadStream;

			const background = await getTimerBackground(ctx.user);
			if (background) {
				await deleteTimerBackground(background);
			}

			try {
				await uploadTimerBackgroundWithFile(ctx.user, input.fileName, fileStream);
			} catch (e) {
				logger.warn('Failed to upload timer background', {
					error: e,
				});
				throw new TRPCError({code: 'INTERNAL_SERVER_ERROR', message: (e as Error).message});
			}

			return getTimerBackground(ctx.user);
		}),
});
