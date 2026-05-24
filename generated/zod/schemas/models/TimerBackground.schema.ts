import * as z from 'zod';

export const TimerBackgroundSchema = z.object({
  id: z.string(),
  url: z.string().nullable(),
  storage_path: z.string().nullable(),
  user_id: z.string(),
  hex: z.string().nullable(),
  created_at: z.date(),
});

export type TimerBackground = z.infer<typeof TimerBackgroundSchema>;
