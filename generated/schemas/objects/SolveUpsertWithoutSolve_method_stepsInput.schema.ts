import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUpdateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_method_stepsInput.schema';
import { SolveCreateWithoutSolve_method_stepsInputObjectSchema as SolveCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_method_stepsInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutSolve_method_stepsInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutSolve_method_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutSolve_method_stepsInput>;
export const SolveUpsertWithoutSolve_method_stepsInputObjectZodSchema = makeSchema();
