import * as z from 'zod';

export const ReportSchema = z.object({
  id: z.string(),
  created_at: z.date(),
  reason: z.string().nullable(),
  created_by_id: z.string(),
  reported_user_id: z.string(),
  resolved_at: z.date().nullable(),
});

export type Report = z.infer<typeof ReportSchema>;
