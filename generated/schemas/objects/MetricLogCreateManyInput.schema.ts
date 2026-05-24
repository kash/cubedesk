import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  user_email: z.string().optional().nullable(),
  metric_type: MetricLogTypeSchema,
  metric_value: z.number().optional().nullable(),
  metric_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const MetricLogCreateManyInputObjectSchema: z.ZodType<Prisma.MetricLogCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCreateManyInput>;
export const MetricLogCreateManyInputObjectZodSchema = makeSchema();
