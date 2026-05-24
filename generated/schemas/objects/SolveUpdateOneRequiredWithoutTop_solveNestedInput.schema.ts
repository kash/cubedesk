import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_solveInputObjectSchema as SolveCreateWithoutTop_solveInputObjectSchema } from './SolveCreateWithoutTop_solveInput.schema';
import { SolveUncheckedCreateWithoutTop_solveInputObjectSchema as SolveUncheckedCreateWithoutTop_solveInputObjectSchema } from './SolveUncheckedCreateWithoutTop_solveInput.schema';
import { SolveCreateOrConnectWithoutTop_solveInputObjectSchema as SolveCreateOrConnectWithoutTop_solveInputObjectSchema } from './SolveCreateOrConnectWithoutTop_solveInput.schema';
import { SolveUpsertWithoutTop_solveInputObjectSchema as SolveUpsertWithoutTop_solveInputObjectSchema } from './SolveUpsertWithoutTop_solveInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutTop_solveInputObjectSchema as SolveUpdateToOneWithWhereWithoutTop_solveInputObjectSchema } from './SolveUpdateToOneWithWhereWithoutTop_solveInput.schema';
import { SolveUpdateWithoutTop_solveInputObjectSchema as SolveUpdateWithoutTop_solveInputObjectSchema } from './SolveUpdateWithoutTop_solveInput.schema';
import { SolveUncheckedUpdateWithoutTop_solveInputObjectSchema as SolveUncheckedUpdateWithoutTop_solveInputObjectSchema } from './SolveUncheckedUpdateWithoutTop_solveInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_solveInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_solveInputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutTop_solveInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUpdateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_solveInputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutTop_solveNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_solveNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutTop_solveNestedInput>;
export const SolveUpdateOneRequiredWithoutTop_solveNestedInputObjectZodSchema = makeSchema();
