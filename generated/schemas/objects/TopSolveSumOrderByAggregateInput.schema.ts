import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  time: SortOrderSchema.optional()
}).strict();
export const TopSolveSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopSolveSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveSumOrderByAggregateInput>;
export const TopSolveSumOrderByAggregateInputObjectZodSchema = makeSchema();
