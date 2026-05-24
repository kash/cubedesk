import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { TopSolveSelectObjectSchema as TopSolveSelectObjectSchema } from './TopSolveSelect.schema';
import { TopSolveIncludeObjectSchema as TopSolveIncludeObjectSchema } from './TopSolveInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => TopSolveSelectObjectSchema).optional(),
  include: z.lazy(() => TopSolveIncludeObjectSchema).optional()
}).strict();
export const TopSolveArgsObjectSchema = makeSchema();
export const TopSolveArgsObjectZodSchema = makeSchema();
