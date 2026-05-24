import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { DemoSolveSelectObjectSchema as DemoSolveSelectObjectSchema } from './DemoSolveSelect.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => DemoSolveSelectObjectSchema).optional()
}).strict();
export const DemoSolveArgsObjectSchema = makeSchema();
export const DemoSolveArgsObjectZodSchema = makeSchema();
