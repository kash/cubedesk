import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  metric_value: SortOrderSchema.optional()
}).strict();
export const MetricLogAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogAvgOrderByAggregateInput>;
export const MetricLogAvgOrderByAggregateInputObjectZodSchema = makeSchema();
