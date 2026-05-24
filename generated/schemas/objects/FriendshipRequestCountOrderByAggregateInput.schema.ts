import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  from_id: SortOrderSchema.optional(),
  to_id: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  accepted_at: SortOrderSchema.optional()
}).strict();
export const FriendshipRequestCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCountOrderByAggregateInput>;
export const FriendshipRequestCountOrderByAggregateInputObjectZodSchema = makeSchema();
