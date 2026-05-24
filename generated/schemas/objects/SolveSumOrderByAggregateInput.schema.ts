import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  time: SortOrderSchema.optional(),
  raw_time: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  ended_at: SortOrderSchema.optional(),
  inspection_time: SortOrderSchema.optional(),
  smart_put_down_time: SortOrderSchema.optional(),
  smart_turn_count: SortOrderSchema.optional()
}).strict();
export const SolveSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.SolveSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveSumOrderByAggregateInput>;
export const SolveSumOrderByAggregateInputObjectZodSchema = makeSchema();
