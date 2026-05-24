import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipWhereInputObjectSchema as FriendshipWhereInputObjectSchema } from './FriendshipWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountFriendshipsArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountFriendshipsArgsObjectZodSchema = makeSchema();
