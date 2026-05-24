import * as z from 'zod';

export const SolveMethodStepScalarFieldEnumSchema = z.enum(['id', 'solve_id', 'turn_count', 'turns', 'method_name', 'step_index', 'step_name', 'created_at', 'total_time', 'tps', 'parent_name', 'recognition_time', 'skipped', 'oll_case_key', 'pll_case_key'])

export type SolveMethodStepScalarFieldEnum = z.infer<typeof SolveMethodStepScalarFieldEnumSchema>;