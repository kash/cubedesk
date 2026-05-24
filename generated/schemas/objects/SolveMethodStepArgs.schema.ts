import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepSelectObjectSchema as SolveMethodStepSelectObjectSchema } from './SolveMethodStepSelect.schema';
import { SolveMethodStepIncludeObjectSchema as SolveMethodStepIncludeObjectSchema } from './SolveMethodStepInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => SolveMethodStepSelectObjectSchema).optional(),
  include: z.lazy(() => SolveMethodStepIncludeObjectSchema).optional()
}).strict();
export const SolveMethodStepArgsObjectSchema = makeSchema();
export const SolveMethodStepArgsObjectZodSchema = makeSchema();
