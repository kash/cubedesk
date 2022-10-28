import {Arg, Authorized, Ctx, Mutation, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';

function updateUserAccountById(context: GraphQLContext, input) {
	const {prisma, user} = context;

	return prisma.userAccount.update({
		where: {
			id: user.id,
		},
		data: {
			...input,
		},
	});
}

@Resolver()
export class UserAccountResolver {
	@Authorized([Role.LOGGED_IN])
	@Mutation(() => String)
	async updateOfflineHash(@Ctx() context: GraphQLContext, @Arg('hash') hash: string) {
		await updateUserAccountById(context, {offline_hash: hash});
		return hash;
	}
}
