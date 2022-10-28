import {FilterSolvesOptions} from '../../../db/solves/query';
import colorPalette, {ColorName} from '../../../../shared/colors';
import {AppTheme} from '../../../util/hooks/useTheme';
import {StatsModuleBlock} from '../../../../server/schemas/StatsModule.schema';
import {getStore} from '../../store';
import {getWorstTime} from '../../../db/solves/stats/solves/single/single_worst';
import {SolveStat} from '../../../db/solves/stats/solves/caching';
import {getSinglePB} from '../../../db/solves/stats/solves/single/single_pb';
import {getCurrentAverage} from '../../../db/solves/stats/solves/average/average';
import {getAveragePB} from '../../../db/solves/stats/solves/average/average_pb';
import {gql} from '@apollo/client';
import {gqlMutate} from '../../api';
import {getCubeTypeInfo} from '../../../util/cubes/util';

export const STATS_GRID_SIZE = 4;

export function getStatsBlockDescription(statsOptions: StatsModuleBlock, filterOptions: FilterSolvesOptions = {}) {
	const solvesFilter = {...filterOptions};
	const description = [];

	if (statsOptions.sortBy === 'worst' && statsOptions.statType === 'single') {
		description.push('worst');
	} else if (statsOptions.sortBy === 'best') {
		description.push('best');
	} else if (statsOptions.sortBy === 'current') {
		description.push('current');
	}

	if (statsOptions.session) {
		description.push('session');
	}

	if (solvesFilter?.cube_type) {
		const cubeType = solvesFilter.cube_type as string;

		const ct = getCubeTypeInfo(cubeType);
		description.push(ct.name);
	}

	if (statsOptions.statType === 'average') {
		description.push('average');

		if (statsOptions.averageCount) {
			description.push(`of ${statsOptions.averageCount}`);
		}
	} else {
		description.push('solve');
	}

	return description.join(' ');
}

export function getStatsBlockValueFromFilter(
	statsOptions: StatsModuleBlock,
	filterOptions: FilterSolvesOptions = {},
	currentSessionId?: string
): SolveStat {
	const solvesFilter = {...filterOptions};
	if (statsOptions.session) {
		solvesFilter.session_id = currentSessionId;
	} else {
		delete solvesFilter.session_id;
	}

	let outputStat: SolveStat = null;

	if (statsOptions.statType === 'single') {
		if (statsOptions.sortBy === 'worst') {
			outputStat = getWorstTime(solvesFilter);
		} else {
			outputStat = getSinglePB(solvesFilter);
		}
	}

	if (statsOptions.statType === 'average') {
		if (statsOptions.sortBy === 'best') {
			outputStat = getAveragePB(solvesFilter, statsOptions.averageCount);
		} else {
			outputStat = getCurrentAverage(solvesFilter, statsOptions.averageCount);
		}
	}

	return outputStat;
}

export async function saveStatsModuleBlocks() {
	const store = getStore();
	const me = store.getState().account?.me;
	const blocks = store.getState().stats.blocks;

	if (!me) {
		return;
	}

	const query = gql`
		mutation updateStatsModuleBlocks($blocks: [StatsModuleBlockInput]) {
			updateStatsModuleBlocks(blocks: $blocks) {
				blocks {
					colorName
				}
			}
		}
	`;

	await gqlMutate(query, {
		blocks,
	});
}

export function getStatValueColorHex(colorName: ColorName, appTheme: AppTheme): string {
	const colorMap = colorPalette[colorName];

	if (appTheme.isDark) {
		return colorMap[400];
	} else {
		return colorMap[700];
	}
}

export function getQuickStatsGridSizes(blockCount: number) {
	// First number is col span, second number is row span
	const blockSizes: [number, number][] = [];
	const totalGridSize = STATS_GRID_SIZE * STATS_GRID_SIZE;

	let currentGridSize = 0;
	for (let i = 0; i < blockCount; i++) {
		currentGridSize += 1;
		blockSizes.push([1, 1]);
	}

	const halfGridSize = STATS_GRID_SIZE / 2;
	let currentIndex = 0;

	while (currentGridSize < totalGridSize) {
		const cols = blockSizes[currentIndex][0];
		const rows = blockSizes[currentIndex][1];
		const area = cols * rows;

		let newRows = rows;
		let newCols = cols;

		if (halfGridSize > cols) {
			newCols = halfGridSize;
		} else if (halfGridSize > rows) {
			newRows = halfGridSize;
		} else if (STATS_GRID_SIZE > cols) {
			newCols = STATS_GRID_SIZE;
		} else if (STATS_GRID_SIZE > rows) {
			newRows = STATS_GRID_SIZE;
		}

		const newArea = newCols * newRows;
		const areaAdded = newArea - area;

		blockSizes[currentIndex] = [newCols, newRows];
		currentGridSize += areaAdded;
		currentIndex++;

		if (currentIndex >= blockCount) {
			currentIndex = 0;
		}
	}

	return blockSizes;
}
