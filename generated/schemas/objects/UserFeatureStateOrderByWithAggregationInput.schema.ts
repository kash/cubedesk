import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserFeatureStateCountOrderByAggregateInputObjectSchema as UserFeatureStateCountOrderByAggregateInputObjectSchema } from './UserFeatureStateCountOrderByAggregateInput.schema';
import { UserFeatureStateMaxOrderByAggregateInputObjectSchema as UserFeatureStateMaxOrderByAggregateInputObjectSchema } from './UserFeatureStateMaxOrderByAggregateInput.schema';
import { UserFeatureStateMinOrderByAggregateInputObjectSchema as UserFeatureStateMinOrderByAggregateInputObjectSchema } from './UserFeatureStateMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  received_welcome_screen: SortOrderSchema.optional(),
  updated_at: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => UserFeatureStateCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => UserFeatureStateMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => UserFeatureStateMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const UserFeatureStateOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.UserFeatureStateOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.UserFeatureStateOrderByWithAggregationInput>;
export const UserFeatureStateOrderByWithAggregationInputObjectZodSchema = makeSchema();
