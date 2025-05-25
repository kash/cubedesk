// Types for StatsModule - migrated from GraphQL schemas to local types
export interface StatsModuleBlock {
  statType: 'average' | 'single';
  sortBy: 'best' | 'worst' | 'current';
  session: boolean;
  colorName: string; // ColorName from shared/colors
  averageCount: number;
}

export interface StatsModule {
  blocks: StatsModuleBlock[];
}

// Types for TrainerAlgorithm - migrated from GraphQL schemas to local types
export interface TrainerAlgorithm {
  id: string;
  name: string;
  active: boolean;
  scrambles: string;
  solution: string;
  pro_only: boolean;
  img_link: string;
  cube_type: string;
  algo_type: string;
  colors: string;
  rotate: number;
  group_name: string;
}