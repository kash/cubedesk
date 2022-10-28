import {StatsModule, StatsModuleBlock} from '../../server/schemas/StatsModule.schema';

function statsModuleBlock(
	statType: StatsModuleBlock['statType'],
	sortBy: StatsModuleBlock['sortBy'],
	session: StatsModuleBlock['session'],
	colorName: StatsModuleBlock['colorName'],
	averageCount: StatsModuleBlock['averageCount']
): StatsModuleBlock {
	return {
		statType,
		sortBy,
		session,
		colorName,
		averageCount,
	};
}

export const defaultStatsModuleBlocks = [
	statsModuleBlock('single', 'best', false, 'green', 0),
	statsModuleBlock('single', 'worst', false, 'red', 0),
	statsModuleBlock('average', 'current', false, 'text', 0),
	statsModuleBlock('average', 'best', false, 'text', 5),
	statsModuleBlock('average', 'current', false, 'text', 5),
	statsModuleBlock('average', 'best', false, 'text', 12),
	statsModuleBlock('average', 'current', false, 'text', 12),
];

const initialState: StatsModule = {
	blocks: defaultStatsModuleBlocks,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'INIT_STATS_MODULE': {
			return {
				...action.payload,
			};
		}

		case 'ADD_STATS_MODULE_BLOCK': {
			const {statOptions} = action.payload;

			const blocks = [...state.blocks];
			blocks.push(statOptions);

			return {
				...state,
				blocks,
			};
		}

		case 'REMOVE_STATS_MODULE_BLOCK': {
			const {index} = action.payload;

			const blocks = [...state.blocks];
			blocks.splice(index, 1);

			return {
				...state,
				blocks,
			};
		}

		case 'UPDATE_STATS_MODULE_BLOCK': {
			const {index, statOptions} = action.payload;

			const blocks = [...state.blocks];
			blocks[index] = statOptions;

			return {
				...state,
				blocks,
			};
		}

		default: {
			return {
				...initialState,
				...state,
			};
		}
	}
};
