import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  other_user_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipCreateManyFriendship_requestInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyFriendship_requestInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyFriendship_requestInput>;
export const FriendshipCreateManyFriendship_requestInputObjectZodSchema = makeSchema();
