import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { BanLogCountOrderByAggregateInputObjectSchema as BanLogCountOrderByAggregateInputObjectSchema } from './BanLogCountOrderByAggregateInput.schema';
import { BanLogAvgOrderByAggregateInputObjectSchema as BanLogAvgOrderByAggregateInputObjectSchema } from './BanLogAvgOrderByAggregateInput.schema';
import { BanLogMaxOrderByAggregateInputObjectSchema as BanLogMaxOrderByAggregateInputObjectSchema } from './BanLogMaxOrderByAggregateInput.schema';
import { BanLogMinOrderByAggregateInputObjectSchema as BanLogMinOrderByAggregateInputObjectSchema } from './BanLogMinOrderByAggregateInput.schema';
import { BanLogSumOrderByAggregateInputObjectSchema as BanLogSumOrderByAggregateInputObjectSchema } from './BanLogSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  created_by_id: SortOrderSchema.optional(),
  banned_user_id: SortOrderSchema.optional(),
  reason: SortOrderSchema.optional(),
  active: SortOrderSchema.optional(),
  banned_until: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  minutes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  forever: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => BanLogCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => BanLogAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => BanLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => BanLogMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => BanLogSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const BanLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.BanLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.BanLogOrderByWithAggregationInput>;
export const BanLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
