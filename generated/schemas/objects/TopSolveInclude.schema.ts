import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  solve: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TopSolveIncludeObjectSchema: z.ZodType<Prisma.TopSolveInclude> = makeSchema() as unknown as z.ZodType<Prisma.TopSolveInclude>;
export const TopSolveIncludeObjectZodSchema = makeSchema();
