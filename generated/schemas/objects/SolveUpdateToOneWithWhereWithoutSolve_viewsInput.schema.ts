import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveWhereInputObjectSchema as SolveWhereInputObjectSchema } from './SolveWhereInput.schema';
import { SolveUpdateWithoutSolve_viewsInputObjectSchema as SolveUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUpdateWithoutSolve_viewsInput.schema';
import { SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema as SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema } from './SolveUncheckedUpdateWithoutSolve_viewsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => SolveUpdateWithoutSolve_viewsInputObjectSchema), z.lazy(() => SolveUncheckedUpdateWithoutSolve_viewsInputObjectSchema)])
}).strict();
export const SolveUpdateToOneWithWhereWithoutSolve_viewsInputObjectSchema: z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutSolve_viewsInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveUpdateToOneWithWhereWithoutSolve_viewsInput>;
export const SolveUpdateToOneWithWhereWithoutSolve_viewsInputObjectZodSchema = makeSchema();
