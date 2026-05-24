import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  solve_id: z.literal(true).optional(),
  turn_count: z.literal(true).optional(),
  turns: z.literal(true).optional(),
  method_name: z.literal(true).optional(),
  step_index: z.literal(true).optional(),
  step_name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  total_time: z.literal(true).optional(),
  tps: z.literal(true).optional(),
  parent_name: z.literal(true).optional(),
  recognition_time: z.literal(true).optional(),
  skipped: z.literal(true).optional(),
  oll_case_key: z.literal(true).optional(),
  pll_case_key: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const SolveMethodStepCountAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepCountAggregateInputType>;
export const SolveMethodStepCountAggregateInputObjectZodSchema = makeSchema();
