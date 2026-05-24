import * as z from 'zod';
export const CustomTrainerDownloadFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.date(),
  new_trainer_id: z.string().optional(),
  source_trainer_id: z.string(),
  creator: z.unknown(),
  new_trainer: z.unknown().optional(),
  source_trainer: z.unknown(),
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