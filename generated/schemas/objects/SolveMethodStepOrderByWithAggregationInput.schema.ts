import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SolveMethodStepCountOrderByAggregateInputObjectSchema as SolveMethodStepCountOrderByAggregateInputObjectSchema } from './SolveMethodStepCountOrderByAggregateInput.schema';
import { SolveMethodStepAvgOrderByAggregateInputObjectSchema as SolveMethodStepAvgOrderByAggregateInputObjectSchema } from './SolveMethodStepAvgOrderByAggregateInput.schema';
import { SolveMethodStepMaxOrderByAggregateInputObjectSchema as SolveMethodStepMaxOrderByAggregateInputObjectSchema } from './SolveMethodStepMaxOrderByAggregateInput.schema';
import { SolveMethodStepMinOrderByAggregateInputObjectSchema as SolveMethodStepMinOrderByAggregateInputObjectSchema } from './SolveMethodStepMinOrderByAggregateInput.schema';
import { SolveMethodStepSumOrderByAggregateInputObjectSchema as SolveMethodStepSumOrderByAggregateInputObjectSchema } from './SolveMethodStepSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  solve_id: SortOrderSchema.optional(),
  turn_count: SortOrderSchema.optional(),
  turns: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  method_name: SortOrderSchema.optional(),
  step_index: SortOrderSchema.optional(),
  step_name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  total_time: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  tps: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  parent_name: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  recognition_time: SortOrderSchema.optional(),
  skipped: SortOrderSchema.optional(),
  oll_case_key: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  pll_case_key: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => SolveMethodStepCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SolveMethodStepAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SolveMethodStepMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SolveMethodStepMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SolveMethodStepSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SolveMethodStepOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SolveMethodStepOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepOrderByWithAggregationInput>;
export const SolveMethodStepOrderByWithAggregationInputObjectZodSchema = makeSchema();
