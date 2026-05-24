import * as z from 'zod';
export const ReportFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  created_at: z.date(),
  reason: z.string().optional(),
  created_by_id: z.string(),
  reported_user_id: z.string(),
  resolved_at: z.date().optional(),
  created_by: z.unknown(),
  reported_user: z.unknown()
}));