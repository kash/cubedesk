import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogCreateManyUserInputObjectSchema as MetricLogCreateManyUserInputObjectSchema } from './MetricLogCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => MetricLogCreateManyUserInputObjectSchema), z.lazy(() => MetricLogCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const MetricLogCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.MetricLogCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCreateManyUserInputEnvelope>;
export const MetricLogCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
