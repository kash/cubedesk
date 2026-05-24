import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MetricLogCountOrderByAggregateInputObjectSchema as MetricLogCountOrderByAggregateInputObjectSchema } from './MetricLogCountOrderByAggregateInput.schema';
import { MetricLogAvgOrderByAggregateInputObjectSchema as MetricLogAvgOrderByAggregateInputObjectSchema } from './MetricLogAvgOrderByAggregateInput.schema';
import { MetricLogMaxOrderByAggregateInputObjectSchema as MetricLogMaxOrderByAggregateInputObjectSchema } from './MetricLogMaxOrderByAggregateInput.schema';
import { MetricLogMinOrderByAggregateInputObjectSchema as MetricLogMinOrderByAggregateInputObjectSchema } from './MetricLogMinOrderByAggregateInput.schema';
import { MetricLogSumOrderByAggregateInputObjectSchema as MetricLogSumOrderByAggregateInputObjectSchema } from './MetricLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metric_type: SortOrderSchema.optional(),
  metric_value: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  metric_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => MetricLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => MetricLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => MetricLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => MetricLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => MetricLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const MetricLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.MetricLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogOrderByWithAggregationInput>;
export const MetricLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
