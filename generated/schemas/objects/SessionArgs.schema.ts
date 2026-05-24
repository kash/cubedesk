import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionSelectObjectSchema as SessionSelectObjectSchema } from './SessionSelect.schema';
import { SessionIncludeObjectSchema as SessionIncludeObjectSchema } from './SessionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SessionSelectObjectSchema).optional(),
  include: z.lazy(() => SessionIncludeObjectSchema).optional()
}).strict();
export const SessionArgsObjectSchema = makeSchema();
export const SessionArgsObjectZodSchema = makeSchema();
