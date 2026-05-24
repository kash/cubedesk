import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountSelectObjectSchema as UserAccountSelectObjectSchema } from './UserAccountSelect.schema';
import { UserAccountIncludeObjectSchema as UserAccountIncludeObjectSchema } from './UserAccountInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserAccountSelectObjectSchema).optional(),
  include: z.lazy(() => UserAccountIncludeObjectSchema).optional()
}).strict();
export const UserAccountArgsObjectSchema = makeSchema();
export const UserAccountArgsObjectZodSchema = makeSchema();
