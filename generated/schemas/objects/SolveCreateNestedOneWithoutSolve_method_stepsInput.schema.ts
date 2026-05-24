import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSolve_method_stepsInputObjectSchema as SolveCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_method_stepsInput.schema';
import { SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema as SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateOrConnectWithoutSolve_method_stepsInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutSolve_method_stepsInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutSolve_method_stepsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutSolve_method_stepsInput>;
export const SolveCreateNestedOneWithoutSolve_method_stepsInputObjectZodSchema = makeSchema();
