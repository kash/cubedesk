import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  solve_id: z.boolean().optional(),
  turn_count: z.boolean().optional(),
  turns: z.boolean().optional(),
  method_name: z.boolean().optional(),
  step_index: z.boolean().optional(),
  step_name: z.boolean().optional(),
  created_at: z.boolean().optional(),
  total_time: z.boolean().optional(),
  tps: z.boolean().optional(),
  parent_name: z.boolean().optional(),
  recognition_time: z.boolean().optional(),
  skipped: z.boolean().optional(),
  oll_case_key: z.boolean().optional(),
  pll_case_key: z.boolean().optional(),
  solve: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional()
}).strict();
export const SolveMethodStepSelectObjectSchema: z.ZodType<Prisma.SolveMethodStepSelect> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepSelect>;
export const SolveMethodStepSelectObjectZodSchema = makeSchema();
