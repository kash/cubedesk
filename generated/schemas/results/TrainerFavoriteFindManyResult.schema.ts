import * as z from 'zod';
export const TrainerFavoriteFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.date(),
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