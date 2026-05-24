import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipFindManySchema as FriendshipFindManySchema } from '../findManyFriendship.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { FriendshipRequestCountOutputTypeArgsObjectSchema as FriendshipRequestCountOutputTypeArgsObjectSchema } from './FriendshipRequestCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  from_id: z.boolean().optional(),
  to_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  accepted_at: z.boolean().optional(),
  friendship: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  from_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  to_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FriendshipRequestCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FriendshipRequestSelectObjectSchema: z.ZodType<Prisma.FriendshipRequestSelect> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestSelect>;
export const FriendshipRequestSelectObjectZodSchema = makeSchema();
