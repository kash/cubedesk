import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './FriendshipWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FriendshipWhereInputObjectSchema).optional(),
  some: z.lazy(() => FriendshipWhereInputObjectSchema).optional(),
  none: z.lazy(() => FriendshipWhereInputObjectSchema).optional()
}).strict();
export const FriendshipListRelationFilterObjectSchema: z.ZodType<Prisma.FriendshipListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipListRelationFilter>;
export const FriendshipListRelationFilterObjectZodSchema = makeSchema();
