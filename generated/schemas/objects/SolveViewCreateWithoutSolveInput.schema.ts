import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutSolve_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema).optional()
}).strict();
export const SolveViewCreateWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveViewCreateWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateWithoutSolveInput>;
export const SolveViewCreateWithoutSolveInputObjectZodSchema = makeSchema();
