import * as z from 'zod';
export const SolveViewFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  solve_id: z.string(),
  viewer_id: z.string().optional(),
  user_id: z.string(),
  created_at: z.date(),
  solve: z.unknown(),
  user: z.unknown(),
  viewer: z.unknown().optional()
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