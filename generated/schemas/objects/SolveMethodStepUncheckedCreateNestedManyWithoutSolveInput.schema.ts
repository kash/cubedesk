import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepCreateWithoutSolveInputObjectSchema as SolveMethodStepCreateWithoutSolveInputObjectSchema } from './SolveMethodStepCreateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedCreateWithoutSolveInput.schema';
import { SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema as SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema } from './SolveMethodStepCreateOrConnectWithoutSolveInput.schema';
import { SolveMethodStepCreateManySolveInputEnvelopeObjectSchema as SolveMethodStepCreateManySolveInputEnvelopeObjectSchema } from './SolveMethodStepCreateManySolveInputEnvelope.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './SolveMethodStepWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveMethodStepCreateManySolveInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema), z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const SolveMethodStepUncheckedCreateNestedManyWithoutSolveInputObjectSchema: z.ZodType<Prisma.SolveMethodStepUncheckedCreateNestedManyWithoutSolveInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepUncheckedCreateNestedManyWithoutSolveInput>;
export const SolveMethodStepUncheckedCreateNestedManyWithoutSolveInputObjectZodSchema = makeSchema();
