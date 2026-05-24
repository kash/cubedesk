import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  from_id: z.literal(true).optional(),
  to_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  accepted_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const FriendshipRequestCountAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCountAggregateInputType>;
export const FriendshipRequestCountAggregateInputObjectZodSchema = makeSchema();
