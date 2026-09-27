import {getStore} from '@/components/store';
import {FilterSolvesOptions} from '@/db/solves/query';
import {getCurrentAverage} from '@/db/solves/stats/solves/average/average';
import {getAveragePB} from '@/db/solves/stats/solves/average/average-pb';
import {SolveStat} from '@/db/solves/stats/solves/caching';
import {getSinglePB} from '@/db/solves/stats/solves/single/single-pb';
import {getWorstTime} from '@/db/solves/stats/solves/single/single-worst';
import {StatsModuleBlock} from '@/types/stats-module';
import {getCubeTypeInfo} from '@/util/cubes/util';
import {trpc} from '@/util/trpc';
import type {TFunction} from 'i18next';

export const STATS_GRID_SIZE = 4;

const DESCRIPTION_KEYS = {
	bestSolve: {
		all: 'stats.block.description.bestSolve.all',
		session: 'stats.block.description.bestSolve.session',
		cube: 'stats.block.description.bestSolve.cube',
		sessionCube: 'stats.block.description.bestSolve.sessionCube',
	},
	worstSolve: {
		all: 'stats.block.description.worstSolve.all',
		session: 'stats.block.description.worstSolve.session',
		cube: 'stats.block.description.worstSolve.cube',
		sessionCube: 'stats.block.description.worstSolve.sessionCube',
	},
	bestAverage: {
		all: 'stats.block.description.bestAverage.all',
		session: 'stats.block.description.bestAverage.session',
		cube: 'stats.block.description.bestAverage.cube',
		sessionCube: 'stats.block.description.bestAverage.sessionCube',
	},
	bestAverageOfCount: {
		all: 'stats.block.description.bestAverageOfCount.all',
		session: 'stats.block.description.bestAverageOfCount.session',
		cube: 'stats.block.description.bestAverageOfCount.cube',
		sessionCube: 'stats.block.description.bestAverageOfCount.sessionCube',
	},
	currentAverage: {
		all: 'stats.block.description.currentAverage.all',
		session: 'stats.block.description.currentAverage.session',
		cube: 'stats.block.description.currentAverage.cube',
		sessionCube: 'stats.block.description.currentAverage.sessionCube',
	},
	currentAverageOfCount: {
		all: 'stats.block.description.currentAverageOfCount.all',
		session: 'stats.block.description.currentAverageOfCount.session',
		cube: 'stats.block.description.currentAverageOfCount.cube',
		sessionCube: 'stats.block.description.currentAverageOfCount.sessionCube',
	},
} as const;

export function getStatsBlockDescription(
	statsOptions: StatsModuleBlock,
	filterOptions: FilterSolvesOptions = {},
	t: TFunction,
) {
	const cubeType =
		typeof filterOptions.cube_type === 'string' ? filterOptions.cube_type : undefined;
	const cube = cubeType ? (getCubeTypeInfo(cubeType)?.name ?? cubeType) : undefined;
	const scope = statsOptions.session
		? cube
			? 'sessionCube'
			: 'session'
		: cube
			? 'cube'
			: 'all';
	const kind =
		statsOptions.statType === 'single'
			? statsOptions.sortBy === 'worst'
				? 'worstSolve'
				: 'bestSolve'
			: statsOptions.sortBy === 'best'
				? statsOptions.averageCount
					? 'bestAverageOfCount'
					: 'bestAverage'
				: statsOptions.averageCount
				? 'currentAverageOfCount'
				: 'currentAverage';

	return t(DESCRIPTION_KEYS[kind][scope], {count: statsOptions.averageCount, cube});
}

export function getStatsBlockValueFromFilter(
	statsOptions: StatsModuleBlock,
	filterOptions: FilterSolvesOptions = {},
	currentSessionId?: string,
): SolveStat | null {
	const solvesFilter = {...filterOptions};
	if (statsOptions.session) {
		solvesFilter.session_id = currentSessionId;
	} else {
		delete solvesFilter.session_id;
	}

	let outputStat: SolveStat | null = null;

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

	await trpc.stats.updateModuleBlocks.mutate({
		blocks,
	});
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
