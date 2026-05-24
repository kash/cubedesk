import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCountOutputTypeSelectObjectSchema as UserAccountCountOutputTypeSelectObjectSchema } from './UserAccountCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => UserAccountCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const UserAccountCountOutputTypeArgsObjectSchema = makeSchema();
export const UserAccountCountOutputTypeArgsObjectZodSchema = makeSchema();
