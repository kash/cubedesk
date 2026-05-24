import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipFindManySchema as FriendshipFindManySchema } from '../findManyFriendship.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema';
import { FriendshipRequestCountOutputTypeArgsObjectSchema as FriendshipRequestCountOutputTypeArgsObjectSchema } from './FriendshipRequestCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  friendship: z.union([z.boolean(), z.lazy(() => FriendshipFindManySchema)]).optional(),
  from_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  to_user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => FriendshipRequestCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const FriendshipRequestIncludeObjectSchema: z.ZodType<Prisma.FriendshipRequestInclude> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestInclude>;
export const FriendshipRequestIncludeObjectZodSchema = makeSchema();
