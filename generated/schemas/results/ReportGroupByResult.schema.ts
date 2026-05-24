import * as z from 'zod';
export const ReportGroupByResultSchema = z.array(z.object({
  id: z.string(),
  created_at: z.date(),
  reason: z.string(),
  created_by_id: z.string(),
  reported_user_id: z.string(),
  resolved_at: z.date(),
  _count: z.object({
    id: z.number(),
    created_at: z.number(),
    reason: z.number(),
    created_by_id: z.number(),
    reported_user_id: z.number(),
    resolved_at: z.number(),
    created_by: z.number(),
    reported_user: z.number()
  }).optional(),
  _min: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    reason: z.string().nullable(),
    created_by_id: z.string().nullable(),
    reported_user_id: z.string().nullable(),
    resolved_at: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    created_at: z.date().nullable(),
    reason: z.string().nullable(),
    created_by_id: z.string().nullable(),
    reported_user_id: z.string().nullable(),
    resolved_at: z.date().nullable()
  }).nullable().optional()
}));