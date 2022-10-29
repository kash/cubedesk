import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {NotificationPreference} from '../schemas/NotificationPreference.schema';
import {
	createNotificationPreference,
	getNotificationPreferences,
	setNotificationPreference,
} from '../models/notification_preference';

@Resolver()
export class NotificationPreferenceResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => NotificationPreference)
	async notificationPreferences(@Ctx() context: GraphQLContext) {
		const {user} = context;

		const prefs = await getNotificationPreferences(user);

		if (!prefs) {
			return createNotificationPreference(user);
		}

		return prefs;
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => NotificationPreference)
	async updateNotificationPreferences(
		@Ctx() context: GraphQLContext,
		@Arg('key') key: string,
		@Arg('value') value: boolean
	) {
		const {user} = context;
		return await setNotificationPreference(user, key, value);
	}
}
