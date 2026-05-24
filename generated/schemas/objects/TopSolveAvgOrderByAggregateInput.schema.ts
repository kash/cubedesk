import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  time: SortOrderSchema.optional()
}).strict();
export const TopSolveAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveAvgOrderByAggregateInput>;
export const TopSolveAvgOrderByAggregateInputObjectZodSchema = makeSchema();
