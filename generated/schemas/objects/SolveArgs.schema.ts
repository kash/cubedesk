import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveSelectObjectSchema as SolveSelectObjectSchema } from './SolveSelect.schema';
import { SolveIncludeObjectSchema as SolveIncludeObjectSchema } from './SolveInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SolveSelectObjectSchema).optional(),
  include: z.lazy(() => SolveIncludeObjectSchema).optional()
}).strict();
export const SolveArgsObjectSchema = makeSchema();
export const SolveArgsObjectZodSchema = makeSchema();
