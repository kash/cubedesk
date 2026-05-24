import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveCreateWithoutSolve_viewsInputObjectSchema as SolveCreateWithoutSolve_viewsInputObjectSchema } from './SolveCreateWithoutSolve_viewsInput.schema';
import { SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema as SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedCreateWithoutSolve_viewsInput.schema';
import { SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema as SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema } from './SolveCreateOrConnectWithoutSolve_viewsInput.schema';
import { SolveUpsertWithoutSolve_viewsInputObjectSchema as SolveUpsertWithoutSolve_viewsInputObjectSchema } from './SolveUpsertWithoutSolve_viewsInput.schema';
import { SolveWhereUniqueInputObjectSchema as SolveWhereUniqueInputObjectSchema } from './SolveWhereUniqueInput.schema';
import { SolveUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema as SolveUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema } from './SolveUpdateToOneWithWhereWithoutSolve_viewsInput.schema';
import { SolveUpdateWithoutSolve_viewsInputObjectSchema as SolveUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUpdateWithoutSolve_viewsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveCreateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedCreateWithoutSolve_viewsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => SolveCreateOrConnectWithoutSolve_viewsInputObjectSchema).optional(),
  upsert: z.lazy(() => SolveUpsertWithoutSolve_viewsInputObjectSchema).optional(),
  connect: z.lazy(() => SolveWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => SolveUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema)]).optional()
}).strict();
export const SolveUpdateOneRequiredWithoutSolve_viewsNestedInputObjectSchema: z.ZodType<Prisma.SolveUpdateOneRequiredWithoutSolve_viewsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateOneRequiredWithoutSolve_viewsNestedInput>;
export const SolveUpdateOneRequiredWithoutSolve_viewsNestedInputObjectZodSchema = makeSchema();
