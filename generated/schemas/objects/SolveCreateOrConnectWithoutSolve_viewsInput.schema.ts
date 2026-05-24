import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveCreateWithoutSolve_viewsInputObjectSchema as SolveCreateWithoutSolve_viewsInputObjectSchema } from './SolveCreateWithoutSolve_viewsInput.schema';
import { SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema as SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema)])
}).strict();
export const SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.SolveCreateOrConnectWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateOrConnectWithoutSolve_viewsInput>;
export const SolveCreateOrConnectWithoutSolve_viewsInputObjectZodSchema = makeSchema();
