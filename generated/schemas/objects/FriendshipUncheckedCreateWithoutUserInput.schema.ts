import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutUserInput>;
export const FriendshipUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
