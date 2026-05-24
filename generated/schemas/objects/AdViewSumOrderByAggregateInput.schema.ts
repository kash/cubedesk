import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  view_time_seconds: SortOrderSchema.optional()
}).strict();
export const AdViewSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.AdViewSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewSumOrderByAggregateInput>;
export const AdViewSumOrderByAggregateInputObjectZodSchema = makeSchema();
