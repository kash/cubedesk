import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSolve_method_stepsInputObjectSchema as SolveCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_method_stepsInput.schema';
import { SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema as SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema } from './SolveCreateOrConnectWithoutSolve_method_stepsInput.schema';
import { SolveUpsertWithoutSolve_method_stepsInputObjectSchema as SolveUpsertWithoutSolve_method_stepsInputObjectSchema } from './SolveUpsertWithoutSolve_method_stepsInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutSolve_method_stepsInputObjectSchema as SolveUpdateToOneWithWhereWithoutSolve_method_stepsInputObjectSchema } from './SolveUpdateToOneWithWhereWithoutSolve_method_stepsInput.schema';
import { SolveUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUpdateWithoutSolve_method_stepsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_method_stepsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_method_stepsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutSolve_method_stepsInputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutSolve_method_stepsInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUpdateWithoutSolve_method_stepsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_method_stepsInputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutSolve_method_stepsNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutSolve_method_stepsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutSolve_method_stepsNestedInput>;
export const SolveUpdateOneRequiredWithoutSolve_method_stepsNestedInputObjectZodSchema = makeSchema();
