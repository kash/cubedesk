import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: SortOrderSchema.optional(),
  metric_type: SortOrderSchema.optional(),
  metric_value: SortOrderSchema.optional(),
  metric_details: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const MetricLogMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.MetricLogMinOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogMinOrderByAggregateInput>;
export const MetricLogMinOrderByAggregateInputObjectZodSchema = makeSchema();
