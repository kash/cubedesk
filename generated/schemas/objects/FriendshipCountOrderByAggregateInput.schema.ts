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
export const FriendshipCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCountOrderByAggregateInput>;
export const FriendshipCountOrderByAggregateInputObjectZodSchema = makeSchema();
