import {StatsModule, StatsModuleBlock} from '../../server/schemas/StatsModule.schema';

export function initStatsModuleStore(statsModule: StatsModule) {
	return {
		type: 'INIT_STATS_MODULE',
		payload: statsModule,
	};
}


export function addStatsModuleBlock(statOptions: StatsModuleBlock) {
	return {
		type: 'ADD_STATS_MODULE_BLOCK',
		payload: {
			statOptions,
		},
	};
}

export function removeStatsModuleBlock(index: number) {
	return {
		type: 'REMOVE_STATS_MODULE_BLOCK',
		payload: {
			index,
		},
	};
}

export function updateStatsModuleBlock(index: number, statOptions: StatsModuleBlock) {
	return {
		type: 'UPDATE_STATS_MODULE_BLOCK',
		payload: {
			index,
			statOptions,
		},
	};
}
