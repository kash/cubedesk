import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  solve_count: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional()
}).strict();
export const GameSessionSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionSumOrderByAggregateInput>;
export const GameSessionSumOrderByAggregateInputObjectZodSchema = makeSchema();
