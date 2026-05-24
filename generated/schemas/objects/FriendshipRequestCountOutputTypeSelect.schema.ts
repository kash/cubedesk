import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCountOutputTypeCountFriendshipArgsObjectSchema as FriendshipRequestCountOutputTypeCountFriendshipArgsObjectSchema } from './FriendshipRequestCountOutputTypeCountFriendshipArgs.schema'

const makeSchema = () => z.object({
  friendship: z.union([z.boolean(), z.lazy(() => FriendshipRequestCountOutputTypeCountFriendshipArgsObjectSchema)]).optional()
}).strict();
export const FriendshipRequestCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.FriendshipRequestCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.FriendshipRequestCountOutputTypeSelect>;
export const FriendshipRequestCountOutputTypeSelectObjectZodSchema = makeSchema();
