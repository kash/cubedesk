import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestWhereInputObjectSchema as FriendshipRequestWhereInputObjectSchema } from './FriendshipRequestWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => FriendshipRequestWhereInputObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeCountFriendshipsRequestsReceivedArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeCountFriendshipsRequestsReceivedArgsObjectZodSchema = makeSchema();
