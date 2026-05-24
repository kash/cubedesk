import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SessionCountOrderByAggregateInputObjectSchema as SessionCountOrderByAggregateInputObjectSchema } from './SessionCountOrderByAggregateInput.schema';
import { SessionAvgOrderByAggregateInputObjectSchema as SessionAvgOrderByAggregateInputObjectSchema } from './SessionAvgOrderByAggregateInput.schema';
import { SessionMaxOrderByAggregateInputObjectSchema as SessionMaxOrderByAggregateInputObjectSchema } from './SessionMaxOrderByAggregateInput.schema';
import { SessionMinOrderByAggregateInputObjectSchema as SessionMinOrderByAggregateInputObjectSchema } from './SessionMinOrderByAggregateInput.schema';
import { SessionSumOrderByAggregateInputObjectSchema as SessionSumOrderByAggregateInputObjectSchema } from './SessionSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  order: SortOrderSchema.optional(),
  _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => SessionAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => SessionSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const SessionOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.SessionOrderByWithAggregationInput>;
export const SessionOrderByWithAggregationInputObjectZodSchema = makeSchema();
