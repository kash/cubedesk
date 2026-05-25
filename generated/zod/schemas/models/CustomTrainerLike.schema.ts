import * as z from 'zod';

export const CustomTrainerLikeSchema = z.object({
  id: z.string(),
  custom_trainer_id: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  creator_id: z.string(),
});

export type CustomTrainerLike = z.infer<typeof CustomTrainerLikeSchema>;
