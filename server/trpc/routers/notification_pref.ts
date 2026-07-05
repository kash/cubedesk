import {getOrCreateNotificationPreferences, setNotificationPreference} from '@/server/models/notification_preference';
import {protectedProcedure, router} from '@/server/trpc/trpc';
import {z} from 'zod';

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
});
