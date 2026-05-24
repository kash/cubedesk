import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema as SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './SolveCreateNestedOneWithoutSolve_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutSolve_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  solve: z.lazy(() => SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema).optional()
}).strict();
export const SolveViewCreateInputObjectSchema: z.ZodType<Prisma.SolveViewCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateInput>;
export const SolveViewCreateInputObjectZodSchema = makeSchema();
