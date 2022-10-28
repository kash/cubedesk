import {
	bulkCreateSolves,
	deleteAllSolves,
	deleteAllTrainingSolves,
	deleteAllSolvesByCubeType,
	deleteSolve,
	deleteTrainingSolves,
	getSolve,
	updateSolve,
	updateSolveLiteral,
	getSolveByShareCode,
	getFilteredSolveList,
	getBasicSolve,
} from '../models/solve';
import GraphQLError from '../util/graphql_error';
import {checkLoggedIn} from '../util/auth';
import {deleteAllTopAverages, deleteAllTopSolves, deleteTopAverage, deleteTopSolveById} from '../models/top_solve';
import {deleteSolveMethodSteps} from '../models/solve_method_step';
import {generateRandomString} from '../../shared/code';
import {createSolveView, deleteSolveViewsBySolveId} from '../models/solve_view';
import {ErrorCode} from '../constants/errors';

export const gqlType = `
	enum SolvesSortBy {
		CREATED_AT_DESC
		CREATED_AT_ASC
		TIME_DESC
		TIME_ASC
	}
	
	enum SolvesFilter {
		PLUS_TWO
		NOT_PLUS_TWO
		DNF
		NOT_DNF
		IMPORTED
		NOT_IMPORTED
		SMART
		NOT_SMART
	}
`;

export const gqlQuery = `
	solve(id: String): Solve
	solveList(cubeType: String, filters: [SolvesFilter], sortBy: SolvesSortBy, page: Int, includeAll: Boolean): SolveList
	solveByShareCode(shareCode: String): Solve
`;

export const gqlMutation = `
	bulkCreateSolves(solves: [SolveInput]): Void
	deleteSolve(id: String): Solve!
	updateSolve(id: String, input: SolveInput): Solve!
	deleteTrainingSolves(id: String): Void
	deleteSolvesByCubeType(cubeType: String): Void
	deleteAllTrainingSolves: Void
	deleteAllSolves: Void
`;

const filterMap = {
	PLUS_TWO: {plus_two: true},
	NOT_PLUS_TWO: {plus_two: false},
	DNF: {dnf: true},
	NOT_DNF: {dnf: false},
	IMPORTED: {bulk: true},
	NOT_IMPORTED: {bulk: false},
	SMART: {is_smart_cube: true},
	NOT_SMART: {is_smart_cube: false},
};

const orderByMap = {
	CREATED_AT_DESC: {created_at: 'desc'},
	CREATED_AT_ASC: {created_at: 'asc'},
	TIME_DESC: {time: 'desc'},
	TIME_ASC: {time: 'asc'},
};

export const queryActions = {
	solve: async (_, {id}) => {
		const solve = await getSolve(id);

		if (!solve) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		if (!solve.share_code) {
			const shareCode = generateRandomString(8);
			solve.share_code = shareCode;

			await updateSolveLiteral(solve.id, {
				share_code: shareCode,
			});
		}

		return solve;
	},

	solveByShareCode: async (_, {shareCode}, {user}) => {
		const solve = await getSolveByShareCode(shareCode);

		if (!solve) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		if (!user || (user && user.id !== solve.user_id)) {
			await createSolveView(user, solve);
		}

		return solve;
	},

	solveList: async (_, {cubeType, filters, sortBy, page, includeAll}, {user}) => {
		checkLoggedIn(user);

		const pageSize = 25;
		const pageOffset = pageSize * page;

		const whereFilter = filters.map((filter) => filterMap[filter]);
		whereFilter.push({cube_type: cubeType});

		const [totalCount, solves] = await getFilteredSolveList(
			user,
			whereFilter,
			orderByMap[sortBy],
			pageOffset,
			pageSize + 1
		);

		let moreResults = false;
		if (solves.length > pageSize) {
			solves.pop();
			moreResults = true;
		}

		return {
			solves,
			total_count: totalCount,
			more_results: moreResults,
		};
	},
};

export const mutateActions = {
	deleteSolve: async (_, {id}, {user}) => {
		checkLoggedIn(user);

		const solve = await getSolve(id);

		if (solve?.top_solve?.length) {
			for (const top of solve.top_solve) {
				await deleteTopSolveById(top.id);
			}
		}

		if (
			solve?.top_average_1?.length ||
			solve?.top_average_2?.length ||
			solve?.top_average_3?.length ||
			solve?.top_average_4?.length ||
			solve?.top_average_5?.length
		) {
			await deleteTopAverage(solve.cube_type, user);
		}

		if (solve.solve_method_steps) {
			await deleteSolveMethodSteps(solve);
		}

		if (solve.solve_views) {
			await deleteSolveViewsBySolveId(solve.id);
		}

		if (!solve || solve.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		return await deleteSolve(solve);
	},

	deleteTrainingSolves: async (_, {id}, {user}) => {
		checkLoggedIn(user);

		if (!id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		await deleteTrainingSolves(id, user);
	},

	deleteAllTrainingSolves: async (_, params, {user}) => {
		checkLoggedIn(user);

		await deleteAllTrainingSolves(user);
	},

	deleteAllSolves: async (_, params, {user}) => {
		checkLoggedIn(user);

		await deleteAllTopSolves(user);
		await deleteAllTopAverages(user);

		await deleteAllSolves(user);
	},

	bulkCreateSolves: async (_, {solves}, {user}) => {
		checkLoggedIn(user);

		await bulkCreateSolves(user, solves);
	},

	updateSolve: async (_, {id, input}, {user}) => {
		checkLoggedIn(user);

		const solve = await getBasicSolve(id);
		if (!solve || solve.user_id !== user.id) {
			throw new GraphQLError(ErrorCode.NOT_FOUND);
		}

		// These two fields can't be updated by the user
		input.bulk = solve.bulk;
		input.from_timer = solve.from_timer;

		return await updateSolve(id, {
			...solve,
			...input,
		});
	},

	deleteSolvesByCubeType: async (_, {cubeType}, {user}) => {
		checkLoggedIn(user);

		await deleteAllSolvesByCubeType(cubeType, user);
	},
};
