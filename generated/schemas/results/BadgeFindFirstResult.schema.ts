import * as z from 'zod';
export const BadgeFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  badge_type_id: z.string(),
  created_at: z.date(),
  badge_type: z.unknown(),
  user: z.unknown()
}));