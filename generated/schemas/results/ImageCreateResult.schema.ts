import * as z from 'zod';
export const ImageCreateResultSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  url: z.string().optional(),
  storage_path: z.string().optional(),
  created_at: z.date(),
  user: z.unknown(),
  profile_header_image: z.unknown().optional(),
  profile_pfp_image: z.unknown().optional()
});