import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogCreateWithoutUserInputObjectSchema as MetricLogCreateWithoutUserInputObjectSchema } from './MetricLogCreateWithoutUserInput.schema';
import { MetricLogUncheckedCreateWithoutUserInputObjectSchema as MetricLogUncheckedCreateWithoutUserInputObjectSchema } from './MetricLogUncheckedCreateWithoutUserInput.schema';
import { MetricLogCreateOrConnectWithoutUserInputObjectSchema as MetricLogCreateOrConnectWithoutUserInputObjectSchema } from './MetricLogCreateOrConnectWithoutUserInput.schema';
import { MetricLogCreateManyUserInputEnvelopeObjectSchema as MetricLogCreateManyUserInputEnvelopeObjectSchema } from './MetricLogCreateManyUserInputEnvelope.schema';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './MetricLogWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema).array(), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MetricLogCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => MetricLogCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MetricLogCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MetricLogWhereUniqueInputObjectSchema), z.lazy(() => MetricLogWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MetricLogCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCreateNestedManyWithoutUserInput>;
export const MetricLogCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
