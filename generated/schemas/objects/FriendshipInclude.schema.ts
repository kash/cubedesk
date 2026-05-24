import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestArgsObjectSchema as FriendshipRequestArgsObjectSchema } from './FriendshipRequestArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  friendship_request: z.union([z.boolean(), z.lazy(() => FriendshipRequestArgsObjectSchema)]).optional(),
  other_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const FriendshipIncludeObjectSchema: z.ZodType<Prisma.FriendshipInclude> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipInclude>;
export const FriendshipIncludeObjectZodSchema = makeSchema();
