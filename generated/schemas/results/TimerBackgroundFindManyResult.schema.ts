import * as z from 'zod';
export const TimerBackgroundFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  url: z.string().optional(),
  storage_path: z.string().optional(),
  user_id: z.string(),
  hex: z.string().optional(),
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