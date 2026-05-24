import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const FriendshipWhereUniqueInputObjectSchema: z.ZodType<Prisma.FriendshipWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipWhereUniqueInput>;
export const FriendshipWhereUniqueInputObjectZodSchema = makeSchema();
