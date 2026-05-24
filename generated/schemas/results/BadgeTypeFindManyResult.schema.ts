import * as z from 'zod';
export const BadgeTypeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  name: z.string(),
  priority: z.number().int(),
  color: z.string(),
  created_at: z.date(),
  description: z.string(),
  created_by_id: z.string().optional(),
  badges: z.array(z.unknown()),
  created_by: z.unknown().optional()
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