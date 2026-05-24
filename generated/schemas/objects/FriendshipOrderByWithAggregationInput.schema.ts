import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FriendshipCountOrderByAggregateInputObjectSchema as FriendshipCountOrderByAggregateInputObjectSchema } from './FriendshipCountOrderByAggregateInput.schema';
import { FriendshipMaxOrderByAggregateInputObjectSchema as FriendshipMaxOrderByAggregateInputObjectSchema } from './FriendshipMaxOrderByAggregateInput.schema';
import { FriendshipMinOrderByAggregateInputObjectSchema as FriendshipMinOrderByAggregateInputObjectSchema } from './FriendshipMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  other_user_id: SortOrderSchema.optional(),
  friendship_request_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => FriendshipCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FriendshipMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FriendshipMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FriendshipOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByWithAggregationInput>;
export const FriendshipOrderByWithAggregationInputObjectZodSchema = makeSchema();
