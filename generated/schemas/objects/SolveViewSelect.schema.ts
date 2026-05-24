import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveArgsObjectSchema as SolveArgsObjectSchema } from './SolveArgs.schema';
import { UserAccountArgsObjectSchema as UserAccountArgsObjectSchema } from './UserAccountArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  solve_id: z.boolean().optional(),
  viewer_id: z.boolean().optional(),
  user_id: z.boolean().optional(),
  created_at: z.boolean().optional(),
  solve: z.union([z.boolean(), z.lazy(() => SolveArgsObjectSchema)]).optional(),
  user: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional(),
  viewer: z.union([z.boolean(), z.lazy(() => UserAccountArgsObjectSchema)]).optional()
}).strict();
export const SolveViewSelectObjectSchema: z.ZodType<Prisma.SolveViewSelect> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewSelect>;
export const SolveViewSelectObjectZodSchema = makeSchema();
