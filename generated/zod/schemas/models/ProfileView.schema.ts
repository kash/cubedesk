import * as z from 'zod';

export const ProfileViewSchema = z.object({
  id: z.string(),
  viewer_id: z.string().nullable(),
  profile_id: z.string(),
  created_at: z.date(),
  profile_user_id: z.string(),
});

export type ProfileView = z.infer<typeof ProfileViewSchema>;
