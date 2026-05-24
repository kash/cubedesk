import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  from_id: z.literal(true).optional(),
  to_id: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  accepted_at: z.literal(true).optional()
}).strict();
export const FriendshipRequestMinAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipRequestMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestMinAggregateInputType>;
export const FriendshipRequestMinAggregateInputObjectZodSchema = makeSchema();
