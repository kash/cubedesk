import * as z from 'zod';

export const BadgeSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  badge_type_id: z.string(),
  created_at: z.date(),
});

export type Badge = z.infer<typeof BadgeSchema>;
