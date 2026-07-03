import {z} from 'zod';
import {TRPCError} from '@trpc/server';
import {protectedProcedure, router} from '../trpc';
import {getOrCreateNotificationPreferences, setNotificationPreference} from '../../models/notification_preference';

export const notificationPrefRouter = router({
	get: protectedProcedure.query(({ctx}) => getOrCreateNotificationPreferences(ctx.user)),

	set: protectedProcedure
		.input(
			z.object({
				key: z.enum(['friend_request', 'friend_request_accept', 'elo_refund', 'marketing_emails']),
				value: z.boolean(),
			})
		)
		.mutation(({ctx, input}) => setNotificationPreference(ctx.user, input.key, input.value)),

	unsubEmails: protectedProcedure
		.input(
			z.object({
				unsubId: z.string(),
			})
		)
		.mutation(async ({ctx, input}) => {
			const user = await ctx.prisma.userAccount.findFirst({
				where: {
					unsub_id: input.unsubId,
				},
			});

			if (!user) {
				throw new TRPCError({
					code: 'FORBIDDEN',
					message: 'Invalid unsubscribe code',
				});
			}

			await setNotificationPreference(user, 'marketing_emails', false);

			return true;
		}),
});
