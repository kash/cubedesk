import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {AlgorithmOverrideInput, AlgorithmOverride} from '../schemas/AlgorithmOverride.schema';
import {ErrorCode} from '../constants/errors';
import GraphQLError from '../util/graphql_error';

function getAlgorithmOverridesByUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.algorithmOverride.findMany({
		where: {
			user_id: userId,
		},
	});
}

async function getAlgorithmOverride(context: GraphQLContext, algoKey: string) {
	const {prisma, user} = context;

	const res = await prisma.algorithmOverride.findMany({
		where: {
			user_id: user.id,
			cube_key: algoKey,
		},
	});

	if (!res || !res.length) {
		return null;
	}

	return res[0];
}

async function createAlgorithmOverride(context: GraphQLContext, input: AlgorithmOverrideInput) {
	const {prisma, user} = context;

	return prisma.algorithmOverride.create({
		data: {
			...input,
			user_id: user.id,
		},
	});
}

function updateAlgorithmOverride(
	context: GraphQLContext,
	input: AlgorithmOverrideInput,
	algoOverride: AlgorithmOverride
) {
	const {prisma} = context;

	return prisma.algorithmOverride.update({
		where: {
			id: algoOverride.id,
		},
		data: {
			...input,
		},
	});
}

function deleteAlgorithmOverride(context: GraphQLContext, algoOverride: AlgorithmOverride) {
	const {prisma} = context;

	return prisma.algorithmOverride.delete({
		where: {
			id: algoOverride.id,
		},
	});
}

@Resolver()
export class AlgorithmOverrideResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [AlgorithmOverride])
	async algorithmOverrides(@Ctx() context: GraphQLContext) {
		return getAlgorithmOverridesByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => AlgorithmOverride)
	async updateAlgorithmOverride(
		@Ctx() context: GraphQLContext,
		@Arg('input') input: AlgorithmOverrideInput,
		@Arg('algoKey') algoKey: string
	) {
		const {user} = context;
		input.cube_key = algoKey;

		let algorithmOverride = await getAlgorithmOverride(context, algoKey);

		if (algorithmOverride && algorithmOverride.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		if (!algorithmOverride) {
			algorithmOverride = await createAlgorithmOverride(context, input);
		}

		return updateAlgorithmOverride(context, input, algorithmOverride);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => AlgorithmOverride)
	async deleteAlgorithmOverride(@Ctx() context: GraphQLContext, @Arg('algoKey') algoKey: string) {
		const {user} = context;

		const algorithmOverride = await getAlgorithmOverride(context, algoKey);
		if (!algorithmOverride || algorithmOverride.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.FORBIDDEN);
		}

		return deleteAlgorithmOverride(context, algorithmOverride);
	}
}
