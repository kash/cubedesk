import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipUncheckedCreateWithoutOther_userInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutOther_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutOther_userInput>;
export const FriendshipUncheckedCreateWithoutOther_userInputObjectZodSchema = makeSchema();
