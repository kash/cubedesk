import * as z from 'zod';
export const TrainerFavoriteCreateResultSchema = z.object({
  id: z.string(),
  cube_key: z.string(),
  user_id: z.string(),
  created_at: z.date(),
  user: z.unknown()
});