import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema as SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './SolveCreateNestedOneWithoutSolve_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema as UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema } from './UserAccountCreateNestedOneWithoutViewed_solveInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  solve: z.lazy(() => SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema),
  viewer: z.lazy(() => UserAccountCreateNestedOneWithoutViewed_solveInputObjectSchema).optional()
}).strict();
export const SolveViewCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.SolveViewCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateWithoutUserInput>;
export const SolveViewCreateWithoutUserInputObjectZodSchema = makeSchema();
