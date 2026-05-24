import * as z from 'zod';
export const BadgeTypeUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  priority: z.number().int(),
  color: z.string(),
  created_at: z.date(),
  description: z.string(),
  created_by_id: z.string().optional(),
  badges: z.array(z.unknown()),
  created_by: z.unknown().optional()
}));