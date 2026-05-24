import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipCreateManyUserInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyUserInput>;
export const FriendshipCreateManyUserInputObjectZodSchema = makeSchema();
