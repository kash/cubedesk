import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipSelectObjectSchema as FriendshipSelectObjectSchema } from './FriendshipSelect.schema';
import { FriendshipIncludeObjectSchema as FriendshipIncludeObjectSchema } from './FriendshipInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FriendshipSelectObjectSchema).optional(),
  include: z.lazy(() => FriendshipIncludeObjectSchema).optional()
}).strict();
export const FriendshipArgsObjectSchema = makeSchema();
export const FriendshipArgsObjectZodSchema = makeSchema();
