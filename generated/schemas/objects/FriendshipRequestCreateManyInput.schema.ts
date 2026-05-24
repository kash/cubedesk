import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  from_id: z.string(),
  to_id: z.string(),
  created_at: z.coerce.date().optional(),
  accepted_at: z.coerce.date().optional().nullable()
}).strict();
export const FriendshipRequestCreateManyInputObjectSchema: z.ZodType<Prisma.FriendshipRequestCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCreateManyInput>;
export const FriendshipRequestCreateManyInputObjectZodSchema = makeSchema();
