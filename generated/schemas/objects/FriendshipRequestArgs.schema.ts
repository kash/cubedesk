import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestSelectObjectSchema as FriendshipRequestSelectObjectSchema } from './FriendshipRequestSelect.schema';
import { FriendshipRequestIncludeObjectSchema as FriendshipRequestIncludeObjectSchema } from './FriendshipRequestInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FriendshipRequestSelectObjectSchema).optional(),
  include: z.lazy(() => FriendshipRequestIncludeObjectSchema).optional()
}).strict();
export const FriendshipRequestArgsObjectSchema = makeSchema();
export const FriendshipRequestArgsObjectZodSchema = makeSchema();
