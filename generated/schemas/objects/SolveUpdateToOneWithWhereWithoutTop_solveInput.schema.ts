import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutTop_solveInputObjectSchema as SolveUpdateWithoutTop_solveInputObjectSchema } from './SolveUpdateWithoutTop_solveInput.schema';
import { SolveUncheckedUpdateWithoutTop_solveInputObjectSchema as SolveUncheckedUpdateWithoutTop_solveInputObjectSchema } from './SolveUncheckedUpdateWithoutTop_solveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutTop_solveInputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutTop_solveInputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutTop_solveInput>;
export const SolveUpdateToOneWithWhereWithoutTop_solveInputObjectZodSchema = makeSchema();
