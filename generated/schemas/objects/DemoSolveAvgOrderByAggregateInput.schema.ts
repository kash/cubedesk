import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  raw_time: SortOrderSchema.optional(),
  started_at: SortOrderSchema.optional(),
  ended_at: SortOrderSchema.optional()
}).strict();
export const DemoSolveAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.DemoSolveAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.DemoSolveAvgOrderByAggregateInput>;
export const DemoSolveAvgOrderByAggregateInputObjectZodSchema = makeSchema();
