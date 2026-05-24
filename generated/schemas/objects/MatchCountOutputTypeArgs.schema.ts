import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchCountOutputTypeSelectObjectSchema as MatchCountOutputTypeSelectObjectSchema } from './MatchCountOutputTypeSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchCountOutputTypeSelectObjectSchema).optional()
}).strict();
export const MatchCountOutputTypeArgsObjectSchema = makeSchema();
export const MatchCountOutputTypeArgsObjectZodSchema = makeSchema();
