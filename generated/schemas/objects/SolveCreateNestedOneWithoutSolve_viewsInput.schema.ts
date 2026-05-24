import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSolve_viewsInputObjectSchema as SolveCreateWithoutSolve_viewsInputObjectSchema } from './SolveCreateWithoutSolve_viewsInput.schema';
import { SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema as SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_viewsInput.schema';
import { SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema as SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema } from './SolveCreateOrConnectWithoutSolve_viewsInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional()
}).strict();
export const SolveCreateNestedOneWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.SolveCreateNestedOneWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveCreateNestedOneWithoutSolve_viewsInput>;
export const SolveCreateNestedOneWithoutSolve_viewsInputObjectZodSchema = makeSchema();
