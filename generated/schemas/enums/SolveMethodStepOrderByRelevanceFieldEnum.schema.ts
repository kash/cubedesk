import * as z from 'zod';

export const SolveMethodStepOrderByRelevanceFieldEnumSchema = z.enum(['id', 'solve_id', 'turns', 'method_name', 'step_name', 'parent_name', 'oll_case_key', 'pll_case_key'])

export type SolveMethodStepOrderByRelevanceFieldEnum = z.infer<typeof SolveMethodStepOrderByRelevanceFieldEnumSchema>;