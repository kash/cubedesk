import * as z from 'zod';

export const TopSolveOrderByRelevanceFieldEnumSchema = z.enum(['id', 'user_id', 'solve_id', 'cube_type'])

export type TopSolveOrderByRelevanceFieldEnum = z.infer<typeof TopSolveOrderByRelevanceFieldEnumSchema>;