import * as z from 'zod';

export const CustomTrainerOrderByRelevanceFieldEnumSchema = z.enum(['id', 'colors', 'cube_type', 'key', 'user_id', 'name', 'copy_of_id', 'description', 'group_name', 'scrambles', 'solution', 'alt_solutions', 'algo_type'])

export type CustomTrainerOrderByRelevanceFieldEnum = z.infer<typeof CustomTrainerOrderByRelevanceFieldEnumSchema>;