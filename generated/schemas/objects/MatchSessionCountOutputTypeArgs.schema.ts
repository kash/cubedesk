import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionCountOutputTypeSelectObjectSchema as MatchSessionCountOutputTypeSelectObjectSchema } from './MatchSessionCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchSessionCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MatchSessionCountOutputTypeArgsObjectSchema = makeSchema();
export const MatchSessionCountOutputTypeArgsObjectZodSchema = makeSchema();
