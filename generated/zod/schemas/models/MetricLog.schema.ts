import * as z from 'zod';
import { MetricLogTypeSchema } from '../enums/MetricLogType.schema';

export const MetricLogSchema = z.object({
  id: z.string(),
  user_email: z.string().nullable(),
  metric_type: MetricLogTypeSchema,
  metric_value: z.number().nullable(),
  metric_details: z.string().nullable(),
  created_at: z.date(),
});

export type MetricLog = z.infer<typeof MetricLogSchema>;
