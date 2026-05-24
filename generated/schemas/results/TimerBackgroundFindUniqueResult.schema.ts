import * as z from 'zod';
export const TimerBackgroundFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  url: z.string().optional(),
  storage_path: z.string().optional(),
  user_id: z.string(),
  hex: z.string().optional(),
  created_at: z.date(),
  user: z.unknown()
}));