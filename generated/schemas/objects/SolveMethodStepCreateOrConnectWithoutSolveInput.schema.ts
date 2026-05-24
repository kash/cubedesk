import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepCreateWithoutSolveInputObjectSchema as SolveMethodStepCreateWithoutSolveInputObjectSchema } from './SolveMethodStepCreateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedCreateWithoutSolveInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema)])
}).strict();
export const SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepCreateOrConnectWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepCreateOrConnectWithoutSolveInput>;
export const SolveMethodStepCreateOrConnectWithoutSolveInputObjectZodSchema = makeSchema();
