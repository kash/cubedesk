import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipCreateManyOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyOther_userInput>;
export const FriendshipCreateManyOther_userInputObjectZodSchema = makeSchema();
