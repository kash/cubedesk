import {z} from 'zod';
import {createTRPCRouter, userProcedure} from '@/server/trpc';
import {
	createNotificationPreference,
	getNotificationPreferences,
	setNotificationPreference,
} from '@/server/models/notification_preference';

// Zod schema matching the GraphQL types
const NotificationPreferenceSchema = z.object({
	id: z.string(),
	user_id: z.string(),
	friend_request: z.boolean(),
	friend_request_accept: z.boolean(),
	elo_refund: z.boolean(),
	marketing_emails: z.boolean(),
	created_at: z.date(),
});

type NotificationPreference = z.infer<typeof NotificationPreferenceSchema>;

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
		.input(z.object({
			key: z.string(),
			value: z.boolean(),
		}))
		.output(NotificationPreferenceSchema)
		.mutation(async ({ctx, input}) => {
			return await setNotificationPreference(ctx.me, input.key, input.value);
		}),
});