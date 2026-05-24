import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  turn_count: SortOrderSchema.optional(),
  turns: SortOrderSchema.optional(),
  method_name: SortOrderSchema.optional(),
  step_index: SortOrderSchema.optional(),
  step_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional(),
  tps: SortOrderSchema.optional(),
  parent_name: SortOrderSchema.optional(),
  recognition_time: SortOrderSchema.optional(),
  skipped: SortOrderSchema.optional(),
  oll_case_key: SortOrderSchema.optional(),
  pll_case_key: SortOrderSchema.optional()
}).strict();
export const SolveMethodStepMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepMinOrderByAggregateInput>;
export const SolveMethodStepMinOrderByAggregateInputObjectZodSchema = makeSchema();
