import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  other_user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipUncheckedCreateWithoutFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipUncheckedCreateWithoutFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipUncheckedCreateWithoutFriendship_requestInput>;
export const FriendshipUncheckedCreateWithoutFriendship_requestInputObjectZodSchema = makeSchema();
