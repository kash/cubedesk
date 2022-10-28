import {Arg, Authorized, Ctx, Mutation, Query, Resolver} from 'type-graphql';
import {GraphQLContext} from '../@types/interfaces/server.interface';
import {Role} from '../middlewares/auth';
import {StatsModule, StatsModuleBlock, StatsModuleBlockInput} from '../schemas/StatsModule.schema';
import {getSettingsByUserId, setSetting} from './Setting.resolver';

async function getStatsModulesByUserId(userId: string): Promise<StatsModule> {
	const settings = await getSettingsByUserId(userId);

	let statsModule: StatsModule;
	if (settings?.stats_module_json) {
		statsModule = JSON.parse(settings.stats_module_json);
	}

	return statsModule;
}

async function updateStatsModuleBlocks(userId: string, blocks: StatsModuleBlock[]) {
	const statsModule = await getStatsModulesByUserId(userId);
	let updateStatsModule: StatsModule;
	if (!statsModule) {
		updateStatsModule = {
			blocks,
		};
	} else {
		updateStatsModule = statsModule;
		updateStatsModule.blocks = blocks;
	}

	const statsModuleJson = JSON.stringify(updateStatsModule);
	await setSetting(userId, 'stats_module_json', statsModuleJson);
	return getStatsModulesByUserId(userId);
}

@Resolver()
export class StatsModuleResolver {
	@Authorized([Role.LOGGED_IN])
	@Query(() => StatsModule)
	async statsModule(@Ctx() context: GraphQLContext) {
		return getStatsModulesByUserId(context.user.id);
	}

	@Authorized([Role.LOGGED_IN])
	@Mutation(() => StatsModule)
	async updateStatsModuleBlocks(
		@Ctx() context: GraphQLContext,
		@Arg('blocks', () => [StatsModuleBlockInput]) blocks: StatsModuleBlockInput[]
	) {
		return updateStatsModuleBlocks(context.user.id, blocks);
	}
}
