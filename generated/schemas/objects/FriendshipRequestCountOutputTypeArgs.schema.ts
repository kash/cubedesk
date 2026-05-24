import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { FriendshipRequestCountOutputTypeSelectObjectSchema as FriendshipRequestCountOutputTypeSelectObjectSchema } from './FriendshipRequestCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => FriendshipRequestCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const FriendshipRequestCountOutputTypeArgsObjectSchema = makeSchema();
export const FriendshipRequestCountOutputTypeArgsObjectZodSchema = makeSchema();
