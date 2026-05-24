import * as z from 'zod';
export const MetricLogUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_email: z.string().optional(),
  metric_type: z.unknown(),
  metric_value: z.number().optional(),
  metric_details: z.string().optional(),
  created_at: z.date(),
  user: z.unknown().optional()
}));