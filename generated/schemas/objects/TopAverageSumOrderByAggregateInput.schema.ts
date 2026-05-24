import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  time: SortOrderSchema.optional()
}).strict();
export const TopAverageSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.TopAverageSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageSumOrderByAggregateInput>;
export const TopAverageSumOrderByAggregateInputObjectZodSchema = makeSchema();
