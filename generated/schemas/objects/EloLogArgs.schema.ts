import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { EloLogSelectObjectSchema as EloLogSelectObjectSchema } from './EloLogSelect.schema';
import { EloLogIncludeObjectSchema as EloLogIncludeObjectSchema } from './EloLogInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => EloLogSelectObjectSchema).optional(),
  include: z.lazy(() => EloLogIncludeObjectSchema).optional()
}).strict();
export const EloLogArgsObjectSchema = makeSchema();
export const EloLogArgsObjectZodSchema = makeSchema();
