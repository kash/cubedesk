import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  solve_1: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_2: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_3: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_4: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_5: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TopAverageIncludeObjectSchema: z.ZodType<Prisma.TopAverageInclude> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageInclude>;
export const TopAverageIncludeObjectZodSchema = makeSchema();
