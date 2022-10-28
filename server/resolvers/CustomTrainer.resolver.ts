import {Arg, Args, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {CustomTrainer, CustomTrainerCreateInput, PaginatedCustomTrainers} from '../schemas/CustomTrainer.schema';
import {publicUserInclude} from '../models/user_account';
import {getPaginatedResponse, PaginatedRequestInput} from '../util/pagination/paginated_response';
import {PaginationArgs} from '../schemas/Pagination.schema';
import {generateUUID} from '../../shared/code';

const publicTrainerWhere = {
	private: false,
	OR: [
		{
			copy_of_id: null,
		},
		{
			copy_of_id: undefined,
		},
	],
};

export async function getCustomTrainerById({prisma}: GraphQLContext, id: string): Promise<CustomTrainer> {
	return prisma.customTrainer.findUnique({
		where: {id},

	});
}

export async function getCustomTrainerByIdWithIncludes({prisma}: GraphQLContext, id: string) {
	return prisma.customTrainer.findUnique({
		where: {
			id,
		},
		include: {
			user: publicUserInclude,
			copy_of: {
				include: {
					user: publicUserInclude
				}
			}
		},
	});
}

export async function getCustomTrainersByUser({prisma, user}: GraphQLContext) {
	return prisma.customTrainer.findMany({
		where: {
			user_id: user.id,
		},
		include: {
			user: publicUserInclude,
			copy_of: {
				include: {
					user: publicUserInclude
				}
			}
		},
	});
}

export async function createCustomTrainer(context: GraphQLContext, data: CustomTrainerCreateInput) {
	const {prisma, user} = context;
	const id = generateUUID();

	const newTrainer = await prisma.customTrainer.create({
		data: {
			...data,
			id,
			downloaded: false,
			key: id,
			user_id: user.id,
		},
	});

	return getCustomTrainerById(context, newTrainer.id);
}

@Resolver()
export class CustomTrainerResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [CustomTrainer])
	async customTrainers(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		return getCustomTrainersByUser(context);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => CustomTrainer)
	async customTrainer(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		const customTrainer = await getCustomTrainerByIdWithIncludes(context, id);

		if (customTrainer.user_id !== context.user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return customTrainer;
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => PaginatedCustomTrainers)
	async publicCustomTrainers(
		@Ctx() context: GraphQLContext,
		@Args() paginationArgs: PaginationArgs
	): Promise<PaginatedCustomTrainers> {
		const requestInput: PaginatedRequestInput = {
			paginationArgs,
			tableName: 'customTrainer',
			prismaPayload: {
				where: publicTrainerWhere,
				orderBy: {
					like_count: 'desc',
				},
				include: {
					user: publicUserInclude,
				},
			},
		};

		return getPaginatedResponse<CustomTrainer>(requestInput);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainer)
	async createCustomTrainer(
		@Ctx() context: GraphQLContext,
		@Arg('data') data: CustomTrainerCreateInput
	): Promise<CustomTrainer> {
		return createCustomTrainer(context, data);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainer)
	async updateCustomTrainer(
		@Ctx() context: GraphQLContext,
		@Arg('data') data: CustomTrainerCreateInput,
		@Arg('id') id: string
	): Promise<CustomTrainer> {
		const {prisma, user} = context;
		const target = await getCustomTrainerById(context, id);

		if (target.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return prisma.customTrainer.update({
			where: {
				id,
			},
			data: {
				...data,
			},
		});
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomTrainer)
	async deleteCustomTrainer(@Ctx() context: GraphQLContext, @Arg('id') id: string): Promise<CustomTrainer> {
		const {prisma, user} = context;
		const target = await getCustomTrainerById(context, id);

		if (target.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return prisma.customTrainer.delete({
			where: {
				id,
			},
		});
	}
}
