import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ActionLogCountOrderByAggregateInputObjectSchema as ActionLogCountOrderByAggregateInputObjectSchema } from './ActionLogCountOrderByAggregateInput.schema';
import { ActionLogMaxOrderByAggregateInputObjectSchema as ActionLogMaxOrderByAggregateInputObjectSchema } from './ActionLogMaxOrderByAggregateInput.schema';
import { ActionLogMinOrderByAggregateInputObjectSchema as ActionLogMinOrderByAggregateInputObjectSchema } from './ActionLogMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_email: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  action_type: SortOrderSchema.optional(),
  action_details: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ActionLogCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ActionLogMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ActionLogMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ActionLogOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ActionLogOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ActionLogOrderByWithAggregationInput>;
export const ActionLogOrderByWithAggregationInputObjectZodSchema = makeSchema();
