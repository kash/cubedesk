import * as z from 'zod';

export const BanLogSchema = z.object({
  id: z.string(),
  created_by_id: z.string(),
  banned_user_id: z.string(),
  reason: z.string(),
  active: z.boolean().default(true),
  banned_until: z.date().nullable(),
  minutes: z.number().int().default(-1).nullable(),
  forever: z.boolean(),
  created_at: z.date(),
});

export type BanLog = z.infer<typeof BanLogSchema>;
