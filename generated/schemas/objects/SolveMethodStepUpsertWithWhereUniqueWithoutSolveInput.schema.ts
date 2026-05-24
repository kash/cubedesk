import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepUpdateWithoutSolveInputObjectSchema as SolveMethodStepUpdateWithoutSolveInputObjectSchema } from './SolveMethodStepUpdateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedUpdateWithoutSolveInput.schema';
import { SolveMethodStepCreateWithoutSolveInputObjectSchema as SolveMethodStepCreateWithoutSolveInputObjectSchema } from './SolveMethodStepCreateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => SolveMethodStepUpdateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedUpdateWithoutSolveInputObjectSchema)]),
  create: z.union([z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepUpsertWithWhereUniqueWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepUpsertWithWhereUniqueWithoutSolveInput>;
export const SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectZodSchema = makeSchema();
