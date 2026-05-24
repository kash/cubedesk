import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TimerBackgroundSelectObjectSchema as TimerBackgroundSelectObjectSchema } from './TimerBackgroundSelect.schema';
import { TimerBackgroundIncludeObjectSchema as TimerBackgroundIncludeObjectSchema } from './TimerBackgroundInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TimerBackgroundSelectObjectSchema).optional(),
  include: z.lazy(() => TimerBackgroundIncludeObjectSchema).optional()
}).strict();
export const TimerBackgroundArgsObjectSchema = makeSchema();
export const TimerBackgroundArgsObjectZodSchema = makeSchema();
