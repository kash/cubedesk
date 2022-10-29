import {Arg, Authorized, Ctx, Mutation, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {setNotificationPreference} from '../models/notification_preference';

function getUserByUnsubId(context: GraphQLContext, unsubId: string) {
	const {prisma} = context;

	return prisma.userAccount.findFirst({
		where: {
			unsub_id: unsubId,
		},
	});
}

@Resolver()
export class UnsubEmailsResolver {
	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Boolean)
	async unsubEmails(@Ctx() context: GraphQLContext, @Arg('unsubId') unsubId: string) {
		const user = await getUserByUnsubId(context, unsubId);

		if (!user) {
			throw new GraphQLError(ErrorCode.FORBIDDEN, 'Invalid unsubscribe code');
		}

		await setNotificationPreference(user, 'marketing_emails', false);

		return true;
	}
}
