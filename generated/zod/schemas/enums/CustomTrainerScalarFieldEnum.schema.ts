import * as z from 'zod';

export const CustomTrainerScalarFieldEnumSchema = z.enum(['id', 'colors', 'cube_type', 'key', 'user_id', 'created_at', 'name', 'like_count', 'private', 'copy_of_id', 'description', 'downloaded', 'group_name', 'scrambles', 'solution', 'alt_solutions', 'three_d', 'algo_type'])

export type CustomTrainerScalarFieldEnum = z.infer<typeof CustomTrainerScalarFieldEnumSchema>;