import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogCreateWithoutUserInputObjectSchema as MetricLogCreateWithoutUserInputObjectSchema } from './MetricLogCreateWithoutUserInput.schema';
import { MetricLogUncheckedCreateWithoutUserInputObjectSchema as MetricLogUncheckedCreateWithoutUserInputObjectSchema } from './MetricLogUncheckedCreateWithoutUserInput.schema';
import { MetricLogCreateOrConnectWithoutUserInputObjectSchema as MetricLogCreateOrConnectWithoutUserInputObjectSchema } from './MetricLogCreateOrConnectWithoutUserInput.schema';
import { MetricLogUpsertWithWhereUniqueWithoutUserInputObjectSchema as MetricLogUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './MetricLogUpsertWithWhereUniqueWithoutUserInput.schema';
import { MetricLogCreateManyUserInputEnvelopeObjectSchema as MetricLogCreateManyUserInputEnvelopeObjectSchema } from './MetricLogCreateManyUserInputEnvelope.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './MetricLogWhereUniqueInput.schema';
import { MetricLogUpdateWithWhereUniqueWithoutUserInputObjectSchema as MetricLogUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './MetricLogUpdateWithWhereUniqueWithoutUserInput.schema';
import { MetricLogUpdateManyWithWhereWithoutUserInputObjectSchema as MetricLogUpdateManyWithWhereWithoutUserInputObjectSchema } from './MetricLogUpdateManyWithWhereWithoutUserInput.schema';
import { MetricLogScalarWhereInputObjectSchema as MetricLogScalarWhereInputObjectSchema } from './MetricLogScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MetricLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MetricLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => MetricLogUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MetricLogUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MetricLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => MetricLogWhereUniqueInputObjectSchema), z.lazy(() => MetricLogWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => MetricLogWhereUniqueInputObjectSchema), z.lazy(() => MetricLogWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => MetricLogWhereUniqueInputObjectSchema), z.lazy(() => MetricLogWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => MetricLogWhereUniqueInputObjectSchema), z.lazy(() => MetricLogWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => MetricLogUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => MetricLogUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => MetricLogUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => MetricLogUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => MetricLogScalarWhereInputObjectSchema), z.lazy(() => MetricLogScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const MetricLogUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.MetricLogUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUpdateManyWithoutUserNestedInput>;
export const MetricLogUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
