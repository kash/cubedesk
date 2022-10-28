import {Arg, Ctx, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {PaginationArgsInput} from '../schemas/Pagination.schema';
import {getPaginatedResponse, PaginatedRequestInput} from '../util/pagination/paginated_response';
import {PaginatedUserAccounts, PublicUserAccount} from '../schemas/UserAccount.schema';
import {publicUserInclude} from '../models/user_account';

@Resolver()
export class UserSearchResolver {
	@Query(() => PaginatedUserAccounts)
	async userSearch(
		@Ctx() context: GraphQLContext,
		@Arg('pageArgs', () => PaginationArgsInput) pageArgs: PaginationArgsInput
	): Promise<PaginatedUserAccounts> {
		const requestInput: PaginatedRequestInput = {
			paginationArgs: pageArgs,
			tableName: 'userAccount',
			prismaPayload: {
				where: {
					username: {
						contains: pageArgs.searchQuery,
						mode: 'insensitive',
					},
				},
				...publicUserInclude,
			},
		};

		return getPaginatedResponse<PublicUserAccount>(requestInput);
	}
}
