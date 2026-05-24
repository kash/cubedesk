import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  time: SortOrderSchema.optional()
}).strict();
export const TopAverageAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageAvgOrderByAggregateInput>;
export const TopAverageAvgOrderByAggregateInputObjectZodSchema = makeSchema();
