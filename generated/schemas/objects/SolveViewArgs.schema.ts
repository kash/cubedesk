import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveViewSelectObjectSchema as SolveViewSelectObjectSchema } from './SolveViewSelect.schema';
import { SolveViewIncludeObjectSchema as SolveViewIncludeObjectSchema } from './SolveViewInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SolveViewSelectObjectSchema).optional(),
  include: z.lazy(() => SolveViewIncludeObjectSchema).optional()
}).strict();
export const SolveViewArgsObjectSchema = makeSchema();
export const SolveViewArgsObjectZodSchema = makeSchema();
