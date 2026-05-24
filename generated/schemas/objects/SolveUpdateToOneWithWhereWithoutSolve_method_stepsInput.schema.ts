import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUpdateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_method_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutSolve_method_stepsInputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutSolve_method_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutSolve_method_stepsInput>;
export const SolveUpdateToOneWithWhereWithoutSolve_method_stepsInputObjectZodSchema = makeSchema();
