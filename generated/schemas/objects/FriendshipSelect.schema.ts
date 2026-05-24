import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestArgsObjectSchema as FriendshipRequestArgsObjectSchema } from './FriendshipRequestArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  other_user_id: z.boolean().optional(),
  friendship_request_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  friendship_request: z.union([z.boolean(), z.lazy(() => FriendshipRequestArgsObjectSchema)]).optional(),
  other_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const FriendshipSelectObjectSchema: z.ZodType<Prisma.FriendshipSelect> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipSelect>;
export const FriendshipSelectObjectZodSchema = makeSchema();
