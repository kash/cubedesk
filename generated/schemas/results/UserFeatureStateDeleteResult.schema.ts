import * as z from 'zod';
export const UserFeatureStateDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user_id: z.string(),
  received_welcome_screen: z.boolean(),
  updated_at: z.date(),
  created_at: z.date(),
  user: z.unknown()
}));