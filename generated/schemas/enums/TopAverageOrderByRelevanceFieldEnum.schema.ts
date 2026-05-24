import * as z from 'zod';

export const TopAverageOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'cube_type', 'solve_1_id', 'solve_2_id', 'solve_3_id', 'solve_4_id', 'solve_5_id'])

export type TopAverageOrderByRelevanceFieldEnum = z.infer<typeof TopAverageOrderByRelevanceFieldEnumSchema>;