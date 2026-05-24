import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  turn_count: SortOrderSchema.optional(),
  step_index: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional(),
  tps: SortOrderSchema.optional(),
  recognition_time: SortOrderSchema.optional()
}).strict();
export const SolveMethodStepAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveMethodStepAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepAvgOrderByAggregateInput>;
export const SolveMethodStepAvgOrderByAggregateInputObjectZodSchema = makeSchema();
