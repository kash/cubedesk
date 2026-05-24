import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogWhereUniqueInputObjectSchema as MetricLogWhereUniqueInputObjectSchema } from './MetricLogWhereUniqueInput.schema';
import { MetricLogCreateWithoutUserInputObjectSchema as MetricLogCreateWithoutUserInputObjectSchema } from './MetricLogCreateWithoutUserInput.schema';
import { MetricLogUncheckedCreateWithoutUserInputObjectSchema as MetricLogUncheckedCreateWithoutUserInputObjectSchema } from './MetricLogUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MetricLogWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MetricLogCreateWithoutUserInputObjectSchema), z.lazy(() => MetricLogUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const MetricLogCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCreateOrConnectWithoutUserInput>;
export const MetricLogCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
