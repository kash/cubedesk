import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  metric_type: MetricLogTypeSchema,
  metric_value: z.number().optional().nullable(),
  metric_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const MetricLogUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.MetricLogUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogUncheckedCreateWithoutUserInput>;
export const MetricLogUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
