import * as z from 'zod';
export const ActionLogUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  user_email: z.string().optional(),
  action_type: z.string(),
  action_details: z.string().optional(),
  created_at: z.date(),
  user: z.unknown().optional()
}));