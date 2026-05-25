import * as z from 'zod';

export const TopAverageScalarFieldEnumSchema = z.enum(['id', 'user_id', 'time', 'cube_type', 'solve_1_id', 'solve_2_id', 'solve_3_id', 'solve_4_id', 'solve_5_id', 'created_at'])

export type TopAverageScalarFieldEnum = z.infer<typeof TopAverageScalarFieldEnumSchema>;