import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationSelectObjectSchema as NotificationSelectObjectSchema } from './NotificationSelect.schema';
import { NotificationIncludeObjectSchema as NotificationIncludeObjectSchema } from './NotificationInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NotificationSelectObjectSchema).optional(),
  include: z.lazy(() => NotificationIncludeObjectSchema).optional()
}).strict();
export const NotificationArgsObjectSchema = makeSchema();
export const NotificationArgsObjectZodSchema = makeSchema();
