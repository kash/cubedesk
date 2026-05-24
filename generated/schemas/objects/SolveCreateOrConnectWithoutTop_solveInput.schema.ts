import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutTop_solveInputObjectSchema as SolveCreateWithoutTop_solveInputObjectSchema } from './SolveCreateWithoutTop_solveInput.schema';
import { SolveUncheckedCreateWithoutTop_solveInputObjectSchema as SolveUncheckedCreateWithoutTop_solveInputObjectSchema } from './SolveUncheckedCreateWithoutTop_solveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_solveInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutTop_solveInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutTop_solveInput>;
export const SolveCreateOrConnectWithoutTop_solveInputObjectZodSchema = makeSchema();
