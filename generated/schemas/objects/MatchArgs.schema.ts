import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MatchSelectObjectSchema as MatchSelectObjectSchema } from './MatchSelect.schema';
import { MatchIncludeObjectSchema as MatchIncludeObjectSchema } from './MatchInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => MatchSelectObjectSchema).optional(),
  include: z.lazy(() => MatchIncludeObjectSchema).optional()
}).strict();
export const MatchArgsObjectSchema = makeSchema();
export const MatchArgsObjectZodSchema = makeSchema();
