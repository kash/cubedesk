import {Arg, Authorized, Ctx, Int, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {
	deleteTopAverage,
	deleteTopAverageById,
	deleteTopSolve,
	deleteTopSolveById,
	getTopAverages,
	getTopSolves,
	submitTopAverage,
	submitTopSolve,
} from '../models/top_solve';
import {checkLoggedIn} from '../util/auth';
import GraphQLError from '../util/graphql_error';
import {getSolve} from '../models/solve';
import {ErrorCode} from '../constants/errors';
import {TopSolve} from '../schemas/TopSolve.schema';
import {TopAverage} from '../schemas/TopAverage.schema';

@Resolver()
export class LeaderboardsResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [TopSolve])
	async topSolves(
		@Ctx() context: GraphQLContext,
		@Arg('cubeType') cubeType: string,
		@Arg('page', () => Int) page: number
	) {
		return await getTopSolves(cubeType, page);
	}

	@Authorized([Role.LOGGED_IN])
	@Query(() => [TopAverage])
	async topAverages(
		@Ctx() context: GraphQLContext,
		@Arg('cubeType') cubeType: string,
		@Arg('page', () => Int) page: number
	) {
		return await getTopAverages(cubeType, page);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TopSolve)
	async publishTopSolve(@Ctx() context: GraphQLContext, @Arg('solveId') solveId: string) {
		const {user} = context;
		const solve = await getSolve(solveId);
		if (!solve || solve.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Invalid solve');
		}

		await deleteTopSolve(solve.cube_type, user);
		return await submitTopSolve(user, solve);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TopAverage)
	async publishTopAverages(@Ctx() context: GraphQLContext, @Arg('solveIds', () => [String]) solveIds: string[]) {
		const {user} = context;
		checkLoggedIn(user);

		if (solveIds.length !== 5) {
			throw new GraphQLError(ErrorCode.BAD_INPUT, 'Invalid solve IDs');
		}

		const solvePromises = [];
		for (const id of solveIds) {
			solvePromises.push(getSolve(id));
		}

		const solves = await Promise.all(solvePromises);

		for (const solve of solves) {
			if (!solve || solve.user_id !== user.id) {
				throw new GraphQLError(ErrorCode.BAD_INPUT, 'Invalid solve IDs');
			}
		}

		await deleteTopAverage(solves[0].cube_type, user);
		return await submitTopAverage(user, solves);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TopSolve)
	async deleteTopSolve(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		return deleteTopSolveById(id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => TopAverage)
	async deleteTopAverage(@Ctx() context: GraphQLContext, @Arg('id') id: string) {
		return deleteTopAverageById(id);
	}
}
