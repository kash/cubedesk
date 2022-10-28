import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {Solve, SolveInput} from '../schemas/Solve.schema';
import {getMatchById} from '../models/match';
import {createSolve, updateSolve} from '../models/solve';
import {getSolveSteps} from '../util/solve/solve_method';
import {createSolveMethodSteps} from '../models/solve_method_step';
import {logger} from '../services/logger';
import {updateUserAccountWithParams} from '../models/user_account';

function getSolvesByUserId(context: GraphQLContext, userId: string) {
	const {prisma} = context;

	return prisma.solve.findMany({
		where: {
			user_id: userId,
			game_session_id: null,
		},
	});
}

@Resolver()
export class SolveResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [Solve])
	async solves(@Ctx() context: GraphQLContext) {
		return getSolvesByUserId(context, context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => Solve)
	async createSolve(@Ctx() context: GraphQLContext, @Arg('input') input: SolveInput) {
		const {user} = context;

		if (input.match_id) {
			const match = await getMatchById(input.match_id);
			for (const part of match.participants) {
				if (part.user_id === user.id) {
					input.match_participant_id = part.id;
					break;
				}
			}
		}

		input.bulk = false;
		const createdSolve = await createSolve(user, input);

		if (input.is_smart_cube) {
			try {
				const turns = JSON.parse(input.smart_turns);
				const steps = getSolveSteps(turns);
				await createSolveMethodSteps(createdSolve, steps);
			} catch (e) {
				logger.warn('Failed to create solve method steps', {
					error: e,
				});
				await updateSolve(createdSolve.id, {
					is_smart_cube: false,
				});
			}
		}

		await updateUserAccountWithParams(user.id, {
			last_solve_at: new Date(),
		});

		return createdSolve;
	}
}
