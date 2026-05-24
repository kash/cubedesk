import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepUpdateWithoutSolveInputObjectSchema as SolveMethodStepUpdateWithoutSolveInputObjectSchema } from './SolveMethodStepUpdateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedUpdateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => SolveMethodStepUpdateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepUpdateWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepUpdateWithWhereUniqueWithoutSolveInput>;
export const SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
