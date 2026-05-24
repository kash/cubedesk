import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  user_id: z.string(),
  other_user_id: z.string(),
  friendship_request_id: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const FriendshipCreateManyInputObjectSchema: z.ZodType<Prisma.FriendshipCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipCreateManyInput>;
export const FriendshipCreateManyInputObjectZodSchema = makeSchema();
