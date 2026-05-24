import * as z from 'zod';
export const BanLogDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean(),
  banned_until: z.date().optional(),
  minutes: z.number().int().optional(),
  forever: z.boolean(),
  created_at: z.date(),
  banned_user: z.unknown(),
  created_by: z.unknown()
}));