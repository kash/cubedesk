import * as z from 'zod';
export const ProfileViewFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  viewer_id: z.string().optional(),
  profile_id: z.string(),
  created_at: z.date(),
  profile_user_id: z.string(),
  profile: z.unknown(),
  profile_user: z.unknown(),
  viewer: z.unknown().optional()
}));