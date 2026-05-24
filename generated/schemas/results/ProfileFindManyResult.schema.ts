import * as z from 'zod';
export const ProfileFindManyResultSchema = z.object({
  data: z.array(z.object({
  id: z.string(),
  user_id: z.string(),
  header_image_id: z.string().optional(),
  pfp_image_id: z.string().optional(),
  created_at: z.date(),
  bio: z.string().optional(),
  favorite_event: z.string().optional(),
  main_three_cube: z.string().optional(),
  three_goal: z.string().optional(),
  three_method: z.string().optional(),
  reddit_link: z.string().optional(),
  twitch_link: z.string().optional(),
  youtube_link: z.string().optional(),
  twitter_link: z.string().optional(),
  discord_id: z.string().optional(),
  show_discord_message_button: z.boolean(),
  elo_rating: z.unknown().optional(),
  header_image: z.unknown().optional(),
  pfp_image: z.unknown().optional(),
  user: z.unknown(),
  views: z.array(z.unknown())
})),
  pagination: z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
  hasNext: z.boolean(),
  hasPrev: z.boolean()
})
});