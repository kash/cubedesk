import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  to_id: z.string(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable()
}).strict();
export const FriendshipRequestCreateManyFrom_userInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateManyFrom_userInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyFrom_userInput>;
export const FriendshipRequestCreateManyFrom_userInputObjectZodSchema = makeSchema();
