import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SessionCountOutputTypeSelectObjectSchema as SessionCountOutputTypeSelectObjectSchema } from './SessionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SessionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const SessionCountOutputTypeArgsObjectSchema = makeSchema();
export const SessionCountOutputTypeArgsObjectZodSchema = makeSchema();
