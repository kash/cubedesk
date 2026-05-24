import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutTop_solveInputObjectSchema as SolveCreateWithoutTop_solveInputObjectSchema } from './SolveCreateWithoutTop_solveInput.schema';
import { SolveUncheckedCreateWithoutTop_solveInputObjectSchema as SolveUncheckedCreateWithoutTop_solveInputObjectSchema } from './SolveUncheckedCreateWithoutTop_solveInput.schema';
import { SolveCreateOrConnectWithoutTop_solveInputObjectSchema as SolveCreateOrConnectWithoutTop_solveInputObjectSchema } from './SolveCreateOrConnectWithoutTop_solveInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutTop_solveInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutTop_solveInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutTop_solveInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutTop_solveInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_solveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutTop_solveInput>;
export const SolveCreateNestedOneWithoutTop_solveInputObjectZodSchema = makeSchema();
