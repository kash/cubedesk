import {Authorized, Ctx, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {TrainerAlgorithm} from '../schemas/TrainerAlgorithm.schema';
import {fetchTrainerAlgorithms} from '../models/trainer/fetch';

async function getTrainerAlgorithms() {
	return fetchTrainerAlgorithms();
}

@Resolver()
export class TrainerAlgorithmResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => [TrainerAlgorithm])
	async trainerAlgorithms(@Ctx() context: GraphQLContext) {
		return getTrainerAlgorithms();
	}
}
