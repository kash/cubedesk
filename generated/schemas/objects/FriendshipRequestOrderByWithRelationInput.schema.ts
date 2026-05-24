import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { FriendshipOrderByRelationAggregateInputObjectSchema as FriendshipOrderByRelationAggregateInputObjectSchema } from './FriendshipOrderByRelationAggregateInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { FriendshipRequestOrderByRelevanceInputObjectSchema as FriendshipRequestOrderByRelevanceInputObjectSchema } from './FriendshipRequestOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  from_id: SortOrderSchema.optional(),
  to_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  accepted_at: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  friendship: z.lazy(() => FriendshipOrderByRelationAggregateInputObjectSchema).optional(),
  from_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  to_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => FriendshipRequestOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const FriendshipRequestOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FriendshipRequestOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestOrderByWithRelationInput>;
export const FriendshipRequestOrderByWithRelationInputObjectZodSchema = makeSchema();
