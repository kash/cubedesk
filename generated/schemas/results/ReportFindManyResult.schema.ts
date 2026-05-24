import * as z from 'zod';
export const ReportFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  created_at: z.date(),
  reason: z.string().optional(),
  created_by_id: z.string(),
  reported_user_id: z.string(),
  resolved_at: z.date().optional(),
  created_by: z.unknown(),
  reported_user: z.unknown()
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});