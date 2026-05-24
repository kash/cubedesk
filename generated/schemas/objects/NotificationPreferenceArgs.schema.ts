import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { NotificationPreferenceSelectObjectSchema as NotificationPreferenceSelectObjectSchema } from './NotificationPreferenceSelect.schema';
import { NotificationPreferenceIncludeObjectSchema as NotificationPreferenceIncludeObjectSchema } from './NotificationPreferenceInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => NotificationPreferenceSelectObjectSchema).optional(),
  include: z.lazy(() => NotificationPreferenceIncludeObjectSchema).optional()
}).strict();
export const NotificationPreferenceArgsObjectSchema = makeSchema();
export const NotificationPreferenceArgsObjectZodSchema = makeSchema();
