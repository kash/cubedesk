import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FriendshipRequestCountOrderByAggregateInputObjectSchema as FriendshipRequestCountOrderByAggregateInputObjectSchema } from './FriendshipRequestCountOrderByAggregateInput.schema';
import { FriendshipRequestMaxOrderByAggregateInputObjectSchema as FriendshipRequestMaxOrderByAggregateInputObjectSchema } from './FriendshipRequestMaxOrderByAggregateInput.schema';
import { FriendshipRequestMinOrderByAggregateInputObjectSchema as FriendshipRequestMinOrderByAggregateInputObjectSchema } from './FriendshipRequestMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  from_id: SortOrderSchema.optional(),
  to_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  accepted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  _count: z.lazy(() => FriendshipRequestCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => FriendshipRequestMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => FriendshipRequestMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const FriendshipRequestOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.FriendshipRequestOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestOrderByWithAggregationInput>;
export const FriendshipRequestOrderByWithAggregationInputObjectZodSchema = makeSchema();
