import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {
	createNotificationPreference,
	getNotificationPreferences,
	setNotificationPreference,
} from '@/server/models/notification_preference';
import {NotificationPreferenceSchema} from '@/generated/zod';

export const notificationPreferenceRouter = createTRPCRouter({
	notificationPreferences: userProcedure
		.output(NotificationPreferenceSchema)
		.query(async ({ctx}) => {
			const prefs = await getNotificationPreferences(ctx.me);

			if (!prefs) {
				return createNotificationPreference(ctx.me);
			}

			return prefs;
		}),

	updateNotificationPreferences: userProcedure
		.input(
			z.object({
				key: z.string(),
				value: z.boolean(),
			}),
		)
		.output(NotificationPreferenceSchema)
		.mutation(async ({ctx, input}) => {
			return await setNotificationPreference(ctx.me, input.key, input.value);
		}),
});
