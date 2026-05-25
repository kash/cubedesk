import * as z from 'zod';

export const SolveViewOrderByRelevanceFieldEnumSchema = z.enum(['id', 'solve_id', 'viewer_id', 'user_id'])

export type SolveViewOrderByRelevanceFieldEnum = z.infer<typeof SolveViewOrderByRelevanceFieldEnumSchema>;