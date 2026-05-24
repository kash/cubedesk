import * as z from 'zod';
export const BanLogFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean(),
  banned_until: z.date().optional(),
  minutes: z.number().int().optional(),
  forever: z.boolean(),
  created_at: z.date(),
  banned_user: z.unknown(),
  created_by: z.unknown()
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