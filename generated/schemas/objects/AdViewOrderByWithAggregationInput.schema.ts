import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { AdViewCountOrderByAggregateInputObjectSchema as AdViewCountOrderByAggregateInputObjectSchema } from './AdViewCountOrderByAggregateInput.schema';
import { AdViewAvgOrderByAggregateInputObjectSchema as AdViewAvgOrderByAggregateInputObjectSchema } from './AdViewAvgOrderByAggregateInput.schema';
import { AdViewMaxOrderByAggregateInputObjectSchema as AdViewMaxOrderByAggregateInputObjectSchema } from './AdViewMaxOrderByAggregateInput.schema';
import { AdViewMinOrderByAggregateInputObjectSchema as AdViewMinOrderByAggregateInputObjectSchema } from './AdViewMinOrderByAggregateInput.schema';
import { AdViewSumOrderByAggregateInputObjectSchema as AdViewSumOrderByAggregateInputObjectSchema } from './AdViewSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ip_address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  ad_key: SortOrderSchema.optional(),
  view_time_seconds: SortOrderSchema.optional(),
  browser_session_id: SortOrderSchema.optional(),
  clicked_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  pathname: SortOrderSchema.optional(),
  last_session_started_at: SortOrderSchema.optional(),
  _count: z.lazy(() => AdViewCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => AdViewAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => AdViewMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => AdViewMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => AdViewSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const AdViewOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.AdViewOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.AdViewOrderByWithAggregationInput>;
export const AdViewOrderByWithAggregationInputObjectZodSchema = makeSchema();
