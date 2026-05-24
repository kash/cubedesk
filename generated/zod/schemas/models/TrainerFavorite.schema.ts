import * as z from 'zod';

export const TrainerFavoriteSchema = z.object({
  id: z.string(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.date(),
});

export type TrainerFavorite = z.infer<typeof TrainerFavoriteSchema>;
