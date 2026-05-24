import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ReportCountOrderByAggregateInputObjectSchema as ReportCountOrderByAggregateInputObjectSchema } from './ReportCountOrderByAggregateInput.schema';
import { ReportMaxOrderByAggregateInputObjectSchema as ReportMaxOrderByAggregateInputObjectSchema } from './ReportMaxOrderByAggregateInput.schema';
import { ReportMinOrderByAggregateInputObjectSchema as ReportMinOrderByAggregateInputObjectSchema } from './ReportMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  reason: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_by_id: SortOrderSchema.optional(),
  reported_user_id: SortOrderSchema.optional(),
  resolved_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => ReportCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ReportMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ReportMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ReportOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ReportOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ReportOrderByWithAggregationInput>;
export const ReportOrderByWithAggregationInputObjectZodSchema = makeSchema();
