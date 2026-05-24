import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional(),
  some: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional(),
  none: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional()
}).strict();
export const FriendshipRequestListRelationFilterObjectSchema: z.ZodType<Prisma.FriendshipRequestListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestListRelationFilter>;
export const FriendshipRequestListRelationFilterObjectZodSchema = makeSchema();
