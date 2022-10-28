import {Prisma} from '@prisma/client';
import {Arg, Authorized, Ctx, Int, Mutation, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import GraphQLError from '../util/graphql_error';
import {ErrorCode} from '../constants/errors';
import {Session} from '../schemas/Session.schema';
import {UserAccount} from '../schemas/UserAccount.schema';
import {getPrisma} from '../database';
import {getSessionById} from './Session.resolver';
import {getDefaultCubeTypes} from '../../client/util/cubes/util';
import {getCustomCubeTypesByUserId} from './CustomCubeType.resolver';

function deleteSolves(user: UserAccount, solveIds: string[]) {
	return getPrisma().solve.deleteMany({
		where: {
			user_id: user.id,
			id: {
				in: solveIds,
			},
		},
	});
}

async function moveSolvesToSession(user: UserAccount, solveIds: string[], session: Session) {
	return bulkUpdateSolves(user, solveIds, {
		session_id: session.id,
	});
}

async function dnfSolves(user: UserAccount, solveIds: string[]): Promise<number> {
	return getPrisma().$executeRaw`
        UPDATE
            solve
        SET dnf = TRUE, "time" = -1
		WHERE user_id = ${user.id} 
		  	AND id IN (${Prisma.join(solveIds)})
	`;
}

async function plusTwoSolves(user: UserAccount, solveIds: string[]): Promise<number> {
	const plusTwoSolves = getPrisma().$executeRaw`
        UPDATE
            solve
        SET plus_two = TRUE, 
            "time" = raw_time + 2
		WHERE user_id = ${user.id} 
		  	AND id IN (${Prisma.join(solveIds)})
	`;
	const updateTime = getPrisma().$executeRaw`
        UPDATE
            solve
        SET "time" = raw_time + 2
		WHERE user_id = ${user.id} 
		  	AND id IN (${Prisma.join(solveIds)})
			AND dnf = FALSE
	`;

	const [updated] = await Promise.all([plusTwoSolves, updateTime]);
	return updated;
}

async function okSolves(user: UserAccount, solveIds: string[]): Promise<number> {
	return getPrisma().$executeRaw`
        UPDATE
            solve
        SET "time" = raw_time,
            dnf = false,
            plus_two = false
		WHERE user_id = ${user.id} AND id IN (${Prisma.join(solveIds)})
	`;
}

async function updateCubeTypeForSolves(user: UserAccount, solveIds: string[], cubeType: string) {
	return bulkUpdateSolves(user, solveIds, {
		cube_type: cubeType,
	});
}

async function bulkUpdateSolves(user: UserAccount, solveIds: string[], data: Prisma.SolveUncheckedUpdateManyInput) {
	return getPrisma().solve.updateMany({
		where: {
			user_id: user.id,
			id: {
				in: solveIds,
			},
		},
		data,
	});
}

// Returns number of records affected
@Resolver()
export class BulkActionsResolver {
	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkDeleteSolves(@Ctx() context: GraphQLContext, @Arg('solveIds', () => [String]) solveIds: string[]) {
		const {user} = context;
		const deleted = await deleteSolves(user, solveIds);
		return deleted.count;
	}

	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkMoveSolvesToSession(
		@Ctx() context: GraphQLContext,
		@Arg('solveIds', () => [String]) solveIds: string[],
		@Arg('sessionId') sessionId: string
	) {
		const {user} = context;
		const session = await getSessionById(sessionId);

		if (!session || session.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND, 'Could not find a session with that ID');
		}

		const updated = await moveSolvesToSession(user, solveIds, session);
		return updated.count;
	}

	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkDnfSolves(@Ctx() context: GraphQLContext, @Arg('solveIds', () => [String]) solveIds: string[]) {
		const {user} = context;
		return await dnfSolves(user, solveIds);
	}

	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkPlusTwoSolves(@Ctx() context: GraphQLContext, @Arg('solveIds', () => [String]) solveIds: string[]) {
		const {user} = context;
		return await plusTwoSolves(user, solveIds);
	}

	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkOkSolves(@Ctx() context: GraphQLContext, @Arg('solveIds', () => [String]) solveIds: string[]) {
		const {user} = context;
		return await okSolves(user, solveIds);
	}

	@Authorized([Role.PRO])
	@Mutation(() => Int)
	async bulkUpdateSolvesCubeType(
		@Ctx() context: GraphQLContext,
		@Arg('solveIds', () => [String]) solveIds: string[],
		@Arg('cubeType') cubeType: string
	) {
		const {user} = context;

		const defaultCubeTypes = getDefaultCubeTypes();
		const customCubeTypes = await getCustomCubeTypesByUserId(context, user.id);

		const validCubeType = [...defaultCubeTypes, ...customCubeTypes].some((ct) => ct.id === cubeType);

		if (!validCubeType) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Invalid cube type');
		}

		const updated = await updateCubeTypeForSolves(user, solveIds, cubeType);
		return updated.count;
	}
}
