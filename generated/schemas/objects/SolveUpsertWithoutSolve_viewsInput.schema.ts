import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutSolve_viewsInputObjectSchema as SolveUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUpdateWithoutSolve_viewsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_viewsInput.schema';
import { SolveCreateWithoutSolve_viewsInputObjectSchema as SolveCreateWithoutSolve_viewsInputObjectSchema } from './SolveCreateWithoutSolve_viewsInput.schema';
import { SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema as SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_viewsInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutSolve_viewsInput>;
export const SolveUpsertWithoutSolve_viewsInputObjectZodSchema = makeSchema();
