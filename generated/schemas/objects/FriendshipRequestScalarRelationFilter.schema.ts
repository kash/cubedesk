import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional()
}).strict();
export const FriendshipRequestScalarRelationFilterObjectSchema: z.ZodType<Prisma.FriendshipRequestScalarRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestScalarRelationFilter>;
export const FriendshipRequestScalarRelationFilterObjectZodSchema = makeSchema();
