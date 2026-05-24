import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { SolveMethodStepCreateWithoutSolveInputObjectSchema as SolveMethodStepCreateWithoutSolveInputObjectSchema } from './SolveMethodStepCreateWithoutSolveInput.schema';
import { SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema as SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema } from './SolveMethodStepUncheckedCreateWithoutSolveInput.schema';
import { SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema as SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema } from './SolveMethodStepCreateOrConnectWithoutSolveInput.schema';
import { SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectSchema as SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectSchema } from './SolveMethodStepUpsertWithWhereUniqueWithoutSolveInput.schema';
import { SolveMethodStepCreateManySolveInputEnvelopeObjectSchema as SolveMethodStepCreateManySolveInputEnvelopeObjectSchema } from './SolveMethodStepCreateManySolveInputEnvelope.schema';
import { SolveMethodStepWhereUniqueInputObjectSchema as SolveMethodStepWhereUniqueInputObjectSchema } from './SolveMethodStepWhereUniqueInput.schema';
import { SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectSchema as SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectSchema } from './SolveMethodStepUpdateWithWhereUniqueWithoutSolveInput.schema';
import { SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectSchema as SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectSchema } from './SolveMethodStepUpdateManyWithWhereWithoutSolveInput.schema';
import { SolveMethodStepScalarWhereInputObjectSchema as SolveMethodStepScalarWhereInputObjectSchema } from './SolveMethodStepScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepCreateWithoutSolveInputObjectSchema).array(), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUncheckedCreateWithoutSolveInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepCreateOrConnectWithoutSolveInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUpsertWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => SolveMethodStepCreateManySolveInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema), z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema), z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema), z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema), z.lazy(() => SolveMethodStepWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUpdateWithWhereUniqueWithoutSolveInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectSchema), z.lazy(() => SolveMethodStepUpdateManyWithWhereWithoutSolveInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema), z.lazy(() => SolveMethodStepScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInputObjectSchema: z.ZodType<Prisma.SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInput>;
export const SolveMethodStepUncheckedUpdateManyWithoutSolveNestedInputObjectZodSchema = makeSchema();
