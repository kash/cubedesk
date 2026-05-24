import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutSolve_method_stepsInputObjectSchema as SolveCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_method_stepsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutSolve_method_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutSolve_method_stepsInput>;
export const SolveCreateOrConnectWithoutSolve_method_stepsInputObjectZodSchema = makeSchema();
