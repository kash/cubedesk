import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveUpdateWithoutTop_solveInputObjectSchema as SolveUpdateWithoutTop_solveInputObjectSchema } from './SolveUpdateWithoutTop_solveInput.schema';
import { SolveUncheckedUpdateWithoutTop_solveInputObjectSchema as SolveUncheckedUpdateWithoutTop_solveInputObjectSchema } from './SolveUncheckedUpdateWithoutTop_solveInput.schema';
import { SolveCreateWithoutTop_solveInputObjectSchema as SolveCreateWithoutTop_solveInputObjectSchema } from './SolveCreateWithoutTop_solveInput.schema';
import { SolveUncheckedCreateWithoutTop_solveInputObjectSchema as SolveUncheckedCreateWithoutTop_solveInputObjectSchema } from './SolveUncheckedCreateWithoutTop_solveInput.schema';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => SolveUpdateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_solveInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_solveInputObjectSchema)]),
  where: z.lazy(() => SolveWhereInputObjectSchema).optional()
}).strict();
export const SolveUpsertWithoutTop_solveInputObjectSchema: z.ZodType<Prisma.SolveUpsertWithoutTop_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpsertWithoutTop_solveInput>;
export const SolveUpsertWithoutTop_solveInputObjectZodSchema = makeSchema();
