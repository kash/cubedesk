import * as z from 'zod';

export const CustomTrainerDownloadSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  creator_id: z.string(),
  created_at: z.date(),
  new_trainer_id: z.string().nullable(),
  source_trainer_id: z.string(),
});

export type CustomTrainerDownload = z.infer<typeof CustomTrainerDownloadSchema>;
