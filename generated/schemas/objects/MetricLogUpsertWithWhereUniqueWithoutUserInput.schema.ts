import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './MetricLogWhereUniqueInput.schema';
import { MetricLogUpdateWithoutUserInputObjectSchema as MetricLogUpdateWithoutUserInputObjectSchema } from './MetricLogUpdateWithoutUserInput.schema';
import { MetricLogUncheckedUpdateWithoutUserInputObjectSchema as MetricLogUncheckedUpdateWithoutUserInputObjectSchema } from './MetricLogUncheckedUpdateWithoutUserInput.schema';
import { MetricLogCreateWithoutUserInputObjectSchema as MetricLogCreateWithoutUserInputObjectSchema } from './MetricLogCreateWithoutUserInput.schema';
import { MetricLogUncheckedCreateWithoutUserInputObjectSchema as MetricLogUncheckedCreateWithoutUserInputObjectSchema } from './MetricLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetricLogWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => MetricLogUpdateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MetricLogUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUpsertWithWhereUniqueWithoutUserInput>;
export const MetricLogUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
