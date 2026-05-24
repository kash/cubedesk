import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSessionSelectObjectSchema as MatchSessionSelectObjectSchema } from './MatchSessionSelect.schema';
import { MatchSessionIncludeObjectSchema as MatchSessionIncludeObjectSchema } from './MatchSessionInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchSessionSelectObjectSchema).optional(),
  include: z.lazy(() => MatchSessionIncludeObjectSchema).optional()
}).strict();
export const MatchSessionArgsObjectSchema = makeSchema();
export const MatchSessionArgsObjectZodSchema = makeSchema();
