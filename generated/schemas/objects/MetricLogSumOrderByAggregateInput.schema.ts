import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  metric_value: SortOrderSchema.optional()
}).strict();
export const MetricLogSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogSumOrderByAggregateInput>;
export const MetricLogSumOrderByAggregateInputObjectZodSchema = makeSchema();
