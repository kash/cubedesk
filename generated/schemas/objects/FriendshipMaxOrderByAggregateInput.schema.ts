import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  user_id: SortOrderSchema.optional(),
  other_user_id: SortOrderSchema.optional(),
  friendship_request_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const FriendshipMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMaxOrderByAggregateInput>;
export const FriendshipMaxOrderByAggregateInputObjectZodSchema = makeSchema();
