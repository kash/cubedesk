import * as z from 'zod';
export const MetricLogGroupByResultSchema = z.array(z.object({
  id: z.string(),
  user_email: z.string(),
  metric_value: z.number(),
  metric_details: z.string(),
  created_at: z.date(),
  _count: z.object({
    id: z.number(),
    user_email: z.number(),
    metric_type: z.number(),
    metric_value: z.number(),
    metric_details: z.number(),
    created_at: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    metric_value: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    metric_value: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    user_email: z.string().nullable(),
    metric_value: z.number().nullable(),
    metric_details: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    user_email: z.string().nullable(),
    metric_value: z.number().nullable(),
    metric_details: z.string().nullable(),
    created_at: z.date().nullable()
  }).nullable().optional()
}));