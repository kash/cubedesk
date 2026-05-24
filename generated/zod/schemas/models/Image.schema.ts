import * as z from 'zod';

export const ImageSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  url: z.string().nullable(),
  storage_path: z.string().nullable(),
  created_at: z.date(),
});

export type Image = z.infer<typeof ImageSchema>;
