import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  other_user_id: z.literal(true).optional(),
  friendship_request_id: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const FriendshipMinAggregateInputObjectSchema: z.ZodType<Prisma.FriendshipMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipMinAggregateInputType>;
export const FriendshipMinAggregateInputObjectZodSchema = makeSchema();
