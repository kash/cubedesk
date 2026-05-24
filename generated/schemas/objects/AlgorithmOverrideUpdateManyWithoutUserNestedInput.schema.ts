import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { AlgorithmOverrideCreateWithoutUserInputObjectSchema as AlgorithmOverrideCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateWithoutUserInput.schema';
import { AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema as AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema } from './AlgorithmOverrideUncheckedCreateWithoutUserInput.schema';
import { AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema as AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema } from './AlgorithmOverrideCreateOrConnectWithoutUserInput.schema';
import { AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectSchema as AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInput.schema';
import { AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema as AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema } from './AlgorithmOverrideCreateManyUserInputEnvelope.schema';
import { AlgorithmOverrideWhereUniqueInputObjectSchema as AlgorithmOverrideWhereUniqueInputObjectSchema } from './AlgorithmOverrideWhereUniqueInput.schema';
import { AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectSchema as AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInput.schema';
import { AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectSchema as AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectSchema } from './AlgorithmOverrideUpdateManyWithWhereWithoutUserInput.schema';
import { AlgorithmOverrideScalarWhereInputObjectSchema as AlgorithmOverrideScalarWhereInputObjectSchema } from './AlgorithmOverrideScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideCreateWithoutUserInputObjectSchema).array(), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => AlgorithmOverrideCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema), z.lazy(() => AlgorithmOverrideWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => AlgorithmOverrideUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema), z.lazy(() => AlgorithmOverrideScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const AlgorithmOverrideUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.AlgorithmOverrideUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.AlgorithmOverrideUpdateManyWithoutUserNestedInput>;
export const AlgorithmOverrideUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
