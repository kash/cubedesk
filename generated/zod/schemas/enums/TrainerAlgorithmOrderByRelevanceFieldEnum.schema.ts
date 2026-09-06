import * as z from 'zod';

export const TrainerAlgorithmOrderByRelevanceFieldEnumSchema = z.enum(['id', 'name', 'solution', 'scrambles', 'cube_type', 'algo_type', 'group_name', 'img_link', 'colors'])

export type TrainerAlgorithmOrderByRelevanceFieldEnum = z.infer<typeof TrainerAlgorithmOrderByRelevanceFieldEnumSchema>;