import * as z from 'zod';

export const BadgeTypeSchema = z.object({
  id: z.string(),
  name: z.string(),
  priority: z.number().int(),
  color: z.string(),
  created_at: z.date(),
  description: z.string(),
  created_by_id: z.string().nullable(),
});

export type BadgeType = z.infer<typeof BadgeTypeSchema>;
