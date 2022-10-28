import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {CustomCubeTypeInput, CustomCubeType} from '../schemas/CustomCubeType.schema';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {CUBE_TYPES} from '../../client/util/cubes/cube_types';

export function getCustomCubeTypesByUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.customCubeType.findMany({
		where: {
			user_id: userId,
		},
	});
}

async function getCustomCubeTypeByUserIdAndName(context: GraphQLContext, userId: string, name: string) {
	const {prisma} = context;

	const res = await prisma.customCubeType.findMany({
		where: {
			user_id: userId,
			name,
		},
	});

	if (!res || !res.length) {
		return null;
	}

	return res[0];
}

function getCustomCubeTypeById(context: GraphQLContext, id: string) {
	const {prisma} = context;

	return prisma.customCubeType.findUnique({
		where: {
			id,
		},
	});
}

async function createCustomCubeType(context: GraphQLContext, input: CustomCubeTypeInput) {
	const {prisma, user} = context;

	const defaultCubeType = CUBE_TYPES[input.name];
	const existing = await getCustomCubeTypeByUserIdAndName(context, user.id, input.name);
	if (defaultCubeType || existing) {
		throw new GraphQLError(ErrorCode.FORBIDDEN, 'Cube type already exists');
	}

	return prisma.customCubeType.create({
		data: {
			...input,
			user_id: user.id,
		},
	});
}

function deleteCustomCubeTypeById(context: GraphQLContext, id: string) {
	const {prisma} = context;

	return prisma.customCubeType.delete({
		where: {
			id,
		},
	});
}

@Resolver()
export class CustomCubeTypeResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [CustomCubeType])
	async customCubeTypes(@Ctx() context: GraphQLContext) {
		return getCustomCubeTypesByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomCubeType)
	async createCustomCubeType(@Ctx() context: GraphQLContext, @Arg('input') input: CustomCubeTypeInput) {
		return createCustomCubeType(context, input);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => CustomCubeType)
	async deleteCustomCubeType(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		const {user} = context;
		const customCubeType = await getCustomCubeTypeById(context, id);
		if (!customCubeType || customCubeType.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return deleteCustomCubeTypeById(context, id);
	}
}
