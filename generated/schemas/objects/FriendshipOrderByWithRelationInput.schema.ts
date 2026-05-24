import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { FriendshipRequestOrderByWithRelationInputObjectSchema as FriendshipRequestOrderByWithRelationInputObjectSchema } from './FriendshipRequestOrderByWithRelationInput.schema';
import { UserAccountOrderByWithRelationInputObjectSchema as UserAccountOrderByWithRelationInputObjectSchema } from './UserAccountOrderByWithRelationInput.schema';
import { FriendshipOrderByRelevanceInputObjectSchema as FriendshipOrderByRelevanceInputObjectSchema } from './FriendshipOrderByRelevanceInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  other_user_id: SortOrderSchema.optional(),
  friendship_request_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  friendship_request: z.lazy(() => FriendshipRequestOrderByWithRelationInputObjectSchema).optional(),
  other_user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  user: z.lazy(() => UserAccountOrderByWithRelationInputObjectSchema).optional(),
  _relevance: z.lazy(() => FriendshipOrderByRelevanceInputObjectSchema).optional()
}).strict();
export const FriendshipOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.FriendshipOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipOrderByWithRelationInput>;
export const FriendshipOrderByWithRelationInputObjectZodSchema = makeSchema();
