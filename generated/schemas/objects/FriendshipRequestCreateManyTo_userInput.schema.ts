import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  from_id: z.string(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable()
}).strict();
export const FriendshipRequestCreateManyTo_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateManyTo_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyTo_userInput>;
export const FriendshipRequestCreateManyTo_userInputObjectZodSchema = makeSchema();
