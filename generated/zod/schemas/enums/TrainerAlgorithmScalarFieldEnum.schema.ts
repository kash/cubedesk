import * as z from 'zod';

export const TrainerAlgorithmScalarFieldEnumSchema = z.enum(['id', 'name', 'active', 'solution', 'scrambles', 'cube_type', 'algo_type', 'group_name', 'img_link', 'colors', 'rotate', 'created_at', 'updated_at'])

export type TrainerAlgorithmScalarFieldEnum = z.infer<typeof TrainerAlgorithmScalarFieldEnumSchema>;