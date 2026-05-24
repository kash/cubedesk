import * as z from 'zod';
import type { Prisma } from '../../../../generated/prisma/client';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';
import { UserAccountCreateNestedOneWithoutMetric_logsInputObjectSchema as UserAccountCreateNestedOneWithoutMetric_logsInputObjectSchema } from './UserAccountCreateNestedOneWithoutMetric_logsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  metric_type: MetricLogTypeSchema,
  metric_value: z.number().optional().nullable(),
  metric_details: z.string().optional().nullable(),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserAccountCreateNestedOneWithoutMetric_logsInputObjectSchema).optional()
}).strict();
export const MetricLogCreateInputObjectSchema: z.ZodType<Prisma.MetricLogCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MetricLogCreateInput>;
export const MetricLogCreateInputObjectZodSchema = makeSchema();
