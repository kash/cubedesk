import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  time: z.boolean().optional(),
  cube_type: z.boolean().optional(),
  solve_1_id: z.boolean().optional(),
  solve_2_id: z.boolean().optional(),
  solve_3_id: z.boolean().optional(),
  solve_4_id: z.boolean().optional(),
  solve_5_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  solve_1: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_2: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_3: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_4: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  solve_5: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const TopAverageSelectObjectSchema: z.ZodType<Prisma.TopAverageSelect> = makeSchema() as unknown as z.ZodType<Prisma.TopAverageSelect>;
export const TopAverageSelectObjectZodSchema = makeSchema();
