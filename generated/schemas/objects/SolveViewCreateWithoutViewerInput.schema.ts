import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema as SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './SolveCreateNestedOneWithoutSolve_viewsInput.schema';
import { UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema as UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema } from './UserAccountCreateNestedOneWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  created_at: z.coerce.date().optional(),
  solve: z.lazy(() => SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutSolve_viewsInputObjectSchema)
}).strict();
export const SolveViewCreateWithoutViewerInputObjectSchema: z.ZodType<Prisma.SolveViewCreateWithoutViewerInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveViewCreateWithoutViewerInput>;
export const SolveViewCreateWithoutViewerInputObjectZodSchema = makeSchema();
