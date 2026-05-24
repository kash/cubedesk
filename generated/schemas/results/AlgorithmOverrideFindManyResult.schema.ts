import * as z from 'zod';
export const AlgorithmOverrideFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  rotate: z.number().int().optional(),
  cube_key: z.string(),
  created_at: z.date(),
  solution: z.string().optional(),
  name: z.string().optional(),
  scrambles: z.string().optional(),
  user: z.unknown()
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