import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  solve_count: SortOrderSchema.optional(),
  total_time: SortOrderSchema.optional()
}).strict();
export const GameSessionAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GameSessionAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GameSessionAvgOrderByAggregateInput>;
export const GameSessionAvgOrderByAggregateInputObjectZodSchema = makeSchema();
