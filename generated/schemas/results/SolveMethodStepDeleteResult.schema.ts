import * as z from 'zod';
export const SolveMethodStepDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  solve_id: z.string(),
  turn_count: z.number().int(),
  turns: z.string().optional(),
  method_name: z.string(),
  step_index: z.number().int(),
  step_name: z.string(),
  created_at: z.date(),
  total_time: z.number().optional(),
  tps: z.number().optional(),
  parent_name: z.string().optional(),
  recognition_time: z.number(),
  skipped: z.boolean(),
  oll_case_key: z.string().optional(),
  pll_case_key: z.string().optional(),
  solve: z.unknown()
}));