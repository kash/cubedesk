import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './MetricLogWhereUniqueInput.schema';
import { MetricLogUpdateWithoutUserInputObjectSchema as MetricLogUpdateWithoutUserInputObjectSchema } from './MetricLogUpdateWithoutUserInput.schema';
import { MetricLogUncheckedUpdateWithoutUserInputObjectSchema as MetricLogUncheckedUpdateWithoutUserInputObjectSchema } from './MetricLogUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetricLogWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => MetricLogUpdateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const MetricLogUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUpdateWithWhereUniqueWithoutUserInput>;
export const MetricLogUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
