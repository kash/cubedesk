import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { SolveOrderByWithRelationInputObjectSchema as SolveOrderByWithRelationInputObjectSchema } from './SolveOrderByWithRelationInput.schema';
import { SolveMethodStepOrderByRelevanceInputObjectSchema as SolveMethodStepOrderByRelevanceInputObjectSchema } from './SolveMethodStepOrderByRelevanceInput.schema'

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
  solve: z.lazy(() => SolveOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => SolveMethodStepOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const SolveMethodStepOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SolveMethodStepOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepOrderByWithRelationInput>;
export const SolveMethodStepOrderByWithRelationInputObjectZodSchema = makeSchema();
