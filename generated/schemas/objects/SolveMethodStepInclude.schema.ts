import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema'

const makeSchema = () => z.object({
  solve: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional()
}).strict();
export const SolveMethodStepIncludeObjectSchema: z.ZodType<Prisma.SolveMethodStepInclude> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepInclude>;
export const SolveMethodStepIncludeObjectZodSchema = makeSchema();
