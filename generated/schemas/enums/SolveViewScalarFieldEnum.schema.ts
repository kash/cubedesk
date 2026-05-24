import * as z from 'zod';

export const SolveViewScalarFieldEnumSchema = z.enum(['id', 'solve_id', 'viewer_id', 'user_id', 'created_at'])

export type SolveViewScalarFieldEnum = z.infer<typeof SolveViewScalarFieldEnumSchema>;