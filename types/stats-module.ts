import type {ColorName} from '../shared/colors';

// Stored as JSON in Setting.stats_module_json, so there is no Prisma model for this
export type StatsModuleBlock = {
	statType: 'average' | 'single';
	sortBy: 'best' | 'worst' | 'current';
	session: boolean;
	colorName: ColorName;
	averageCount: number;
};

export type StatsModule = {
	blocks: StatsModuleBlock[];
};
