import {Arg, Ctx, Mutation, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {DemoSolve, DemoSolveInput} from '../schemas/DemoSolve.schema';
import {getPrisma} from '../database';

function createDemoSolve(context: GraphQLContext, input: DemoSolveInput) {
	return getPrisma().demoSolve.create({
		data: {
			...input,
			ip_address: context.ipAddress,
		},
	});
}

@Resolver()
export class DemoSolveResolver {
	@Mutation(() => DemoSolve)
	async createDemoSolve(@Ctx() context: GraphQLContext, @Arg('input') input: DemoSolveInput) {
		return createDemoSolve(context, input);
	}
}
