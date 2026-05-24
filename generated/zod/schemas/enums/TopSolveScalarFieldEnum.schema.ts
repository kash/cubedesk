import * as z from 'zod';

export const TopSolveScalarFieldEnumSchema = z.enum(['id', 'user_id', 'time', 'solve_id', 'cube_type', 'created_at'])

export type TopSolveScalarFieldEnum = z.infer<typeof TopSolveScalarFieldEnumSchema>;