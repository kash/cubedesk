import * as z from 'zod';
export const CustomTrainerLikeFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  creator_id: z.string(),
  creator: z.unknown(),
  custom_trainer: z.unknown(),
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