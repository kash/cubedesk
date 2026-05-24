import * as z from 'zod';
export const CustomTrainerDownloadUpdateResultSchema = z.nullable(z.object({
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
}));